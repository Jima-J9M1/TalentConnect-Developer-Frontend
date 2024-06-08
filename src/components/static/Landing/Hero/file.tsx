import React from 'react';
import {
    Grid,
    Text,
    Button,
    Stack,
    Image,
    Flex,
    TextInput,
    Group
} from '@mantine/core';
import Link from 'next/link';
import classes from './Landing.module.css';
import { useForm } from '@mantine/form';

const Hero1 = () => {
    const form = useForm({
        initialValues: {
            email: ''
        }
    });
    return (
        <Grid
            bg="#E9F4FE"
            mah={{ base: '1000px', md: '1000px' }}
            h={{ base: '100vh', md: '100vh' }}
        >
            <Grid.Col
                h="100vh"
                mah={{ base: '1000px', md: '1000px' }}
                span={{ base: 12, md: 6 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                py={128}
            >
                <Stack
                    gap="30px"
                    justify="center"
                    align="center"
                    w={{ base: '100%', md: '85%' }}
                    px={24}
                >
                    <Text
                        style={{
                            lineHeight: 1.3
                        }}
                        size="48px"
                        fw="medium"
                        c="black"
                        className={classes.firstScreenContainerMoto}
                    >
                        Empowering Businesses through{' '}
                        <span style={{ color: '#2195F3' }}>
                            {"Africa's Best"}
                        </span>{' '}
                        Talent
                    </Text>
                    <Text
                        style={{
                            lineHeight: 1.7
                        }}
                        size="xl"
                        fw="normal"
                        c="#262626"
                        className={classes.firstScreenContainerText}
                    >
                        Empower your tech teams by hiring our diverse and highly
                        skilled remote developers, providing strong technical
                        and communication skills at competitive rates.
                    </Text>

                    <Flex
                        style={{
                            width: '100%'
                        }}
                        mt={15}
                    >
                        <TextInput
                            flex={1}
                            px={20}
                            variant="unstyled"
                            placeholder="Your Work Email"
                            size="lg"
                            {...form.getInputProps('email')}
                            c="gray.5"
                            bg="#E9F4FE"
                            style={{
                                px: '10px',
                                border: '1px solid var(--mantine-color-gray-5)',
                                borderRight: 'none',
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                                color: '#E9F4FE'
                            }}
                        />

                        <Link
                            style={{
                                borderTopLeftRadius: '0',
                                borderEndStartRadius: '0'
                            }}
                            href={
                                form.values.email.length > 0
                                    ? '/hire?email=' + form.values.email
                                    : '/hire'
                            }
                        >
                            <Button
                                h={'100%'}
                                flex={1}
                                fw="normal"
                                style={{
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0
                                }}
                            >
                                Hire Top Talent
                            </Button>
                        </Link>
                    </Flex>
                </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }} visibleFrom="md">
                <Group
                    mah={{ base: '1000px', md: '1000px' }}
                    pos={'relative'}
                    w={'100%'}
                    h={'100vh'}
                >
                    <Image
                        src="/images/home/hero.webp"
                        alt="Developers working together"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }}
                    />
                    <Stack
                        w="10%"
                        h="100%"
                        style={{
                            background:
                                'linear-gradient(to right, #E9F4FE ,RGB(233, 244, 254,0 )',
                            position: 'absolute',
                            top: 0,
                            left: '0%',
                            zIndex: 10
                        }}
                    ></Stack>
                </Group>
            </Grid.Col>
        </Grid>
    );
};

export default Hero1;
