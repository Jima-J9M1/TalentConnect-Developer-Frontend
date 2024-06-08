import { useGetTopDeveloperQuery } from '@/lib/redux/api/developer/developer';
import { Group, Skeleton, Stack, Text } from '@mantine/core';
import DeveloperCard from '../../Landing/OurDevelopers/DeveloperCard';

const Skeletons = () => {
    return (
        <>
            {[...Array(4)].map((e, i) => (
                <Skeleton key={i} visible={true} h={300} color="gray">
                    Lorem ipsum dolor sit amet...
                    {/* other content */}
                </Skeleton>
            ))}
        </>
    );
};

const FrontendDevelopers = () => {
    const { data, isLoading } = useGetTopDeveloperQuery();

    return (
        <Stack
            align="center"
            justify="center"
            gap={60}
            py={{ base: 64, md: 64 }}
            bg="#E9F4FE"
            w="100%"
        >
            <Stack gap={30} align="center">
                <Text
                    size="36px"
                    fw="600"
                    c="gray.8"
                    inline
                    style={{ textAlign: 'center' }}
                >
                    Frontend Developers
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
                    Hear from Industry Leaders: How A2SV Talent, Available
                    through Eskalate, is Making an Impact at Google and Beyond
                </Text>
            </Stack>

            <Group
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Stack
                    className="container"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        overflowX: 'scroll'
                    }}
                    h="100%"
                    w="100%"
                    bg="#E9F4FE"
                    gap={50}
                >
                    {isLoading ? (
                        <Skeletons />
                    ) : (
                        <>
                            {/*button to scroll left and right*/}

                            {data?.map(
                                (item: any, index: number) =>
                                    index < 4 &&
                                    (item.title === 'Frontend Developer' ||
                                        item.title ===
                                            'Full Stack Developer') && (
                                        <DeveloperCard
                                            Developer={item}
                                            key={index}
                                        />
                                    )
                            )}
                        </>
                    )}
                </Stack>
            </Group>
        </Stack>
    );
};

export default FrontendDevelopers;
