import { Flex, Stack, Text } from '@mantine/core';
import InputCard from './ContactForm';

const TalkWithUs = () => {
    return (
        <Stack
            justify="center"
            align="center"
            bg="#E9F4FE"
            py={64}
            px={{ base: 16 }}
        >
            <Flex
                align="center"
                justify="center"
                gap={{ base: 50, md: 200 }}
                direction={{ base: 'column', md: 'row' }}
            >
                <Flex
                    direction="column"
                    w={{ base: '80%', md: '40%' }}
                    gap="16px"
                >
                    <Text size="50px" ta={{ base: 'center', md: 'left' }}>
                        {'Talk with Us'}
                    </Text>
                    <Text
                        style={{
                            lineHeight: 1.5
                        }}
                        size="25px"
                        ta={{ base: 'center', md: 'left' }}
                    >
                        Questions, comments, or suggestions? Simply fill in the
                        form and we’ll be in touch shortly.
                    </Text>
                    <Stack
                        style={{
                            paddingTop: 20,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4
                        }}
                        pl={{ base: '70px', md: '0' }}
                    ></Stack>
                </Flex>
                <Stack>
                    <InputCard />
                </Stack>
            </Flex>
        </Stack>
    );
};

export default TalkWithUs;
