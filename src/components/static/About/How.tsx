'use client';
import { Stack, Flex, Group, Text, Image } from '@mantine/core';
import Step from './Step';

const howBullet = [
    {
        n: 1,
        title: 'Orientation Session',
        description:
            'This initial meeting allows us to get to know the talent and explore their experience with programming languages, frameworks, and tools relevant to the role you are seeking to fill.'
    },

    {
        n: 2,
        title: 'Technical Interview',
        description:
            'During this in-depth session, we present the talent with a problem or scenario that reflects the technical demands of the position. This allows us to assess their ability to analyze complex challenges, design effective solutions, and clearly communicate their thought process.'
    },
    {
        n: 3,
        title: 'Practical Assignment',
        description:
            'The talent will complete a practical assignment relevant to the role. This hands-on assessment provides us with valuable insights into their coding style, ability to work independently, and project management skills within a set timeframe.'
    },
    {
        n: 4,
        title: 'Tech Stack Interview',
        description:
            "This focused discussion delves deeper into the talent's experience with the specific technologies your team utilizes in this role which ensures a smooth transition and allows us to see how their expertise aligns with your existing tech stack."
    }
];

const size = howBullet.length;

const How = () => {
    return (
        <Stack
            pl={{ base: 20, md: 135 }}
            pr={{ base: 20, md: 135 }}
            pt={{ base: 20, md: 60 }}
            pb={{ base: 20, md: 40 }}
            gap={40}
        >
            <Text c={'gray.9'} style={{ fontSize: 25, fontWeight: 500 }}>
                How we onboard talent?
            </Text>
            <Flex direction={{ base: 'column', sm: 'row' }}>
                {/* how bullet and stepper */}
                <Flex
                    gap={20}
                    style={{
                        height: 'fit-content'
                    }}
                >
                    <Flex
                        h={'100%'}
                        direction={'column'}
                        align={'center'}
                        gap={30}
                    >
                        {howBullet.map((howB) => (
                            <>
                                <Step
                                    key={howB.n}
                                    n={howB.n}
                                    title={howB.title}
                                    description={howB.description}
                                />
                                {howB.n < size ? (
                                    <Group
                                        style={{
                                            height: 'inherit'
                                        }}
                                        w={1}
                                        bg={'blue'}
                                    />
                                ) : null}
                            </>
                        ))}
                    </Flex>
                </Flex>
                {/* Image section */}
                <Stack
                    align="center"
                    justify="center"
                    w={{ base: '', sm: '100%' }}
                    pt={{ base: '50', sm: '' }}
                >
                    <Image
                        src="/images/about/onboarding_process.svg"
                        alt="Onboarding process"
                        w={{ base: 300, sm: 500 }}
                        h={{ base: 300, sm: 500 }}
                    />
                </Stack>
            </Flex>
        </Stack>
    );
};

export default How;
