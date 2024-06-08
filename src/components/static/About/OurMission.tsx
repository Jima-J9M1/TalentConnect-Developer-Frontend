'use client';
import { AspectRatio, Button, Flex, Stack, Text } from '@mantine/core';
import Link from 'next/link';

const Mission = () => {
    return (
        <Flex
            justify="center"
            mb={{ base: 0, md: 40 }}
            pl={{ base: 20, md: 135 }}
            pr={{ base: 20, md: 135 }}
            py={{ base: 10, md: 32 }}
            gap={{ base: 24, sm: 48 }}
            direction={{ base: 'column-reverse', md: 'row' }}
            pt={60}
            pb={40}
        >
            <Stack w={{ base: '100%', md: '50%' }}>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/meUHhneJRiE"
                        title="A2SV in 2023: Building a Brighter Tech Future in Africa With Google&#39;s Support"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </Stack>
            <Stack justify="center" gap={40} w={{ base: '100%', lg: '50%' }}>
                <Text
                    style={{ fontWeight: 500, fontSize: 25 }}
                    ta="center"
                    c={'gray.8'}
                >
                    Our Mission
                </Text>
                <Text
                    ta="justify"
                    c={'gray.8'}
                    style={{ fontWeight: 400 }}
                    w={{ base: '100%' }}
                >
                    At Eskalate, our mission is clear: to bridge the gap between
                    businesses seeking skilled tech professionals and talented
                    developers in Africa. We believe in the power of talent to
                    transform businesses and drive sustainable growth in the
                    digital age.
                </Text>
                <Stack align="center">
                    <Button
                        style={{ fontWeight: 400 }}
                        component={Link}
                        href={'/hire'}
                    >
                        Hire Top Talent
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
};

export default Mission;
