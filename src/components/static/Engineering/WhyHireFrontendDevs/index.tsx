import { Group, Stack, Text } from '@mantine/core';
import React from 'react';
import WhyFrontendCard from './WhyFrontendCard';
import card1Image from '@/../public/images/engineering/Why Frontend 1.png';
import card2Image from '@/../public/images/engineering/Why Frontend 2.png';
import card3Image from '@/../public/images/engineering/Why Frontend 3.png';

const WhyHireFrontendDevs = () => {
    const cardContent = [
        {
            headerImage: card1Image,
            headerText: 'Specialized Training',
            bodyText:
                'Our comprehensive 1,000+ hour training program equips them with the latest fronted skills (e.g., React, UI/UX design) and communication tools. This translates to a reduced onboarding time and allows your team to focus on core projects.'
        },
        {
            headerImage: card2Image,
            headerText: 'Real-world Project Development',
            bodyText:
                'After mastering core skills, developers tackle real-world challenges in our project development phase. This builds practical skills, fosters teamwork, and develops future leaders through co-ownership. '
        },
        {
            headerImage: card3Image,
            headerText: 'Experienced Mentors',
            bodyText:
                "Our developers learn from the best, they're paired with experienced mentors from tech-giants like Google, alongside our own core development team.  This ensures you get access to skilled developers with a strong support network."
        }
    ];

    return (
        <Stack>
            <Stack gap={30} align="center">
                <Text
                    size="36px"
                    fw="600"
                    c="gray.8"
                    inline
                    style={{ textAlign: 'center' }}
                >
                    Why Should You Hire Front-end Developers from Eskalate?
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        lineHeight: '1.5',
                        maxWidth: '800px'
                    }}
                    size="lg"
                    fw="normal"
                    c="#262626"
                >
                    At Eskalate, our front-end developers receive rigorous
                    training, hands-on project experience, and expert mentorship
                    to elevate your project.
                </Text>
            </Stack>
            <Group
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {cardContent.map((card, index) => (
                    <WhyFrontendCard key={index} {...card} />
                ))}
            </Group>
        </Stack>
    );
};

export default WhyHireFrontendDevs;
