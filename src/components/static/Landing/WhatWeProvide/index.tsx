import React from 'react';
import { Grid, Text, Stack, Flex, Center, Group } from '@mantine/core';
import { FaMobileAlt, FaDesktop, FaDatabase } from 'react-icons/fa';
import TechCard from './TechCard';
import Link from 'next/link';

const data = [
    {
        title: 'Backend Developers',
        description: `Builds the behind-the-scenes functionality of your project, making sure they run
        smoothly and handle data efficiently.`,
        icon: (
            <FaDatabase
                style={{
                    color: 'white',
                    width: '25px',
                    height: '25px'
                }}
            />
        ),
        link: '/'
    },
    {
        title: 'Mobile App Developers',
        description: `Specializes in creating high-performance and user-friendly mobile applications, ensuring
        a seamless and engaging experience for users across various devices.`,
        icon: (
            <FaMobileAlt
                style={{
                    color: 'white',
                    width: '25px',
                    height: '25px'
                }}
            />
        ),
        link: '/'
    },
    {
        title: 'Web Developers',
        description: `Makes your projects look good and work well, turning designs into user-friendly
        experiences.`,
        icon: (
            <FaDesktop
                style={{
                    color: 'white',
                    width: '25px',
                    height: '25px'
                }}
            />
        ),
        link: '/'
    }
];

const WhatWeProvide = () => {
    return (
        <Stack
            gap={40}
            align="center"
            justify="center"
            px={{ base: 16, md: 128 }}
            pt={{ base: 30, md: 20 }}
            pb={{ base: 50, md: 50 }}
        >
            <Stack>
                <Text
                    size="36px"
                    fw="600"
                    c="gray.8"
                    inline
                    style={{ textAlign: 'center' }}
                >
                    What We Provide
                </Text>
            </Stack>
            <Grid
                align="center"
                justify="center"
                py="20px"
                gutter={{ base: 64, lg: 128 }}
            >
                <Grid.Col
                    span={{ base: 12, md: 6 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Stack>
                        {data.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                style={{
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    color: 'black'
                                }}
                            >
                                <ProvideCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))}
                    </Stack>
                </Grid.Col>
                <Grid.Col span={6} visibleFrom="md">
                    <TechCard />
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

const ProvideCard = ({
    title,
    description,
    icon
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) => {
    return (
        <Group maw={700}>
            <Flex
                bg="#E9F4FE"
                align="center"
                gap="24px"
                style={{
                    borderRadius: '15px'
                }}
                p={24}
                w={'100%'}
            >
                <Center bg="#2195F3" p="12px" style={{ borderRadius: '100%' }}>
                    {icon}
                </Center>
                <Stack>
                    <Text fw="bold" size="20px">
                        {title}
                    </Text>
                    <Text
                        style={{
                            lineHeight: 1.5
                        }}
                        size="16px"
                        fw="normal"
                        c="gray.7"
                    >
                        {description}
                    </Text>
                </Stack>
            </Flex>
        </Group>
    );
};

export default WhatWeProvide;
