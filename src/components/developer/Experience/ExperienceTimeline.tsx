import { Badge, Group, Timeline } from '@mantine/core';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import DisplayExperience from './DisplayExperience';

const ExperienceTimeline = ({ experiences }: { experiences: any }) => {
    return (
        <Timeline active={999} lineWidth={1} bulletSize={15} color="blue.6">
            {experiences.map((experience: any) => (
                <Timeline.Item
                    key={experience ? experience.id : Math.random()}
                    bullet={
                        <FaCircle
                            size={12}
                            color="var(--mantine-color-blue-6)"
                        />
                    }
                >
                    <Group>
                        <DisplayExperience experience={experience} />
                    </Group>
                </Timeline.Item>
            ))}
            <Timeline.Item
                bg={'green'}
                c="dimmed"
                bullet={<Badge color="white" />}
                pos={'relative'}
            >
                <Group
                    pos={'absolute'}
                    w={'2px'}
                    h={'45px'}
                    bg={'white'}
                    top={'-40px'}
                    left={'-2px'}
                ></Group>
            </Timeline.Item>
        </Timeline>
    );
};

export default ExperienceTimeline;
