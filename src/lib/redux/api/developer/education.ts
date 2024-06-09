import { Education } from '@/types';
import { baseApi } from '..';

const apiWithEducation = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEducationByDeveloperId: builder.query<Education[], string>({
            query: (id) => `v1/education/getEducations/${id}`,
            providesTags: ['Education']
        }),
        getSingleEducation: builder.query<Education, string>({
            query: (id) => `v1/education/getOne/${id}`,
            providesTags: ['Education']
        }),
        createEducation: builder.mutation<Education, any>({
            query: (body) => ({
                url: `v1/education/addEducation`,
                method: 'POST',
                body: {
                    institutionName: body.institutionName,
                    field: body.field,
                    degree: body.degree,
                    startDate: body.startDate,
                    endDate: body.endDate,
                    description: body.description,
                    isEndDatePresent: body.isEndDatePresent,
                    city: body.city,
                    country: body.country
                }
            }),
            invalidatesTags: ['Education']
        }),
        updateEducation: builder.mutation<Education, any>({
            query: (body) => ({
                url: `v1/education/updateEducation/${body.id}`,
                method: 'PUT',
                body: {
                    institutionName: body.institutionName
                        ? body.institutionName
                        : '',
                    field: body.field ? body.field : '',
                    degree: body.degree ? body.degree : '',
                    startDate: body.startDate ? body.startDate : '',
                    endDate: body.endDate ? body.endDate : '',
                    description: body.description ? body.description : '',
                    isEndDatePresent: body.isEndDatePresent,
                    city: body.city ? body.city : '',
                    country: body.country ? body.country : ''
                }
            }),
            invalidatesTags: ['Education']
        }),
        deleteEducation: builder.mutation<Education, string>({
            query: (id) => {
                // console.log('id', id);
                let val = id.toString();
                // console.log('val', val);

                return {
                    url: `v1/education/deleteEducation/${id}`,
                    method: 'DELETE'
                };
            },
            invalidatesTags: ['Education']
        })
    })
});

export const {
    useGetEducationByDeveloperIdQuery,
    useGetSingleEducationQuery,
    useCreateEducationMutation,
    useUpdateEducationMutation,
    useDeleteEducationMutation
} = apiWithEducation;
