'use client';

import GeneralQuestions from '@/components/static/Faqs/GeneralQuestions';
import { HeaderSection } from '@/components/static/Faqs/HeaderSection';
import classes from '@/components/static/Faqs/HeaderSection/HeaderSection.module.css';
import JoinUsSection from '@/components/static/Faqs/JoinUsSection';
import TalkWithUsSection from '@/components/static/Faqs/TalkWithUsSection';
import { Group, Stack, Text } from '@mantine/core';
import { FaLaptop } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';

const page = () => {
    return (
        <Stack align="center" gap="md">
            <HeaderSection />
            <Group justify="center" align="start" gap={'40px'} py={60}>
                <Stack
                    justify="start"
                    align="start"
                    gap={'xs'}
                    display={{ base: 'none', lg: 'block' }}
                >
                    <Text size="lg" c={'var(--mantine-color-blue-5)'} fw={500}>
                        General
                    </Text>
                    <Text size="md" className={classes.text}>
                        <GoPeople /> For Clients
                    </Text>
                    <Text size="md" className={classes.text}>
                        <FaLaptop /> For Developers
                    </Text>
                </Stack>
                <GeneralQuestions />
            </Group>
            <TalkWithUsSection />
            <JoinUsSection />
        </Stack>
    );
};

export default page;
