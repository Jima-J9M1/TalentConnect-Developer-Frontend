import { BackgroundImage, Button, Stack, Text } from '@mantine/core';
import Link from 'next/link';

const CTA = () => {
    return (
        <Stack
            py={{ base: 50, md: 100 }}
            px={{ base: 16, md: 30, lg: 128 }}
            justify="center"
            align="center"
        >
            <BackgroundImage
                py={80}
                src="/images/common/CTA.png"
                radius="lg"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <Stack
                    gap={32}
                    justify="center"
                    align="center"
                    px={{ base: 5, md: 30, lg: 100 }}
                >
                    <Text
                        size="48px"
                        fw="600"
                        c="white"
                        style={{ textAlign: 'center' }}
                    >
                        Diverse Perspectives, Global Impact
                    </Text>
                    <Text
                        size="20px"
                        fw={{ base: 'normal', md: '500' }}
                        c="gray.1"
                        w="60%"
                        style={{
                            lineHeight: 1.5,
                            textAlign: 'center'
                        }}
                    >
                        Hire African developers to bring diverse perspectives
                        and experiences. Ensure your products are tailored for a
                        global audience and adaptable to ever-evolving needs.
                    </Text>
                    <Link href={'/hire'}>
                        <Button
                            size="md"
                            variant="filled"
                            fw={{ base: 'normal', md: 'bold' }}
                            bg="white"
                            c="blue"
                        >
                            Schedule a Call
                        </Button>
                    </Link>
                </Stack>
            </BackgroundImage>
        </Stack>
    );
};

export default CTA;
