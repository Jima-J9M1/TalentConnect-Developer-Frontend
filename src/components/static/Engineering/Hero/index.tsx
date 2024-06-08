import HeroImage from '@/../public/images/engineering/Hire message content.png';
import { Button, Grid, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <Grid
            bg="#E9F4FE"
            mah={{ base: '1000px', md: '1000px' }}
            h={{ base: '100vh', md: '100vh' }}
        >
            <Grid.Col
                h="100vh"
                mah={{ base: '1000px', md: '1000px' }}
                span={{ base: 12, md: 6 }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                py={128}
            >
                <Stack
                    gap="30px"
                    justify="center"
                    align="center"
                    w={{ base: '100%', md: '85%' }}
                    px={24}
                >
                    <Text
                        style={{
                            lineHeight: 1.3
                        }}
                        size="48px"
                        fw="medium"
                        c="black"
                        className={classes.firstScreenContainerMoto}
                    >
                        Hire Best African{' '}
                        <span style={{ color: '#2195F3' }}>{'Front-End'}</span>{' '}
                        Developers
                    </Text>
                    <Text
                        style={{
                            lineHeight: 1.7
                        }}
                        size="xl"
                        fw="normal"
                        c="#262626"
                        className={classes.firstScreenContainerText}
                    >
                        Access a pool of skilled African front-end developers
                        trained in the latest technologies and equipped with
                        real-world project experience to meet your business
                        needs.
                    </Text>

                    <Link
                        style={{
                            borderTopLeftRadius: '0',
                            borderEndStartRadius: '0',
                            alignSelf: 'flex-start'
                        }}
                        href="/"
                    >
                        <Button h={'100%'} flex={1} fw="normal" py={20}>
                            Hire Front-End Developers
                        </Button>
                    </Link>
                </Stack>
            </Grid.Col>
            <Grid.Col
                span={{ base: 12, md: 6 }}
                visibleFrom="md"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    src={HeroImage}
                    alt="Hire message content"
                    style={{
                        width: '90%',
                        height: 'auto'
                    }}
                />
            </Grid.Col>
        </Grid>
    );
};

export default Hero;
