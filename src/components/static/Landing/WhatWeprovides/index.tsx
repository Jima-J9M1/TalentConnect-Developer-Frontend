'use client';
import { Grid, Image, SegmentedControl, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaArrowRightLong } from 'react-icons/fa6';
import classes from './index.module.css';

const Data = [
    {
        id: '1',
        title: 'Web Developer',
        description:
            'Makes your projects look good and work well, turning designs into user-friendly experiences.',
        buttonText: 'Hire Web Developers'
    },
    {
        id: '2',
        title: 'Backend Developer',
        description:
            ' Builds the behind-the-scenes functionality of your project, making sure they run smoothly and handle data efficiently.',
        buttonText: 'Hire Back-end Developers'
    },
    {
        id: '3',
        title: 'Mobile Developer',
        description:
            'Specializes in creating high-performance and user-friendly mobile applications, ensuring a seamless and engaging experience for users across various devices.',
        buttonText: 'Hire Mobile Developers'
    }
];

const WhatweProvide = () => {
    const [value, setValue] = useState('1');
    useEffect(() => {
        const interval = setInterval(() => {
            if (value === '1') {
                setValue('2');
            } else if (value === '2') {
                setValue('3');
            } else {
                setValue('1');
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [value]);
    return (
        <Grid px={{ md: 80, base: 10 }} py={{ md: 90 }} bg="#ffffff">
            <Grid.Col
                span={{ base: 12, md: 12, lg: 6 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Stack
                    gap={30}
                    px={{ md: 10, base: 0 }}
                    className={classes.container}
                >
                    <Text
                        className={classes.firstScreenContainerMoto}
                        style={{
                            lineHeight: 1.5
                        }}
                        size="30px"
                        fw="700"
                        c="#3F3F46"
                    >
                        What We Provide
                    </Text>
                    <SegmentedControl
                        w={{ base: 450, md: '100%' }}
                        transitionDuration={800}
                        bg={'#E9F4FE'}
                        value={value}
                        onChange={setValue}
                        c={'#2195F3'}
                        data={[
                            {
                                label: (
                                    <Text
                                        fw={500}
                                        style={{
                                            color:
                                                value === '1'
                                                    ? '#2195F3'
                                                    : 'black'
                                        }}
                                        className={
                                            classes.firstScreenContainerText
                                        }
                                    >
                                        Web Developer
                                    </Text>
                                ),
                                value: '1'
                            },
                            {
                                label: (
                                    <Text
                                        fw={500}
                                        style={{
                                            color:
                                                value === '2'
                                                    ? '#2195F3'
                                                    : 'black'
                                        }}
                                        className={
                                            classes.firstScreenContainerText
                                        }
                                    >
                                        Backend Developer
                                    </Text>
                                ),
                                value: '2'
                            },
                            {
                                label: (
                                    <Text
                                        fw={500}
                                        style={{
                                            color:
                                                value === '3'
                                                    ? '#2195F3'
                                                    : 'black'
                                        }}
                                        className={
                                            classes.firstScreenContainerText
                                        }
                                    >
                                        Mobile Developer
                                    </Text>
                                ),
                                value: '3'
                            }
                        ]}
                    />
                    <Text
                        px={{ base: 30, md: 0 }}
                        h={80}
                        style={{
                            lineHeight: 1.7
                        }}
                        size="18px"
                        fw="400"
                        c="#52525B"
                        className={classes.firstScreenContainerText}
                    >
                        {Data.find((item) => item.id === value)?.description}
                    </Text>
                    <Link
                        href={'/hire'}
                        style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center',
                            color: '#2195F3',
                            textDecoration: 'none'
                        }}
                    >
                        <Text
                            py={{ base: 5, md: 0 }}
                            size="lg"
                            fw={500}
                            className={classes.firstScreenContainerButtonText}
                        >
                            {Data.find((item) => item.id === value)?.buttonText}{' '}
                        </Text>
                        <FaArrowRightLong size={25} />
                    </Link>
                </Stack>
            </Grid.Col>
            <Grid.Col
                span={{ base: 12, md: 12, lg: 6 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0
                }}
            >
                <Marquee
                    style={{
                        display: 'flex'
                    }}
                    gradient={true}
                    gradientColor="white"
                    gradientWidth={100}
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
                            src="/images/home/TechStacks/css.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/html.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/jquery.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/nextjs.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/sass.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/ts.png"
                            height={9}
                            width={90}
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
                            src="/images/home/TechStacks/vite.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/vue.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/tailwind.png"
                            height={90}
                            width={90}
                            px={15}
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
                    direction="left"
                >
                    <Stack
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            src="/images/home/TechStacks/node.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/spboot.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/flask.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/php.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/docker.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/django.png"
                            height={90}
                            width={90}
                            px={15}
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
                            src="/images/home/TechStacks/django.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/flask.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/tailwind.png"
                            height={90}
                            width={90}
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
                            src="/images/home/TechStacks/css.png"
                            height={90}
                            width={90}
                            px={15}
                            py={15}
                            alt=""
                        />
                    </Stack>
                </Marquee>
            </Grid.Col>
        </Grid>
    );
};
export default WhatweProvide;
