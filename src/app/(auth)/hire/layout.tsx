'use client';

import { Box, Grid, Group } from '@mantine/core';

import SignupStyle from '@/components/Client/Signup.module.css';
import Image from 'next/image';
import { talent_logo_dark } from '@/lib/constant/image-constant';

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
            <Grid.Col span={{ base: 12, lg: 4.5 }} className={SignupStyle.logo}>
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
