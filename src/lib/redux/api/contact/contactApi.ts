import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/lib/redux/index';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://talent-connect.onrender.com',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).login?.accessToken;

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        }
        // mode: 'no-cors'
    }),
    tagTypes: ['Developer', 'Education', 'Project', 'Experience', 'Skill'],
    endpoints: (builder) => ({
        contactUs: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/contact/sendEmail`,
                method: 'POST',
                body
            })
        })
    })
});

export const { useContactUsMutation } = contactApi;
