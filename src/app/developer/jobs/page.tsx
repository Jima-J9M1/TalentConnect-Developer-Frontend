'use client';
import SingleJob from '@/components/developer/Jobs/SingleJob';
import classes from '@/components/developer/Jobs/jobs.module.css';
import { Job } from '@/types';
import {
    Button,
    Container,
    Flex,
    Stack,
    Tabs,
    Text,
    TextInput
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

// sample jobs data for each tab

const sampleData: Job[] = [
    {
        title: 'Software Engineer',
        company: 'Google',
        location: 'Mountain View, CA, USA',
        type: 'Full-time',
        level: 'Mid',
        experience: '2 years',
        description:
            'Develop, implement, test, and maintain software solutions.',
        skills: ['JavaScript', 'React'],
        status: 'active'
    },
    {
        title: 'Frontend Developer',
        company: 'Facebook',
        location: 'Menlo Park, CA, USA',
        type: 'Part-time',
        level: 'Junior',
        experience: '1 year',
        description:
            'Build and optimize user interfaces using web technologies.',
        skills: ['HTML', 'CSS'],
        status: 'short_listed'
    },
    {
        title: 'Backend Developer',
        company: 'Amazon',
        location: 'Seattle, WA, USA',
        type: 'Full-time',
        level: 'Senior',
        experience: '5 years',
        description: 'Design and build scalable and robust backend services.',
        skills: ['Node.js', 'Express'],
        status: 'completed'
    },
    {
        title: 'Data Scientist',
        company: 'Netflix',
        location: 'Los Gatos, CA, USA',
        type: 'Contract',
        level: 'Mid',
        experience: '3 years',
        description:
            'Analyze and interpret complex datasets to drive business insights.',
        skills: ['Python', 'Pandas'],
        status: 'active'
    },
    {
        title: 'DevOps Engineer',
        company: 'Microsoft',
        location: 'Redmond, WA, USA',
        type: 'Full-time',
        level: 'Senior',
        experience: '4 years',
        description:
            'Manage infrastructure, automate workflows, and continuously improve development processes.',
        skills: ['AWS', 'Docker'],
        status: 'short_listed'
    },
    {
        title: 'UI/UX Designer',
        company: 'Apple',
        location: 'Cupertino, CA, USA',
        type: 'Part-time',
        level: 'Junior',
        experience: '2 years',
        description:
            'Design intuitive and user-friendly interfaces for mobile and web applications.',
        skills: ['Figma', 'Sketch'],
        status: 'completed'
    },
    {
        title: 'Mobile Developer',
        company: 'Snap Inc.',
        location: 'Santa Monica, CA, USA',
        type: 'Full-time',
        level: 'Mid',
        experience: '3 years',
        description: 'Develop and maintain high-quality mobile applications.',
        skills: ['React Native', 'Flutter'],
        status: 'active'
    },
    {
        title: 'QA Engineer',
        company: 'Twitter',
        location: 'San Francisco, CA, USA',
        type: 'Contract',
        level: 'Senior',
        experience: '5 years',
        description:
            'Ensure the quality of software releases through rigorous testing and validation processes.',
        skills: ['Jest', 'Mocha'],
        status: 'short_listed'
    }
];

export default function JobsPage() {
    const [activeTab, setActiveTab] = useState<string | null>('active');

    return (
        <Container py={24}>
            <Stack maw={996} m={'auto'} justify="stretch" gap={32}>
                {/*  input with filter */}
                <Flex pos={'relative'}>
                    <TextInput
                        leftSection={<IconSearch />}
                        placeholder="Search"
                        size="lg"
                        w={'100%'}
                        radius={30}
                    />
                    <Button
                        radius={30}
                        mr={10}
                        w={100}
                        pos={'absolute'}
                        right={0}
                        top={'50%'}
                        style={{
                            transform: 'translateY(-50%)'
                        }}
                    >
                        Filter
                    </Button>
                </Flex>
                {/*  Title */}
                <Text size="lg">Jobs History</Text>

                <Tabs
                    value={activeTab}
                    onChange={setActiveTab}
                    variant="unstyled"
                    defaultValue="settings"
                    classNames={classes}
                >
                    <Tabs.List mb={'xl'}>
                        <Tabs.Tab value="short_listed">Short listed</Tabs.Tab>
                        <Tabs.Tab value="active">Active</Tabs.Tab>
                        <Tabs.Tab value="completed">Completed</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="short_listed">
                        {/* list of jobs  */}
                        <Stack gap={32}>
                            {sampleData
                                .filter(
                                    (value: Job) =>
                                        value.status == 'short_listed'
                                )
                                .map((job: Job, index: number) => {
                                    return <SingleJob job={job} key={index} />;
                                })}
                        </Stack>
                    </Tabs.Panel>
                    <Tabs.Panel value="active">
                        <Stack gap={32}>
                            {sampleData
                                .filter(
                                    (value: Job) => value.status == 'active'
                                )
                                .map((job: Job, index: number) => {
                                    return <SingleJob job={job} key={index} />;
                                })}
                        </Stack>
                    </Tabs.Panel>
                    <Tabs.Panel value="completed">
                        <Stack gap={32}>
                            {' '}
                            {sampleData
                                .filter(
                                    (value: Job) => value.status == 'completed'
                                )
                                .map((job: Job, index: number) => {
                                    return <SingleJob job={job} key={index} />;
                                })}
                        </Stack>
                    </Tabs.Panel>
                </Tabs>
            </Stack>
        </Container>
    );
}
