import { Image, Stack } from '@mantine/core';
import Marquee from 'react-fast-marquee';

const OurPartners = () => {
    return (
        <Stack
            gap={50}
            py={{ base: 50, md: 50 }}
            h={220}
            align="center"
            justify="center"
            bg={'#F9F9F9'}
            mt={-60}
        >
            <Marquee
                style={{
                    display: 'flex',
                    overflow: 'hidden'
                }}
                gradient={true}
                gradientColor="#F9F9F9"
                autoFill={true}
                loop={0}
                speed={70}
            >
                <Stack
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    justify="end"
                >
                    <Image
                        src="/images/home/company_logos/bloomberg.png"
                        h={350}
                        w={250}
                        py={20}
                        mx={70}
                        alt=""
                    />
                </Stack>
                <Stack
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        src="/images/home/company_logos/databricks_white-removebg-preview.png"
                        h={600}
                        w={350}
                        py={20}
                        mx={70}
                        alt=""
                    />
                </Stack>
                <Stack
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        src="/images/home/company_logos/google.png"
                        h={350}
                        w={200}
                        py={20}
                        mx={70}
                        alt=""
                    />
                </Stack>
                <Stack
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 6
                    }}
                    justify="end"
                    h="100%"
                >
                    <Image
                        src="/images/home/company_logos/meta.png"
                        h={350}
                        w={270}
                        py={20}
                        mx={70}
                        alt=""
                    />
                </Stack>
                <Stack
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 6
                    }}
                >
                    <Image
                        src="/images/home/company_logos/palantir.png"
                        h={350}
                        w={200}
                        py={20}
                        mx={70}
                        alt=""
                    />
                </Stack>
            </Marquee>
        </Stack>
    );
};

export default OurPartners;
