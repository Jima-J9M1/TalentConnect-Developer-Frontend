import { AddClinetInf } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const clientApi = createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://talent-connect.onrender.com',
        prepareHeaders: (headers) => {
            // const token = (getState() as RootState).login?.accessToken;

            // // If we have a token set in state, let's assume that we should be passing it.
            // if (token) {
            //     headers.set('Authorization', `Bearer ${token}`);
            // }

            return headers;
        }
        // mode: 'no-cors'
    }),
    tagTypes: ['Developer', 'Education', 'Project', 'Experience', 'Skill'],
    endpoints: (builder) => ({
        registerClient: builder.mutation<any, any>({
            query: (body: AddClinetInf) => ({
                url: `v1/guestClient/addGuestClient`,
                method: 'POST',
                body
            })
        }),
        updateClient: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/guestClient/updateGuestClientInfo/${body.id}`,
                method: 'PUT',
                body: body.api
            })
        }),
        getSkills: builder.query({
            query: () => ({
                url: `/v1/skills/getAll`,
                method: 'GET'
            })
        })
    })
});

export const {
    useRegisterClientMutation,
    useUpdateClientMutation,
    useGetSkillsQuery
} = clientApi;
