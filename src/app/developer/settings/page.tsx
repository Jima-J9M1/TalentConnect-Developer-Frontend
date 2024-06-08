'use client';

import { useChangePasswordMutation } from '@/lib/redux/api/developer/auth';
import { useAppSelector } from '@/lib/redux/hooks';
import { Box, Button, Center, PasswordInput, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
    const router = useRouter();
    const loginState = useAppSelector((state: any) => state.login);
    const [
        changePassword,
        {
            isLoading: isChangingPassword,
            error: changePasswordError,
            isSuccess: changePasswordSuccess
        }
    ] = useChangePasswordMutation();

    useEffect(() => {
        if (!loginState?.developerId) {
            router.push(`/signin`);
        }
    }, []);

    const form = useForm({
        initialValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        },

        validate: {
            currentPassword: isNotEmpty('Current password is required'),
            newPassword: (value) => {
                if (value.length < 8) {
                    return 'New password must be at least 8 characters long';
                }
                return null;
            },
            confirmPassword: (value, values) =>
                value !== values.newPassword ? 'Passwords did not match' : null
        }
    });

    const handleChangePassword = () => {
        const values = form.values;
        changePassword({
            oldPassword: values.currentPassword,
            newPassword: values.newPassword
        })
            .unwrap()
            .then((res) => {
                console.log('Change Password Success', res);
                router.push(`/developer/${loginState.developerId}`);
            })
            .catch((error) => {
                console.log('Change Password Error', error);
            });
    };

    return (
        <Center
            mih="60vh"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // alignItems: 'center',
                gap: '16px'
            }}
        >
            <Text size={'lg'} fw={'bold'}>
                Account Settings
            </Text>
            <Box
                bg={'white'}
                px={28}
                py={36}
                style={{
                    borderRadius: '10px',
                    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)'
                }}
                w={{ base: '100%', md: '30%' }}
            >
                <Box
                    component="form"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                    onSubmit={form.onSubmit(handleChangePassword)}
                >
                    <Text size={'lg'} fw={'500'}>
                        Your Password
                    </Text>
                    <PasswordInput
                        label="Current Password"
                        withAsterisk
                        placeholder="Your current password"
                        {...form.getInputProps('currentPassword')}
                        type="text"
                        size={'md'}
                        variant="filled"
                    />

                    <PasswordInput
                        label="New Password"
                        withAsterisk
                        placeholder="Your new password"
                        {...form.getInputProps('newPassword')}
                        type="text"
                        size={'md'}
                        variant="filled"
                    />

                    <PasswordInput
                        label="Confirm New Password"
                        withAsterisk
                        placeholder="Confirm your password"
                        {...form.getInputProps('confirmPassword')}
                        type="text"
                        size={'md'}
                        variant="filled"
                    />

                    {changePasswordError && (
                        <Text
                            style={{
                                color: 'red'
                            }}
                        >
                            {/* abcdd */}
                            {(changePasswordError as any).data?.message}
                        </Text>
                    )}

                    <Button
                        miw={'40%'}
                        style={{ backgroundColor: '#2195F3', alignSelf: 'end' }}
                        type="submit"
                        loading={isChangingPassword}
                    >
                        {changePasswordSuccess ? (
                            <IconCheck color="var(--mantine-color-green-6)" />
                        ) : (
                            'Change Password'
                        )}
                    </Button>
                </Box>
            </Box>
        </Center>
    );
};

export default Page;
