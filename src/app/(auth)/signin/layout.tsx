'use client';

import { Grid, Box, Group } from '@mantine/core';

import Image from 'next/image';
import SignupStyle from '@/components/Client/Signup.module.css';
import mainLogo from '@/../public/images/logos/main_logo.svg';
import patternImg from '@/../public/images/auth/pattern.svg';
import pattern2Img from '@/../public/images/auth/pattern2.svg';

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
        </Grid>
    );
}
