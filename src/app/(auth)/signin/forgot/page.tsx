'use client';
import { useForgotPasswordMutation } from '@/lib/redux/api/developer/auth';
import { Alert, Box, Button, Text, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { IconAlertCircle, IconCheck } from '@tabler/icons-react';
import React from 'react';
import ForgotStyle from './Forgot.module.css';

interface FormValue {
    email: string;
}

const Page: React.FC<{}> = () => {
    const [forgotPassword, { isLoading, error, isError, isSuccess }] =
        useForgotPasswordMutation();

    const form = useForm<FormValue>({
        initialValues: {
            email: ''
        },
        validate: {
            email: isEmail('Email is required')
        }
    });

    const handleSubmit = async (values: FormValue) => {
        const value = form.values;

        console.log('here');

        await forgotPassword(value);
    };

    return (
        <Box
            component="form"
            className={ForgotStyle.forgotForm}
            onSubmit={form.onSubmit((values: FormValue) => {
                handleSubmit(values ? values : { email: '' });
            })}
        >
            {isSuccess ? (
                <Alert
                    variant="light"
                    color="blue"
                    radius="md"
                    title="Check your email"
                    icon={<IconAlertCircle />}
                >
                    A Verification Link has been sent to your email address.
                    Please Check your email.
                </Alert>
            ) : (
                <>
                    <Text fw={500} className={ForgotStyle.forgotText}>
                        Forgot Password
                    </Text>
                    <Text className={ForgotStyle.forgotParagraph}>
                        Please enter the email address associated with your
                        account to initiate the password reset process.
                    </Text>
                    <TextInput
                        label="Email"
                        placeholder="example@company.com"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('email')}
                    />
                    {isError && error && (
                        <Text color="red">
                            {(error as any)?.data?.message ??
                                'Something goes wrong!'}
                        </Text>
                    )}

                    <Button
                        fullWidth
                        style={{ backgroundColor: '#006BFF' }}
                        type="submit"
                        loading={isLoading}
                    >
                        {isSuccess ? (
                            <IconCheck color="#ffff" />
                        ) : (
                            'Send Email Confirmation'
                        )}
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Page;
