'use client';

import { useRegisterMutation } from '@/lib/redux/api/developer/auth';
import {
    Box,
    Button,
    Center,
    Grid,
    Input,
    PasswordInput,
    Select,
    Text,
    TextInput,
    createTheme
} from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SignupStyle from './Signup.module.css';
import Image from 'next/image';

const Page = () => {
    const router = useRouter();
    const [register, { isLoading, isError, isSuccess, error }] =
        useRegisterMutation();
    const theme = createTheme({
        components: {
            Input: Input.extend({
                classNames: {
                    input: SignupStyle.input
                }
            })
        }
    });

    const [started, setStarted] = useState(false);

    const form = useForm({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            country: '',
            phoneNumber: '',
            role: ''
        },

        validate: {
            fullName: isNotEmpty('Name is required'),
            email: isEmail('Email is required'),
            country: isNotEmpty('Country is required'),
            phoneNumber: (value): any =>
                value.length < 5 ? 'Invalid phone number' : null,
            password: isNotEmpty('Password is required'),
            confirmPassword: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null
        }
    });

    const handleSignup = (values: any) => {
        const error = form.validate() as any;
        if (error.hasErrors) return;

        const newValue = {
            fullName: values.fullName,
            email: values.email,
            password: values.password,
            country: values.country,
            phoneNumber: '+' + values.phoneNumber,
            role: 'developer'
        };
        // delete the confirmPassword field

        register(newValue)
            .unwrap()
            .then((res: any) => {
                console.log('registered', res);
                router.push('/signup/developer/verify');
            })
            .catch((err) => {
                console.log('error registering', err);
            });
    };

    return (
        // <Center h={'100%'} w={'100%'}>
        //     <Alert
        //         style={{ height: 'fit-content', width: '50%' }}
        //         variant="light"
        //         color="blue"
        //         title="Sorry"
        //         icon={icon}
        //     >
        //         <Text size="lg">
        //             Sign up for developers is currently under development.{' '}
        //             <Link href="/">Go back to home page.</Link>
        //         </Text>
        //     </Alert>
        // </Center>
        <Box
            component="form"
            className={SignupStyle.signupForm}
            onSubmit={form.onSubmit((values: any) =>
                handleSignup(values ? values : {})
            )}
        >
            <Image
                src={'/images/logos/logo-connect-2.svg'}
                width={200}
                height={200}
                alt="logo connect"
                className="mx-20"
            />
            <Text fw={500} className={SignupStyle.signupText}>
                Apply as a freelancer
            </Text>

            <Grid>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <TextInput
                        label="Full name"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('fullName')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <TextInput
                        label="Email"
                        withAsterisk
                        mt="md"
                        {...form.getInputProps('email')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Select
                        searchable
                        withAsterisk
                        label="Country"
                        data={['Ethiopia', 'Ghana']}
                        {...form.getInputProps('country')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    {/* <TextInput
                        label="Phone number"
                        withAsterisk
                        {...form.getInputProps('phoneNumber')}
                    /> */}
                    <Box fw={450}>
                        Phone number <span style={{ color: 'red' }}>*</span>{' '}
                    </Box>
                    <PhoneInput
                        country={'et'}
                        isValid={(value, country) => {
                            if (started == true && value.length < 5) {
                                return false;
                            }
                            return true;
                        }}
                        containerStyle={{ width: '100%', border: 'none' }}
                        inputStyle={{
                            width: '100%'
                        }}
                        onChange={(phone) => {
                            form.setFieldValue('phoneNumber', phone);
                        }}
                        placeholder="Phone Number"
                    />
                    {started &&
                        form.getInputProps('phoneNumber').value.length < 5 && (
                            <Text
                                style={{ fontSize: '13px' }}
                                mt="1px"
                                color="red"
                            >
                                invalid phone number
                            </Text>
                        )}
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <PasswordInput
                        label="Password"
                        withAsterisk
                        {...form.getInputProps('password')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <PasswordInput
                        label="Confirm password"
                        withAsterisk
                        {...form.getInputProps('confirmPassword')}
                    />
                </Grid.Col>
                {error && (
                    <Grid.Col span={{ base: 12, lg: 12 }}>
                        <Text
                            style={{
                                color: 'red'
                            }}
                        >
                            {(error as any).data?.message}
                        </Text>
                    </Grid.Col>
                )}
                {/* <Group></Group> */}
                <Grid.Col
                    span={{ base: 12, lg: 12 }}
                    className="flex justify-center"
                >
                    <Box className={SignupStyle.buttonBox}>
                        <Button
                            loading={isLoading}
                            className={SignupStyle.applyBtn}
                            type="submit"
                            onClick={() => {
                                setStarted(true);
                            }}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Center>
                        <Text fw={400} size="sm">
                            Already have an account?{' '}
                            <Link
                                href={'/signin'}
                                style={{
                                    color: '#006BFF',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                            >
                                Sign in
                            </Link>
                        </Text>
                    </Center>
                </Grid.Col>
            </Grid>
        </Box>
    );
};

export default Page;
