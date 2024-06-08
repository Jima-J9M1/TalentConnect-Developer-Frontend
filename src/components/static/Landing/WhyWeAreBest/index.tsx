import { Center, Flex, Grid, Image, Stack, Text } from '@mantine/core';
import { BiBriefcase } from 'react-icons/bi';
import { FaNetworkWired } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { RiSpeakLine } from 'react-icons/ri';

const WhyWeAreBest = () => {
    return (
        <Stack
            bg={'#E9F4FE'}
            pos={'relative'}
            align="center"
            justify="center"
            px={0}
            py={{ base: 50, md: 50 }}
        >
            <Stack>
                <Text
                    size="36px"
                    fw="600"
                    c="gray.8"
                    inline
                    style={{ textAlign: 'center' }}
                >
                    What Makes the African Developers on Eskalate the Best?
                </Text>
            </Stack>
            <Grid align="center" justify="start" py="20px">
                <Grid.Col span={{ base: 12, md: 6 }} m={{ base: 0, md: 40 }}>
                    <Stack gap={34}>
                        <Center w="100%" mt="0">
                            <Flex
                                align="center"
                                justify="start"
                                gap="20px"
                                w={{ base: '100%', md: '70%' }}
                                px="20px"
                                style={{
                                    borderRadius: '20px'
                                }}
                            >
                                <Center
                                    // bg="#2195F3"
                                    p="16px"
                                    style={{
                                        border: 'solid',
                                        borderWidth: '0.1px',
                                        borderRadius: '5px',
                                        borderColor: '#2195F3',
                                        background: '#E9F4FE'
                                    }}
                                >
                                    <LiaChalkboardTeacherSolid
                                        style={{
                                            color: '#2195F3',
                                            width: '28px',
                                            height: '28px'
                                        }}
                                    />
                                </Center>
                                <Stack gap={2}>
                                    <Text fw="bold" size="xl" c="#2195F3">
                                        Rigorous Training
                                    </Text>
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="16px"
                                        fw="normal"
                                        c="#3F3F46"
                                    >
                                        Our developers undergo a rigorous
                                        one-year training program to develop
                                        robust data structures and algorithms
                                        skills.
                                    </Text>
                                </Stack>
                            </Flex>
                        </Center>
                        <Center w="100%" mt="0">
                            <Flex
                                align="center"
                                justify="center"
                                gap="20px"
                                w={{ base: '100%', md: '70%' }}
                                h={{ base: '100px', md: '120px' }}
                                px="20px"
                                style={{
                                    borderRadius: '20px'
                                }}
                            >
                                <Center
                                    // bg="#2195F3"
                                    p="16px"
                                    style={{
                                        border: 'solid',
                                        borderWidth: '0.1px',
                                        borderRadius: '5px',
                                        borderColor: '#2195F3',
                                        background: '#E9F4FE'
                                    }}
                                >
                                    <FaNetworkWired
                                        style={{
                                            color: '#2195F3',
                                            width: '28px',
                                            height: '28px'
                                        }}
                                    />
                                </Center>
                                <Stack gap={2}>
                                    <Text fw="bold" size="xl" c="#2195F3">
                                        Problem Solving
                                    </Text>
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="16px"
                                        fw="normal"
                                        c="#3F3F46"
                                    >
                                        Our A2SV foundation equips developers
                                        with problem solving skills and empowers
                                        them to address critical issues using
                                        digital solutions.
                                    </Text>
                                </Stack>
                            </Flex>
                        </Center>
                        <Center w="100%" mt="0">
                            <Flex
                                align="center"
                                justify="flex-start"
                                gap="20px"
                                w={{ base: '100%', md: '70%' }}
                                h={{ base: '100px', md: '120px' }}
                                px="20px"
                                style={{
                                    borderRadius: '20px'
                                }}
                            >
                                <Center
                                    // bg="#2195F3"
                                    p="16px"
                                    style={{
                                        border: 'solid',
                                        borderWidth: '0.1px',
                                        borderRadius: '5px',
                                        borderColor: '#2195F3',
                                        background: '#E9F4FE'
                                    }}
                                >
                                    <RiSpeakLine
                                        style={{
                                            color: '#2195F3',
                                            width: '28px',
                                            height: '28px'
                                        }}
                                    />
                                </Center>
                                <Stack gap={2}>
                                    <Text fw="bold" size="xl" c="#2195F3">
                                        Strong Communication
                                    </Text>
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="16px"
                                        fw="normal"
                                        c="#3F3F46"
                                    >
                                        Our talent excels in both technical
                                        skills and communication for effective
                                        collaboration.
                                    </Text>
                                </Stack>
                            </Flex>
                        </Center>
                        <Center w="100%" mt="0">
                            <Flex
                                align="center"
                                justify="center"
                                gap="20px"
                                w={{ base: '100%', md: '70%' }}
                                h={{ base: '100px', md: '120px' }}
                                px="20px"
                                style={{
                                    borderRadius: '20px'
                                }}
                            >
                                <Center
                                    // bg="#2195F3"
                                    p="16px"
                                    style={{
                                        border: 'solid',
                                        borderWidth: '0.1px',
                                        borderRadius: '5px',
                                        borderColor: '#2195F3',
                                        background: '#E9F4FE'
                                    }}
                                >
                                    <BiBriefcase
                                        style={{
                                            color: '#2195F3',
                                            width: '25px',
                                            height: '25px'
                                        }}
                                    />
                                </Center>
                                <Stack gap={2}>
                                    <Text fw="bold" size="xl" c="#2195F3">
                                        Hands-on Experience
                                    </Text>
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="16px"
                                        fw="normal"
                                        c="#3F3F46"
                                    >
                                        Talent undergoes a one-year project
                                        development phase, applying theoretical
                                        knowledge to real-world applications
                                    </Text>
                                </Stack>
                            </Flex>
                        </Center>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={5} visibleFrom="md">
                    <Image
                        style={{
                            borderRadius: '20px',
                            width: '100%'
                        }}
                        src="/images/home/coding_person.png"
                        alt="Coding person"
                        height="400px"
                        width="500px"
                    />
                </Grid.Col>
            </Grid>
        </Stack>
    );
};

export default WhyWeAreBest;
