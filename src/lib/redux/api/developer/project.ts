import { baseApi } from '..';

const apiWithProject = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProjectsByDeveloperId: builder.query<any, string>({
            query: (id) => `v1/project/getProjects/${id}`,
            providesTags: ['Project']
        }),
        getSingleProject: builder.query<any, string>({
            query: (id) => `api/Project/GetOne/${id}`,
            providesTags: ['Project']
        }),
        createProject: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/project/addProject`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Project']
        }),
        updateProject: builder.mutation<any, any>({
            query: (body) => {
                const id: string = body.id;
                delete body.id;
                return {
                    url: `v1/project/updateProject/${id}`,
                    method: 'PUT',
                    body
                };
            },

            invalidatesTags: ['Project']
        }),
        deleteProject: builder.mutation<any, string>({
            query: (id) => ({
                url: `v1/project/deleteProject/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Project']
        })
    })
});

export const {
    useGetProjectsByDeveloperIdQuery,
    useGetSingleProjectQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation
} = apiWithProject;
