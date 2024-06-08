'use client';

import { useResetPasswordMutation } from '@/lib/redux/api/developer/auth';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setUser } from '@/lib/redux/slices/loginSlice';
import { Box, Button, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconCheck } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import ResetStyle from './Reset.module.css';

const Page = () => {
    const [
        resetPassword,
        {
            isLoading: isResetting,
            isError: resetError,
            isSuccess: resetSuccess,
            error: error
        }
    ] = useResetPasswordMutation();
    const dispatch = useAppDispatch();
    const token = useSearchParams().get('token');

    const form = useForm({
        initialValues: {
            newPassword: '',
            confirmPassword: ''
        },
        validate: {
            newPassword: isNotEmpty('Password is required'),
            confirmPassword: (value, values) =>
                value !== values.newPassword ? 'Passwords did not match' : null
        }
    });

    const handleSubmit = () => {
        const values = form.values;
        resetPassword({ token, password: values.newPassword })
            .unwrap()
            .then((res) => {
                // console.log('Login Success', res);
                const data = {
                    accessToken: res.accessToken,
                    refreshToken: res.refreshToken,
                    ...res.user
                };

                dispatch(setUser(data));
            })
            .catch((error) => {
                console.log('Reset Error', error);
            });
    };

    return (
        <Box
            component="form"
            className={ResetStyle.resetForm}
            onSubmit={form.onSubmit((values) => {
                handleSubmit();
            })}
        >
            <Text fw={500} className={ResetStyle.resetText}>
                Reset Password
            </Text>

            <Text className={ResetStyle.resetParagraph}>
                Please enter the your new password.
            </Text>

            <PasswordInput
                type="password"
                label="New Password"
                placeholder="Your new password"
                withAsterisk
                mt="sm"
                {...form.getInputProps('newPassword')}
            />

            <PasswordInput
                label="Confirm New Password"
                placeholder="Confirm your password"
                withAsterisk
                mt="sm"
                {...form.getInputProps('confirmPassword')}
            />

            {error && (
                <Text
                    style={{
                        color: 'red'
                    }}
                >
                    {(error as any)?.data?.message ?? 'Something goes wrong!'}
                </Text>
            )}

            <Button
                mt="sm"
                fullWidth
                style={{ backgroundColor: '#2195F3' }}
                type="submit"
                loading={isResetting}
            >
                {resetSuccess ? <IconCheck color="#ffff" /> : 'Reset'}
            </Button>
        </Box>
    );
};

export default Page;
