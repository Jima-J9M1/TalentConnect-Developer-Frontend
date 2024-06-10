import { BackgroundImage, Box, Flex, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import style from './footerStyle.module.css';
import {
    talent_logo_dark,
    talent_logo_light
} from '@/lib/constant/image-constant';

export default function MainFooter() {
    return (
        <Box
            // src="images/footer/footer.png"
            w={'100%'}
            // bg="/assets/footer.png"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: '#090E34',
                color: 'white'
            }}
        >
            <Stack justify="center" pt={70} w={'100%'} gap={50}>
                <Flex
                    w={'100%'}
                    px={100}
                    justify={'space-between'}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        color: 'white'
                    }}
                    wrap={'wrap'}
                    gap={{ base: 40, md: 0 }}
                >
                    <Stack>
                        <Link href={'/'}>
                            <Image
                                src={talent_logo_dark}
                                width={132}
                                height={100}
                                alt="logo"
                                className="text-white"
                            />
                        </Link>
                        <Text w={'250px'}>Made since 2024 in Ethiopia.</Text>
                        <Group>
                            <Link
                                href={
                                    'https://www.linkedin.com/#talent_connect'
                                }
                                className={style.icon}
                            >
                                <FaLinkedinIn
                                    size={16}
                                    color="var(--mantine-primary-color-filled)"
                                />
                            </Link>

                            <Link
                                href={'https://www.youtube.com/#talent_connect'}
                                className={style.icon}
                            >
                                <FaYoutube
                                    color="var(--mantine-primary-color-filled)"
                                    size={16}
                                />
                            </Link>
                            <Link
                                href={
                                    'https://www.instagram.com/#talent_connect'
                                }
                                className={style.icon}
                            >
                                <AiFillInstagram
                                    color="var(--mantine-primary-color-filled)"
                                    size={16}
                                />
                            </Link>
                        </Group>
                    </Stack>
                    <Stack
                        style={{
                            textTransform: 'capitalize',
                            color: 'white'
                        }}
                    >
                        <Text fw={500} size="lg">
                            Company
                        </Text>
                        <Link className={style.linkStyle} href={'/'}>
                            <Text style={{ color: 'white' }}>Home</Text>
                        </Link>
                        <Link className={style.linkStyle} href={'/about'}>
                            <Text style={{ color: 'white' }}>About us</Text>
                        </Link>
                    </Stack>
                    <Stack>
                        <Text fw={500} size="lg">
                            Features
                        </Text>
                        <Link
                            className={style.linkStyle}
                            href={'/'}
                            target="_blank"
                        >
                            <Text style={{ color: 'white' }}>
                                talentConnect.org
                            </Text>
                        </Link>
                    </Stack>
                    <Stack justify="end">
                        <Text fw={500} size="lg" style={{ color: 'white' }}>
                            Contact us
                        </Text>

                        <Text w={'200px'} style={{ color: 'white' }}>
                            +251-912-13-13-13
                        </Text>
                        <Link
                            className={style.linkStyle}
                            href={'mailto:jimadube100@gmail.com'}
                        >
                            <Text style={{ color: 'white' }}>
                                contact-talentConnect@gmail.com
                            </Text>
                        </Link>

                        <Text w={'200px'} style={{ color: 'white' }}>
                            Addis Ababa Science and Technology University, Addis
                            Ababa
                        </Text>
                    </Stack>
                </Flex>
                <Stack
                    py={10}
                    justify="center"
                    align="center"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}
                >
                    <Text style={{ color: 'white' }}>
                        &#9400; Copyright Talent Connect 2024&#46; All Rights
                        Reserved.
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
}
