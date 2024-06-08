import React from 'react';
import { Text, Stack, Center } from '@mantine/core';
import classes from './HireCard.module.css';
interface Props {
    icon: React.ReactNode;
    title: string;
    data: string;
}

const HireCard = ({ icon, title, data }: Props) => {
    return (
        <Stack
            style={{
                boxShadow: '0px 11px 40px 0px rgba(33, 149, 243, 0.11)'
            }}
            maw={{ base: '100%', sm: 400 }}
            w={{ base: '100%', sm: 400 }}
            p={{ base: 32 }}
            className={classes.hirecard}
        >
            <Center
                w={80}
                h={80}
                className={classes.icon_container}
                style={{
                    color: '#2195F3',
                    fontWeight: 'lighter',
                    transition: 'ease all 0.8s'
                }}
            >
                {icon}
            </Center>
            {/*</Stack>*/}
            <Text fw="medium" size="24px" className={classes.title}>
                {title}
            </Text>
            <Text size="16px" className={classes.description}>
                {data}
            </Text>
        </Stack>
    );
};

export default HireCard;
