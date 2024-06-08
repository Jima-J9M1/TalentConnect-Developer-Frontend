'use client';
import React from 'react';
import { Button, Flex, Stack, Text, Image } from '@mantine/core';
// import Image from 'next/image';
import { BiBriefcase } from 'react-icons/bi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { FaNetworkWired } from 'react-icons/fa';
import { RiSpeakLine } from 'react-icons/ri';
import Why from './Why';
import Link from 'next/link';

const whyBullet = [
    {
        Icon: LiaChalkboardTeacherSolid,
        title: 'Comprehensive Training:',
        description:
            'A2SV provides rigorous training in data structures and algorithms, preparing students for competitive job markets.'
    },
    {
        Icon: FaNetworkWired,
        title: 'Problem-Solving Skills:',
        description: `Our programs emphasize problem-solving, effective communication, and personal development to enhance students' academic and career success.`
    },
    {
        Icon: RiSpeakLine,
        title: 'Strong Collaborations:',
        description:
            'A2SV has established partnerships with esteemed universities in Ethiopia, Ghana and other top African Universities.'
    },
    {
        Icon: BiBriefcase,
        title: 'Rigorous Vetting Process: ',
        description: `Graduates from A2SV's training program undergo a rigorous vetting process to ensure they meet the standards required by Eskalate and its clients.`
    }
];

const Talent = () => {
    return (
        <Stack
            justify="center"
            bg="rgba(233, 244, 254, 1)"
            pl={{ base: 20, md: 135 }}
            pr={{ base: 20, md: 135 }}
            py={{ base: 10, sm: 32 }}
            pt={60}
            pb={40}
        >
            <Text
                style={{ fontSize: 25, fontWeight: 500 }}
                ta={{ base: 'center', md: 'left' }}
                c={'gray.9'}
            >
                Our Talent Academy
            </Text>
            <Flex
                justify="center"
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 32, sm: 56 }}
            >
                {/* start of lefft section */}
                <Stack
                    justify="center"
                    mt={{ base: 0, md: -60 }}
                    w={{ base: '100%', md: '50%' }}
                >
                    <Stack align="left">
                        <Image
                            src="/images/logos/a2sv.svg"
                            alt="A2SV logo"
                            w={{ base: 200, md: 200 }}
                            h={{ base: 100, md: 100 }}
                            visibleFrom="md"
                        />
                    </Stack>
                    <Stack align="center">
                        <Image
                            src="/images/logos/a2sv.svg"
                            alt="A2SV logo"
                            w={{ base: 200, md: 200 }}
                            h={{ base: 100, md: 100 }}
                            hiddenFrom="md"
                        />
                    </Stack>
                    <Text
                        c={'gray.9'}
                        style={{ fontWeight: 400 }}
                        ta={'justify'}
                    >
                        Eskalate is a project initiated by A2SV, leveraging the
                        academy&apos;s vast network of talent to meet the needs
                        of businesses worldwide. By combining A2SV&apos;s
                        expertise in talent development with Eskalate&apos;s
                        innovative platform, we&apos;re revolutionizing the way
                        businesses hire tech professionals in Africa.
                    </Text>
                    <Stack align="flex-start" ml={{ base: '40%', md: '0' }}>
                        <Button
                            style={{ fontWeight: 400 }}
                            color="rgba(33, 149, 243, 1)"
                            visibleFrom="md"
                        >
                            <Link
                                href={'https://a2sv.org/'}
                                target="_blank"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                            >
                                Visit Site
                            </Link>
                        </Button>
                    </Stack>
                </Stack>
                {/* endof left section */}
                <Stack
                    w={{ base: '100%', md: '50%' }}
                    style={{ fontWeight: 500, fontSize: 25 }}
                    justify="center"
                    gap={30}
                >
                    <Text c={'gray.9'} style={{ fontWeight: 500 }}>
                        What does Africa to Silicon Valley Provide?
                    </Text>
                    <Stack gap={40}>
                        {whyBullet.map((why) => (
                            <Why
                                key={why.title}
                                Icon={why.Icon}
                                title={why.title}
                                description={why.description}
                            />
                        ))}
                    </Stack>
                    <Stack align="flex-start" ml={{ base: '40%', md: '0' }}>
                        <Button
                            hiddenFrom="md"
                            component={Link}
                            href={'https://a2sv.org/'}
                            target="_blank"
                        >
                            Visit Site
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    );
};

export default Talent;
