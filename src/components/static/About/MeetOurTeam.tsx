'use client';
import React from 'react';
import { Center, Grid, Stack, Text } from '@mantine/core';

import ProfileCards from './ProfileCards';

const profileInfo = [
    {
        img: 'images/about/team/emre.jpg',
        name: 'Emre Varol',
        title: 'Founder and CEO',
        desc: 'Emre Varol is a visionary leader and software engineer whose career spans over eight years at Google, Palantir, and Liftoff.',

        linkedin: 'https://www.linkedin.com/in/emre-varol/'
    },
    {
        img: 'images/about/team/brian.jpg',
        name: 'Brian Bell',
        title: 'Chief Business Officer',
        desc: 'Brian boasts a decade of tech-focused sales and business development expertise, specializing in workflow enhancement for robust growth. ',

        linkedin: 'https://www.linkedin.com/in/briana2sv/'
    },
    {
        img: 'images/about/team/yordanos.jpg',
        name: 'Yordanos Asmare',
        title: 'Head of Talent and Partnerships',
        desc: 'Yordanos  brings a global perspective to her roles in community  organizing, talent recruiting, and scaling companies.',

        linkedin: 'https://www.linkedin.com/in/yordanost/'
    },
    {
        img: 'images/about/team/jerusalem.jpg',
        name: 'Jerusalem Admassie',
        title: 'Head of Business and Product',
        desc: 'Jerusalem, a seasoned professional with 14+ years of diverse expertise, excels as the Senior Financial and Operational Analyst at Utility Warehouse Ltd.',

        linkedin: 'https://www.linkedin.com/in/jerusalem-a-a98a3046/'
    }
];

const Meet = () => {
    return (
        <Stack
            bg={'rgba(233, 244, 254, 1)'}
            pl={{ base: 20, md: 135 }}
            pr={{ base: 20, md: 135 }}
            py={{ base: 10, md: 32 }}
            pt={60}
            pb={40}
            gap={40}
            h={'100%'}
        >
            <Stack w={{ base: '100%', md: '50%' }}>
                <Text
                    ta={'left'}
                    c={'gray.8'}
                    style={{
                        fontWeight: 700,
                        fontSize: '20px'
                    }}
                >
                    Meet Our Team
                </Text>
                <Text
                    c={'gray.8'}
                    ta={{ base: 'justify', md: 'justify' }}
                    style={{ fontWeight: 400 }}
                >
                    Our team comprises seasoned engineers and business
                    professionals with extensive experience at leading tech
                    firms like Google&#44; Palantir&#44; Upwork&#44;
                    Liftoff&#44; and more&#46;
                </Text>
            </Stack>
            <Grid gutter={60} justify="center">
                {profileInfo.map((profile) => (
                    // eslint-disable-next-line react/jsx-key
                    <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
                        <Center h="100%">
                            <ProfileCards
                                key={profile.name}
                                img={profile.img}
                                name={profile.name}
                                title={profile.title}
                                desc={profile.desc}
                                linkedin={profile.linkedin}
                            />
                        </Center>
                    </Grid.Col>
                ))}
            </Grid>
        </Stack>
    );
};

export default Meet;
