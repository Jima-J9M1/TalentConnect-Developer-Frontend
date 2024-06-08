import { Card, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

interface WhyFrontendCardProps {
    headerImage: any;
    headerText: string;
    bodyText: string;
}

const WhyFrontendCard = (props: WhyFrontendCardProps) => {
    const { headerImage, headerText, bodyText } = props;

    return (
        <Card
            padding="0"
            radius={0}
            w={'508px'}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            }}
        >
            <Card.Section>
                <Image
                    src={headerImage}
                    alt="Why Hire Frontend Developers from Eskalate?"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md" w={'90%'}>
                {headerText}
            </Text>

            <Text mt="xs" c="dimmed" size="sm" w={'90%'}>
                {bodyText}
            </Text>
        </Card>
    );
};

export default WhyFrontendCard;
