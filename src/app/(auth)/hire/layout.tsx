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
            {/* <Grid.Col span={{ base: 12, lg: 4.5 }} className={SignupStyle.logo}>
                <Group className={SignupStyle.pattern}>
                    <Image
                        src={patternImg}
                        alt="Eskalate Logo"
                        className={SignupStyle.patternImg}
                    />
                </Group>
                <Image
                    src={pattern2Img}
                    alt="Eskalate Logo"
                    className={SignupStyle.pattern2Img}
                />
                <Image
                    className="justify-center"
                    src={mainLogo}
                    alt="Eskalate Logo"
                    // className={SignupStyle.mainLogoImg}
                />
                <Box className={SignupStyle.header}>
                    Empowering Businesses through Africa&apos;s Best Talent
                </Box>
            </Grid.Col> */}
            <Grid.Col
                span={{ base: 12, lg: 7.5 }}
                className={SignupStyle.signup}
            >
                {children}
            </Grid.Col>
        </Grid>
    );
}
