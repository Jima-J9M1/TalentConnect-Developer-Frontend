import { Center, Flex, Grid, Image, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import JoinCard from './JoinCard';

const Join = () => {
    const [hoverActive, setHoverActive] = useState<boolean>(true);

    const handleHoverAndClick = () => {
        setHoverActive(!hoverActive);
    };
    return (
        <Stack
            px={{ base: 16, md: 50, lg: 180 }}
            bg="#E9F4FE"
            py={{ base: 50, md: 60 }}
            gap={50}
            w="100vw"
        >
            <Center>
                <Text
                    size="30px"
                    w="65%"
                    c="black"
                    style={{
                        lineHeight: 1.5,
                        textAlign: 'center'
                    }}
                    fw={500}
                >
                    Join Top-tech Companies Who Have Hired Best African
                    Developers
                </Text>
            </Center>
            <Flex
                gap={{ base: 10, md: 50 }}
                justify="center"
                align="center"
                direction={{ base: 'column', sm: 'row' }}
            >
                <JoinCard
                    image={'/images/home/company_logos/google.png'}
                    num={20}
                />
                <Stack
                    p="10px"
                    bg="white"
                    h={{ base: 200, md: 220 }}
                    w={{ base: '100%', md: 400 }}
                    style={
                        hoverActive
                            ? {
                                  textAlign: 'center',
                                  borderRadius: '18px',
                                  border: 'none',
                                  backgroundColor: 'white'
                                  //   gap: 10
                              }
                            : {
                                  textAlign: 'center',
                                  borderRadius: '18px',
                                  border: '0.3px solid',
                                  borderColor: '#2195F3',
                                  backgroundColor: 'white',
                                  transform: 'scale(1.03)',
                                  transition: 'transform 0.2s'
                                  //   gap: 10
                              }
                    }
                    onMouseEnter={handleHoverAndClick}
                    onMouseLeave={handleHoverAndClick}
                >
                    <Flex
                        justify="space-between"
                        align="center"
                        gap="15px"
                        // direction={{ base: 'column', md: 'row' }}
                        h={{ base: 250, md: 200 }}
                        w={{ base: '100%', md: 340 }}
                        px={{ base: 50, md: 40 }}
                    >
                        <Stack>
                            <Text size="65px" c="#2195F3" fw="bold">
                                15+
                            </Text>
                            <Text size="20px" c="#2195F3">
                                Hired by
                            </Text>
                        </Stack>
                        <Stack>
                            <Grid>
                                <Grid.Col
                                    span={6}
                                    h="50px"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'end'
                                    }}
                                >
                                    <Image
                                        src="/images/home/company_logos/amazon.png"
                                        alt="Amazon Logo"
                                        height="50%"
                                        width="90%"
                                        fit="contain"
                                    />
                                </Grid.Col>
                                <Grid.Col
                                    span={6}
                                    h="50px"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'end',
                                        paddingTop: 2
                                    }}
                                >
                                    <Image
                                        src="/images/home/company_logos/palanatir.png"
                                        alt="Palantir Logo"
                                        height="50%"
                                        width="90%"
                                        fit="contain"
                                    />
                                </Grid.Col>
                            </Grid>
                            <Grid justify="center" align="center">
                                <Grid.Col
                                    span={6}
                                    h="30px"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'start'
                                    }}
                                >
                                    <Image
                                        src="/images/home/company_logos/linkedIn.png"
                                        alt="LinkedIn Logo"
                                        height="120%"
                                        width="90%"
                                        fit="contain"
                                    />
                                </Grid.Col>
                                <Grid.Col
                                    span={6}
                                    h="70px"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'start'
                                    }}
                                >
                                    <Image
                                        src="/images/home/company_logos/databricks.png"
                                        alt="coding_person"
                                        height="70%"
                                        width="80%"
                                        fit="contain"
                                    />
                                </Grid.Col>
                            </Grid>
                        </Stack>
                    </Flex>
                </Stack>
                <JoinCard
                    image={'/images/home/company_logos/bloomberg.png'}
                    num={15}
                />
            </Flex>
        </Stack>
    );
};

export default Join;
