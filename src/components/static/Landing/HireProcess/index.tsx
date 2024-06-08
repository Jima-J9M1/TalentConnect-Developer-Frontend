import { Box, Button, Grid, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import HireProcessCard from './HireProcessCard';

const HireProcess = () => {
    const items = [
        {
            num: '1',
            title: 'Initial Consultation',
            disc: 'Schedule a brief call with our team to discuss your project needs, team dynamics, and specific skills required.'
        },
        {
            num: '2',
            title: 'Talent Matching',
            disc: 'Based on your requirements, we’ll curate a list of pre-vetted candidates that match your project’s needs.'
        },
        {
            num: '3',
            title: 'Interview',
            disc: 'You’ll have the opportunity to interview selected candidates and assess their fit for your project.'
        },
        {
            num: '4',
            title: 'Risk-Free Hiring',
            disc: 'Benefit from a 2-week free trial period to assess candidate fit.'
        }
    ];

    return (
        <Stack px={16} py={64} gap={32} pos={'relative'}>
            <Text
                size="36px"
                fw="600"
                c="gray.8"
                inline
                style={{ textAlign: 'center' }}
            >
                {' '}
                Hiring Process
            </Text>
            <Stack
                maw={500}
                gap={48}
                pos={'absolute'}
                left={'15%'}
                top={'25%'}
                visibleFrom="lg"
                style={{
                    zIndex: 2
                }}
            >
                <Text c="gray.7">
                    Schedule a call with our team to kickstart your journey in
                    hiring highly trained and vetted top African talent for your
                    projects, all at a competitive cost.
                </Text>
                <Button
                    style={{ width: 'fit-content' }}
                    component={Link}
                    href={'/hire'}
                >
                    Book a Call
                </Button>
            </Stack>
            <Box pb={{ base: 50, md: 128 }} visibleFrom="lg">
                <Box h={'601px'} pos={'relative'}>
                    <Image
                        src={'/images/home/steps.svg'}
                        style={{
                            objectFit: 'cover'
                        }}
                        fill
                        alt="HireWave01"
                    />
                    <Box
                        style={{
                            position: 'absolute',
                            bottom: '-32%',
                            left: '24%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <HireProcessCard
                            title="Initial Consultation"
                            description="Schedule a brief call with our team to discuss your project needs, team dynamics, and specific skills required."
                        />
                    </Box>
                    <Box
                        style={{
                            position: 'absolute',
                            top: '89%',
                            left: '46%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <HireProcessCard
                            title="Talent Matching"
                            description="Based on your requirements, we’ll curate a list of pre-vetted candidates that match your project’s needs."
                        />
                    </Box>
                    <Box
                        style={{
                            position: 'absolute',
                            top: '84%',
                            left: '70%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <HireProcessCard
                            title="Interview"
                            description="You’ll have the opportunity to interview selected candidates and assess their fit for your project."
                        />
                    </Box>
                    <Box
                        style={{
                            position: 'absolute',
                            top: '55%',
                            left: '86%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <HireProcessCard
                            title="Risk-Free Hiring"
                            description="Benefit from a 2-week free trial period to assess candidate fit."
                        />
                    </Box>
                </Box>
                {/* Book a call section */}
            </Box>
            <Grid hiddenFrom="lg" gutter={32} align="center" justify="center">
                {items.map((item: any, index: number) => (
                    <Grid.Col
                        span={{
                            base: 12,
                            md: 6
                        }}
                        key={index}
                    >
                        <HireProcessCard
                            key={index}
                            title={item.title}
                            description={item.disc}
                            num={item.num}
                        />
                    </Grid.Col>
                ))}
                <Grid.Col
                    span={{
                        base: 12
                    }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Button
                        style={{ width: 'fit-content' }}
                        component={Link}
                        href={'/hire'}
                    >
                        Book a Call
                    </Button>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default HireProcess;
