import { Stack, Text, Image } from '@mantine/core';
import Marquee from 'react-fast-marquee';

const OurPartners = () => {
    return (
        <Stack
            gap={50}
            py={{ base: 50, md: 50 }}
            h={300}
            align="center"
            justify="center"
        >
            <Text size="30px" fw={600} c="black" inline>
                Our Partners
            </Text>
            <Marquee
                style={{
                    display: 'flex',
                    overflow: 'hidden'
                }}
                gradient={true}
                gradientColor="white"
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
                        h={300}
                        w={250}
                        py={30}
                        px={30}
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
                        src="/images/home/company_logos/databricks_white.png"
                        h={600}
                        w={350}
                        py={30}
                        px={30}
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
                        h={300}
                        w={200}
                        py={30}
                        px={30}
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
                        h={300}
                        w={270}
                        py={30}
                        px={30}
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
                        h={300}
                        w={200}
                        py={30}
                        px={30}
                        mx={70}
                        alt=""
                    />
                </Stack>
            </Marquee>
        </Stack>
    );
};

export default OurPartners;
