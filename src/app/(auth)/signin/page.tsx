'use client';

import { useLoginMutation } from '@/lib/redux/api/developer/auth';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setUser } from '@/lib/redux/slices/loginSlice';
import {
    Alert,
    Box,
    Button,
    PasswordInput,
    Text,
    TextInput
} from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import SigninStyle from './Signin.module.css';

interface FormValues {
    email: string;
    password: string;
}

const Page = () => {
    const [loginFail, setLoginFail] = useState<Boolean>(false);
    const router = useRouter();
    const params = useSearchParams();
    const isVerified = params.get('verify');
    const dispatch = useAppDispatch();
    const loginState = useAppSelector((state: any) => state.login);

    const [login, { isLoading, isError, isSuccess, error }] =
        useLoginMutation();

    useEffect(() => {
        if (loginState?.developerId) {
            router.push(`developer/${loginState.developerId}`);
        }
    }, [loginState]);

    const form = useForm<FormValues>({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: isEmail('Email is required'),
            password: isNotEmpty('Password is required')
        }
    });

    const handleLogin = async (values: FormValues) => {
        const value = form.values;
        login(value)
            .unwrap()
            .then((res) => {
                console.log('Login Success', res);
                const data = {
                    accessToken: res.accessToken,
                    refreshToken: res.refreshToken,
                    ...res.user
                };
                dispatch(setUser(data));
                router.push(`developer/${loginState.developerId}`);
            })
            .catch((error) => {
                console.log('Error Logging in', error);
            });
    };

    return (
        <Box
            component="form"
            className={SigninStyle.signinForm}
            onSubmit={form.onSubmit((values: FormValues) =>
                handleLogin(values ? values : { email: '', password: '' })
            )}
        >
            {isVerified != null &&
                (isVerified == 'true' ? (
                    <Alert
                        variant="light"
                        color="green"
                        radius="md"
                        title="Successfully Verified"
                        icon={<BiCheckCircle />}
                        withCloseButton
                    >
                        You successfully verified you email. You can Login now!
                    </Alert>
                ) : (
                    <Alert
                        variant="light"
                        color="red"
                        radius="md"
                        title="Verification Failed!"
                        icon={<BiCheckCircle />}
                        withCloseButton
                    >
                        Sorry, the verification is failed!
                    </Alert>
                ))}

            <Text fw={500} className={SigninStyle.loginText}>
                Login
            </Text>
            <Text className={SigninStyle.loginParagraph}></Text>

            <TextInput
                label="Email"
                placeholder="Your email"
                withAsterisk
                // mt="md"
                {...form.getInputProps('email')}
            />
            <PasswordInput
                label="Password"
                withAsterisk
                placeholder="Your password"
                {...form.getInputProps('password')}
                type="text"
            />

            {/*<Button
                variant="outline"
                fullWidth
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    columnGap: '50px'
                }}
                loading={isLoading}
            >
                <FaGoogle
                    style={{
                        marginRight: '10px',
                        color: '#2195F3'
                    }}
                />
                Sign in with Google
            </Button>*/}
            {error && (
                <Text
                    style={{
                        color: 'red'
                    }}
                >
                    Invalid Credentials
                </Text>
            )}
            <Button
                fullWidth
                style={{ backgroundColor: '#2195F3' }}
                type="submit"
                loading={isLoading}
            >
                {isSuccess ? <IconCheck color="#ffff" /> : 'Login'}
            </Button>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '5px'
                }}
            >
                <Text fw={400} size="sm" className="flex gap-2 flex-wrap">
                    <Text>Don&apos;t have an account?</Text>
                    <Link
                        style={{
                            color: '#2195F3',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            textTransform: 'capitalize'
                        }}
                        href={'/signup/developer'}
                    >
                        Sign up
                    </Link>
                </Text>
                <Text
                    onClick={() => {
                        router.push(`signin/forgot`);
                    }}
                    fw={400}
                    size="sm"
                    style={{
                        color: '#2195F3',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    Forgot Password?
                </Text>
            </Box>
        </Box>
    );
};

export default Page;
