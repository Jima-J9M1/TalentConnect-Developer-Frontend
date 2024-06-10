'use client';

import { Grid, Box, Group } from '@mantine/core';

import Image from 'next/image';
import SignupStyle from '@/components/Client/Signup.module.css';
import mainLogo from '@/../public/images/logos/main_logo.svg';
import patternImg from '@/../public/images/auth/pattern.svg';
import pattern2Img from '@/../public/images/auth/pattern2.svg';
import {
    talent_logo_dark,
    talent_logo_light
} from '@/lib/constant/image-constant';

export default function SignUpLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Grid className={SignupStyle.page} bg={'white'}>
            <Grid.Col
                span={{ base: 12, lg: 7.5 }}
                className={SignupStyle.signup}
            >
                {children}
            </Grid.Col>
            <Grid.Col
                span={{ base: 12, lg: 4.5 }}
                className={`${SignupStyle.logo}`}
            >
                {/* <Group className={SignupStyle.pattern}>
                    <Image
                        src={patternImg}
                        alt="talent connect logo"
                        className={SignupStyle.patternImg}
                        width={500}
                        height={500}
                    />
                </Group>
                <Image
                    src={pattern2Img}
                    alt="talent connect logo"
                    className={SignupStyle.pattern2Img}
                    width={500}
                    height={500}
                /> */}
                <Image
                    className="justify-center"
                    src={talent_logo_dark}
                    alt="talent connect logo"
                    width={500}
                    height={500}
                    // className={SignupStyle.mainLogoImg}
                />
            </Grid.Col>
        </Grid>
    );
}
