'use client';

import { Grid } from '@mantine/core';

import SignupStyle from '@/components/Client/Signup.module.css';

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
