'use client';
import React from 'react';
import { Text, Stack, Flex, Image } from '@mantine/core';

const About = () => {
    return (
        <Flex
            justify="center"
            bg={'rgba(233, 244, 254, 1)'}
            pl={{ base: 20, md: 135 }}
            pr={{ base: 20, md: 135 }}
            mb={{ base: 0, md: 40 }}
            gap={{ base: 40, md: 48 }}
            direction={{ base: 'column', sm: 'row' }}
            pt={40}
            pb={40}
        >
            <Stack justify="Center" gap={30}>
                <Text
                    c={'gray.8'}
                    style={{
                        fontSize: 25,
                        fontWeight: 500

                        // color: 'gray/700'
                    }}
                >
                    About Eskalate
                </Text>
                <Text ta="justify" c={'gray.9'} style={{ fontWeight: 400 }}>
                    Eskalate stands as a pioneering platform, committed to
                    empowering businesses with the brilliance of Africa&apos;s
                    tech talent. We serve as the vital link between highly
                    skilled African developers and forward-thinking companies in
                    search of exceptional expertise. Our platform transcends
                    geographical boundaries, providing companies access to a
                    diverse pool of meticulously vetted developers brimming with
                    talent and offering a fresh perspective to innovation.
                </Text>
            </Stack>
            <Stack align="center">
                <Image
                    src="/images/about/african developers.svg"
                    alt="african developers"
                    w={{ base: 300, sm: 500 }}
                    h={{ base: 300, sm: 500 }}
                />
            </Stack>
        </Flex>
    );
};

export default About;
