import { Flex, Image, Stack, Text } from '@mantine/core';
import { useState } from 'react';

interface Props {
    image: string;
    num: number;
}
const JoinCard = ({ image, num }: Props) => {
    const [hoverActive, setHoverActive] = useState<boolean>(true);

    const handleHoverAndClick = () => {
        setHoverActive(!hoverActive);
    };

    return (
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
                gap="10px"
                // direction={{ base: 'column', md: 'row' }}
                h={{ base: 250, md: 200 }}
                w={{ base: '100%', md: 340 }}
                px={{ base: 50, md: 40 }}
            >
                <Stack
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 5
                    }}
                >
                    <Text size="65px" c="#2195F3" fw="bold">
                        {num}+
                    </Text>
                    <Text size="20px" c="#2195F3">
                        Hired by
                    </Text>
                </Stack>
                <Stack
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        src={image}
                        alt="coding_person"
                        height="80px"
                        mx="auto"
                    />
                </Stack>
            </Flex>
        </Stack>
    );
};

export default JoinCard;
