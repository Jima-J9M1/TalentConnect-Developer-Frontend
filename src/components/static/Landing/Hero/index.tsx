import { Avatar, Button, Flex, Grid, Image, Stack, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classes from './Landing.module.css';

const Hero = () => {
    // const router = useRouter();
    // const form = useForm({
    //     initialValues: {
    //         email: ''
    //     }
    // });
    return (
        <Grid
            style={{}}
            h={{ lg: '100vh' }}
            px={{ base: 10, md: 60, lg: 125 }}
            bg="#E9F4FE"
            mah={{ base: '1000px', md: '1000px' }}
            py={{ md: 80, lg: 30, base: 10 }}
            mt={{ base: 70, md: 0, lg: 0 }}
        >
            <Grid.Col
                h={{ lg: '100vh' }}
                mah={{ base: '1000px', md: '1000px' }}
                span={{ base: 12, md: 6.5 }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    gap: '50px'
                }}
            >
                <Stack justify="center">
                    <Text
                        style={{
                            lineHeight: 1.3
                        }}
                        size="48px"
                        fw="700"
                        c="black"
                        className={classes.firstScreenContainerMoto}
                    >
                        Empower Your Teams with{' '}
                        <span style={{ color: '#2195F3' }}>
                            {'Top African Tech'}
                        </span>{' '}
                        Talent
                    </Text>
                </Stack>
                <Stack>
                    <Text
                        style={{
                            lineHeight: 1.7
                        }}
                        size="20px"
                        fw="400"
                        c="#262626"
                        className={classes.firstScreenContainerText}
                    >
                        Eskalate connects you with highly skilled, pre-vetted
                        remote software developers ready to take your projects
                        to the next level.
                    </Text>
                </Stack>
                <Stack className={classes.hireButton}>
                    <Link href={'/hire'}>
                        <Button
                            fw="normal"
                            h={50}
                            px={20}
                            radius={10}
                            size="16px"
                        >
                            Hire Top Talent
                        </Button>
                    </Link>
                </Stack>
                <Flex
                    className={classes.hireButton}
                    gap={15}
                    style={{}}
                    align={'center'}
                >
                    <Avatar.Group spacing={'sm'}>
                        <Avatar src="/images/home/Beimnet.png" size={'lg'} />
                        <Avatar src="/images/home/minase.jpg" size={'lg'} />
                        <Avatar src="/images/home/Tadele.png" size={'lg'} />
                        <Avatar src="/images/home/ruth.jpg" size={'lg'} />
                    </Avatar.Group>
                    <Text
                        style={{
                            display: 'flex',
                            lineHeight: 1.3,
                            alignItems: 'center',
                            gap: '5px',
                            alignContent: 'center',
                            justifyContent: 'center'
                        }}
                        size="18px"
                        fw="normal"
                        c="black"
                    >
                        <span
                            style={{
                                fontWeight: '700',
                                color: '#2195F3',
                                fontSize: '23px',
                                alignSelf: 'center'
                            }}
                        >
                            {'45+'}
                        </span>{' '}
                        Hired by Top-Tech Companies
                    </Text>
                </Flex>
            </Grid.Col>

            <Grid.Col
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                span={{ base: 6, md: 5.5 }}
                visibleFrom="md"
            >
                <Image
                    mt={40}
                    src="/images/home/hero.png"
                    alt="Hero Image"
                    w={{ lg: 550, md: 500, base: 300 }}
                    h={{ lg: 550, md: 500, base: 300 }}
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </Grid.Col>
        </Grid>
    );
};

export default Hero;
