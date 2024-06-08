import { baseApi } from '..';

const apiWithFeedback = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addFeedBack: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/feedback/createFeedback`,
                method: 'POST',
                body
            })
        })
    })
});

export const { useAddFeedBackMutation } = apiWithFeedback;
