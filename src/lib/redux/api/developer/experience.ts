import { Experience } from '@/types';
import { baseApi } from '..';

const apiWithExperience = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllExperiences: builder.query<Experience[], void>({
            query: () => 'api/Experience/GetAll',
            providesTags: ['Experience']
        }),
        getExperienceByDeveloperId: builder.query<Experience[], string>({
            query: (id) => `v1/experience/getExperiences/${id}`,
            providesTags: ['Experience']
        }),
        getOneExperience: builder.query<Experience, string>({
            query: (id) => `v1/experience/getOne/${id}`,
            providesTags: ['Experience']
        }),
        createExperience: builder.mutation<Experience, any>({
            query: (body) => ({
                url: `v1/experience/addExperience`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Experience']
        }),
        updateExperience: builder.mutation<Experience, any>({
            query: (body) => ({
                url: `v1/experience/updateExperience/${body.id}`,
                method: 'PUT',
                body: {
                    title: body.title,
                    company: body.company,
                    startDate: body.startDate,
                    endDate: body.endDate,
                    description: body.description,
                    companyWebsiteUrl: body.companyWebsiteUrl
                }
            }),
            invalidatesTags: ['Experience']
        }),
        deleteExperience: builder.mutation<Experience, string>({
            query: (id) => ({
                url: `v1/experience/deleteExperience/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Experience']
        })
    })
});

export const {
    useGetAllExperiencesQuery,
    useGetExperienceByDeveloperIdQuery,
    useGetOneExperienceQuery,
    useCreateExperienceMutation,
    useUpdateExperienceMutation,
    useDeleteExperienceMutation
} = apiWithExperience;
