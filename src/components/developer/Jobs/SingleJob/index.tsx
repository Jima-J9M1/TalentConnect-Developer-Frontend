import { Job } from '@/types';
import { Chip, Flex, Group, Stack, Text } from '@mantine/core';
import { IconBuilding, IconClock, IconLocation } from '@tabler/icons-react';

export default function SingleJob({ job }: { job: Job }) {
    const {
        title,
        company,
        location,
        type,
        level,
        experience,
        description,
        skills
    } = job;

    return (
        <Stack>
            <Text fw={500}>{title}</Text>
            <Group gap={'xl'}>
                <Group gap={'xs'}>
                    <IconBuilding
                        size={16}
                        color="var(--mantine-color-gray-7)"
                    />
                    <Text c={'gray.7'} size={'sm'}>
                        {company}
                    </Text>
                </Group>
                <Group gap={'xs'}>
                    <IconLocation
                        size={16}
                        color="var(--mantine-color-gray-7)"
                    />
                    <Text c={'gray.7'} size={'sm'}>
                        {location}
                    </Text>
                </Group>
                <Group gap={'xs'}>
                    <IconClock size={16} color="var(--mantine-color-gray-7)" />
                    <Text c="gray.7" size={'sm'}>
                        {type}
                    </Text>
                </Group>
            </Group>
            <Group>
                <Text c={'gray.6'} size="sm">
                    {' '}
                    # {level}
                </Text>
                <Text c={'gray.6'} size="sm">
                    {' '}
                    {experience} experience{' '}
                </Text>
            </Group>
            <Text c={'gray.6'} size="sm">
                {' '}
                {description}
            </Text>
            <Flex gap={'xs'}>
                {skills.map((skill, index) => (
                    <Chip key={index} size="xs" color="blue" checked={false}>
                        {skill}
                    </Chip>
                ))}
            </Flex>
        </Stack>
    );
}
