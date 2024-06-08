import { BackgroundImage, Flex, Grid, Stack, Text } from '@mantine/core';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram, FaPhoneVolume } from 'react-icons/fa6';
import { IoLocationSharp, IoMail } from 'react-icons/io5';

const TalkWithUs2 = () => {
    return (
        <Stack
            justify="center"
            align="center"
            bg="#ffffff"
            py={64}
            px={{ base: 16 }}
        >
            <Stack gap={5}>
                <Stack justify="center" align="center">
                    <Text size="30px" fw={600} c="#3F3F46">
                        Contact Us
                    </Text>
                </Stack>
                <Stack align="center" justify="center">
                    <Text
                        size="20px"
                        fw={400}
                        c="#71717A"
                        style={{
                            textAlign: 'center',
                            lineHeight: 1.5
                        }}
                    >
                        Any question or remarks? Just write us a message!
                    </Text>
                </Stack>
            </Stack>
            <Grid>
                <Grid.Col
                    span={{ md: 6 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 4
                    }}
                >
                    <BackgroundImage
                        src="images/footer/footer.png"
                        w={'100%'}
                        // bg="/assets/footer.png"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center'
                        }}
                    >
                        <Stack>
                            <Stack>Contact Information</Stack>
                            <Flex align={'center'} gap={'lg'}>
                                <FaPhoneVolume size={'15px'} />
                                <Text>+16506135180</Text>
                            </Flex>
                            <Flex align={'center'} gap={'lg'}>
                                <IoMail size={'25px'} />
                                <Text>contact-eskalate@a2sv.org</Text>
                            </Flex>
                            <Flex align={'center'} gap={'lg'}>
                                <IoLocationSharp size={'50px'} />
                                <Text>
                                    San Francisco Bay Area, Addis Ababa,
                                    Ethiopia
                                </Text>
                            </Flex>
                            <Flex>
                                <FaTwitter />
                                <FaInstagram />
                            </Flex>
                        </Stack>
                    </BackgroundImage>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default TalkWithUs2;
