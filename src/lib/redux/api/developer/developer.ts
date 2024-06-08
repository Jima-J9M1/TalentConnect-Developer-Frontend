import { Developer } from '@/types';
import { baseApi } from '..';

const apiWithDeveloper = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDeveloper: builder.query({
            query: () => `v1/developers/getProfile`,
            providesTags: ['Developer']
        }),
        getDeveloperById: builder.query({
            query: (id) => `v1/developers/getDeveloper/${id}`,
            providesTags: ['Developer']
        }),
        getTopDeveloper: builder.query<any, void>({
            query: () => 'v1/developers/getTopDevelopers'
        }),
        getDevelopers: builder.query<Developer[], void>({
            query: () => 'api/Developer/GetAll',
            providesTags: ['Developer']
        }),
        createDeveloper: builder.mutation<Developer, Partial<Developer>>({
            query: (body) => ({
                url: `developers`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['Developer']
        }),
        updateDeveloper: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/developers/updateProfile`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Developer']
        }),
        updateDeveloperFile: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/developers/updateProfile`,
                method: 'PUT',
                body: body
            }),
            invalidatesTags: ['Developer']
        }),
        deleteDeveloper: builder.mutation<Developer, string>({
            query: (id) => ({
                url: `developers/${id}`,
                method: 'DELETE'
            })
        }),
        getPaginatedDevelopers: builder.query<
            Developer[],
            {
                page?: any;
                limit?: any;
                title?: any[];
                minExpYears?: any;
                maxExpYears?: any;
                minScore?: any;
                maxScore?: any;
                country?: any[];
                skills?: any[];
                search: any;
            }
        >({
            query: ({
                page,
                limit,
                title,
                minExpYears,
                maxExpYears,
                minScore,
                maxScore,
                country,
                skills,
                search
            }) => {
                let url = `v1/developers/getDevelopers/?page=${page}&limit=${limit}`;

                title?.forEach((value) => {
                    if (value) {
                        url += `&title=${value}`;
                    }
                });

                if (minExpYears) {
                    url += `&minExpYears=${minExpYears}`;
                }
                if (maxExpYears) {
                    url += `&maxExpYears=${maxExpYears}`;
                }
                if (minScore) {
                    url += `&minScore=${minScore}`;
                }
                if (maxScore) {
                    url += `&maxScore=${maxScore}`;
                }
                if (country) {
                    url += `&country=${country}`;
                }
                skills?.forEach((value) => {
                    if (value) {
                        url += `&skill=${value}`;
                    }
                });
                if (search) {
                    url += `&search=${search}`;
                }

                // console.log("URL", url)
                return {
                    url: url,
                    method: 'GET'
                };
            },
            providesTags: ['Developer']
        }),
        getProgressBar: builder.query({
            query: () => `v1/developers/getProgressBar`,
            providesTags: [
                'Developer',
                'Education',
                'Experience',
                'Project',
                'Skill'
            ]
        }),
        updateAvailability: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/developers/updateAvailability`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Developer']
        })
    })
});

export const {
    useGetDeveloperQuery,
    useGetDeveloperByIdQuery,
    useGetTopDeveloperQuery,
    useGetDevelopersQuery,
    useCreateDeveloperMutation,
    useUpdateDeveloperMutation,
    useUpdateDeveloperFileMutation,
    useDeleteDeveloperMutation,
    useGetPaginatedDevelopersQuery,
    useGetProgressBarQuery,
    useUpdateAvailabilityMutation
} = apiWithDeveloper;
