import { Button, Grid, Stack, Text, Image, Card } from '@mantine/core';
import React from 'react';
import Marquee from 'react-fast-marquee';
import classes from './index.module.css';
import Link from 'next/link';
const ConnectWithTalent = () => {
    return (
        <Grid
            px={{ lg: 125, md: 90 }}
            py={{ md: 90 }}
            style={{}}
            bg="#ffffff"
            mah={{ base: '1000px', md: '1000px' }}
        >
            <Grid.Col
                px={{ base: 30, md: 0 }}
                mah={{ base: '1000px', md: '850px' }}
                span={{ base: 11.5, md: 6 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Stack gap={30}>
                    <Text
                        className={classes.firstScreenContainerMoto}
                        style={{
                            lineHeight: 1.5
                        }}
                        size="30px"
                        fw="700"
                        c="#3F3F46"
                    >
                        Build Your Dream Team with A2SV Talent through Eskalate
                    </Text>
                    <Text
                        style={{
                            lineHeight: 1.7
                        }}
                        size="18px"
                        fw="400"
                        c="#52525B"
                    >
                        At Eskalate, our talent pipeline is powered by Africa to
                        Silicon Valley (A2SV), a renowned academy dedicated to
                        nurturing software developers across Africa. A2SV has
                        placed over 45 graduates at top-tier tech companies
                        including Google, Bloomberg, Databricks, Amazon,
                        LinkedIn, and Square.
                    </Text>
                    <Text
                        style={{
                            lineHeight: 1.7
                        }}
                        size="18px"
                        fw="400"
                        c="#52525B"
                    >
                        Hire top-tier talent trained by A2SV, with the caliber
                        of FAANG companies, ready to excel in your teams.
                    </Text>
                    <Card px={0} className={classes.container}>
                        <Link href={'/talent'}>
                            <Button
                                fw="normal"
                                h={50}
                                px={20}
                                radius={10}
                                size="16px"
                            >
                                Connect With Talent
                            </Button>
                        </Link>
                    </Card>
                </Stack>
            </Grid.Col>
            <Grid.Col
                mah={{ base: '1000px', md: '1000px' }}
                span={{ base: 12, md: 6 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}
            >
                <Marquee
                    style={{
                        display: 'flex',
                        overflow: 'hidden'
                    }}
                    gradient={true}
                    gradientColor="white"
                    autoFill={true}
                    loop={0}
                    speed={50}
                >
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/google.png"
                            height={150}
                            width={200}
                            px={15}
                            py={15}
                            alt=""
                        />
                    </Stack>
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/amazon.png"
                            height={150}
                            width={200}
                            px={10}
                            py={15}
                            alt=""
                        />
                    </Stack>
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/bloomberg.png"
                            height={150}
                            width={200}
                            px={10}
                            py={15}
                            alt=""
                        />
                    </Stack>
                </Marquee>
                <Marquee
                    style={{
                        display: 'flex',
                        overflow: 'hidden'
                    }}
                    gradient={true}
                    gradientColor="white"
                    autoFill={true}
                    loop={0}
                    speed={50}
                    direction="right"
                >
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/databricks.png"
                            height={150}
                            width={200}
                            px={10}
                            py={15}
                            alt=""
                        />
                    </Stack>
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/square.png"
                            height={150}
                            width={200}
                            px={10}
                            py={15}
                            alt=""
                        />
                    </Stack>
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/palantir.png"
                            height={150}
                            width={200}
                            px={10}
                            py={15}
                            alt=""
                        />
                    </Stack>
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/linkedin.png"
                            height={150}
                            width={200}
                            px={10}
                            py={15}
                            alt=""
                        />
                    </Stack>
                </Marquee>
            </Grid.Col>
        </Grid>
    );
};
export default ConnectWithTalent;
