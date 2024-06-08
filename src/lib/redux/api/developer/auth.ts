import { baseApi } from '..';

export const apiWithAuth = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/users/signup`,
                method: 'POST',
                body
            })
        }),
        login: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/users/login`,
                method: 'POST',
                body
            })
        }),
        forgotPassword: builder.mutation<any, any>({
            query: (body) => ({
                url: `/v1/users/forgot-password`,
                method: 'POST',
                body
            })
        }),
        resetPassword: builder.mutation<any, any>({
            query: (body) => ({
                url: `/v1/users/reset-password`,
                method: 'POST',
                body: {
                    newPassword: body.password,
                    token: body.token
                }
            })
        }),
        changePassword: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/users/change-password`,
                method: 'PUT',
                body: {
                    oldPassword: body.oldPassword,
                    newPassword: body.newPassword
                }
            })
        })
    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useChangePasswordMutation
} = apiWithAuth;
