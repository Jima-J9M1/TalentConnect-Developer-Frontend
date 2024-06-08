import { Badge, Group, Timeline } from '@mantine/core';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import DisplayEducation from './DisplayEducation';
import { Education } from '@/types';

const EducationTimeline = ({ educations }: { educations: any[] }) => {
    return (
        <Timeline active={999} lineWidth={1} bulletSize={15} color="blue.6">
            {educations.map((education: Education) => (
                <Timeline.Item
                    key={education.id}
                    bullet={
                        <FaCircle
                            size={12}
                            color="var(--mantine-color-blue-6)"
                        />
                    }
                >
                    <Group>
                        <DisplayEducation education={education} />
                    </Group>
                </Timeline.Item>
            ))}
            {educations.length > 0 && (
                <Timeline.Item
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
            )}
        </Timeline>
    );
};

export default EducationTimeline;
