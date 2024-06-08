import { baseApi } from '..';

const apiWithSkill = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSkills: builder.query<any, void>({
            query: () => `v1/skills/getAll`
        }),
        getSkills: builder.query<any, void>({
            query: (id) => `v1/developers/getSkills/${id}`,
            providesTags: ['Skill']
        }),
        addSkill: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/developers/addSkill`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Skill']
        }),
        addMultipleSkills: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/developers/addMultipleSkills`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Skill']
        }),
        updateSkill: builder.mutation<any, any>({
            query: (body) => {
                return {
                    url: `v1/developers/updateSkill/${body.skillId}`,
                    method: 'PUT',
                    body
                };
            },
            invalidatesTags: ['Skill']
        }),
        deleteSkill: builder.mutation<any, string>({
            query: (id) => ({
                url: `v1/developers/deleteSkill/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Skill']
        })
    })
});

export const {
    useGetSkillsQuery,
    useAddSkillMutation,
    useAddMultipleSkillsMutation,
    useUpdateSkillMutation,
    useDeleteSkillMutation,
    useGetAllSkillsQuery
} = apiWithSkill;
