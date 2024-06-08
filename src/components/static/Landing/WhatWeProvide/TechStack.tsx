import { Center, Flex, Stack, Text } from '@mantine/core';
import React from 'react';

interface TechItems {
    icon: React.JSX.Element;
    text: string;
}

interface Props {
    techItems: TechItems[];
}

const TechCardStack = ({ techItems }: Props) => {
    return (
        <Flex gap={5}>
            {techItems.map((item, index) => (
                <Stack
                    key={index}
                    p={7}
                    bg="white"
                    m={1}
                    style={{
                        borderRadius: '5px',
                        boxShadow: '0 10 1 rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <Flex justify="space-between" w="100%" px={2} gap={15}>
                        <Center w={50} h={50}>
                            {item.icon}
                        </Center>
                        <Center>
                            <Text size="12px">{item.text}</Text>
                        </Center>
                    </Flex>
                </Stack>
            ))}
        </Flex>
    );
};

export default TechCardStack;
