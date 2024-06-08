import { Flex, Stack, Text } from '@mantine/core';
import React from 'react';

interface props {
    Icon: React.ElementType;
    title: string;
    description: string;
}

const Why = ({ Icon, title, description }: props) => {
    return (
        <Flex gap={25} align="center" w={{ base: '100%', sm: '100%' }}>
            <Stack
                style={{
                    border: 'solid',
                    borderColor: 'rgba(33, 149, 243, 1)',

                    outline: 'none',

                    height: '32px',

                    borderRadius: '5px'
                }}
                justify="center"
            >
                <Icon
                    style={{
                        color: 'rgba(33, 149, 243, 1)',
                        width: '30px',
                        height: '30px',
                        alignItems: 'center',
                        padding: 4
                    }}
                />
            </Stack>
            <Stack gap={8}>
                <Text
                    style={{
                        fontWeight: 400,
                        color: 'rgba(33, 149, 243, 1)'
                    }}
                >
                    {title}
                </Text>
                <Text
                    c={'gray.9'}
                    style={{
                        fontWeight: 400
                    }}
                >
                    {description}
                </Text>
            </Stack>
        </Flex>
    );
};

export default Why;
