import { BackgroundImage, Flex, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import style from './footerStyle.module.css';

export default function MainFooter() {
    return (
        <BackgroundImage
            src="images/footer/footer.png"
            w={'100%'}
            // bg="/assets/footer.png"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
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
                        alignContent: 'center'
                    }}
                    wrap={'wrap'}
                    gap={{ base: 40, md: 0 }}
                >
                    <Stack>
                        <Link href={'/'}>
                            <Image
                                src={'images/logos/logo-connect-2.svg'}
                                width={132}
                                height={100}
                                alt="logo"
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
                            textTransform: 'capitalize'
                        }}
                    >
                        <Text fw={500} size="lg">
                            Company
                        </Text>
                        <Link className={style.linkStyle} href={'/'}>
                            <Text>Home</Text>
                        </Link>
                        {/* <Link className={style.linkStyle} href={'/talent'}>
                            <Text>Discover Talent</Text>
                        </Link> */}
                        <Link className={style.linkStyle} href={'/about'}>
                            <Text>About us</Text>
                        </Link>
                    </Stack>
                    {/*                     
                    <Stack hidden>
                        <Text fw={500} size="lg">
                            Talents
                        </Text>
                        <Link
                            className={style.linkStyle}
                            href={'/engineering'}
                            target="_blank"
                        >
                            <Text>Web Developers</Text>
                        </Link>
                        <Link
                            className={style.linkStyle}
                            href={'/engineering'}
                            target="_blank"
                        >
                            <Text>Back-end Developers</Text>
                        </Link>
                        <Link
                            className={style.linkStyle}
                            href={'/engineering'}
                            target="_blank"
                        >
                            <Text>Mobile Developers</Text>
                        </Link>
                    </Stack> */}
                    <Stack>
                        <Text fw={500} size="lg">
                            Community
                        </Text>
                        <Link
                            className={style.linkStyle}
                            href={'https://a2sv.org/'}
                            target="_blank"
                        >
                            <Text>talentConnect.org</Text>
                        </Link>
                    </Stack>
                    <Stack
                        style={{
                            border: '1px solid #E9F4FE'
                        }}
                        justify="end"
                    >
                        <Text fw={500} size="lg">
                            Contact us
                        </Text>

                        <Text w={'200px'} c={'dark'}>
                            +251-912-13-13-13
                        </Text>
                        <Link
                            className={style.linkStyle}
                            href={'mailto:contact-talent_connect@a2sv.org'}
                        >
                            <Text>contact-talentConnect@gmail.com</Text>
                        </Link>

                        <Text w={'200px'} c={'dark'}>
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
                    <Text>
                        &#9400; Copyright Talent Connect 2024&#46; All Rights
                        Reserved.
                    </Text>
                </Stack>
            </Stack>
        </BackgroundImage>
    );
}
