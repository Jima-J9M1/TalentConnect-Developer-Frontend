import { Stack, Text } from '@mantine/core';
import React from 'react';
import style from './HeaderSection.module.css';

export const HeaderSection = () => {
    return (
        <Stack
            h={300}
            w={'100%'}
            align="center"
            justify="center"
            gap="xl"
            className={style.container}
        >
            <Text size={'60'} fw={600} c={'var(--mantine-color-blue-5)'} lh={0}>
                FaQs
            </Text>
            <Text size="xl" c={'var(--mantine-color-blue-5)'}>
                Your questions answered here.
            </Text>
        </Stack>
    );
};
