import { Box, Button, Center, Skeleton, Stack, Text } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import DeveloperCard from './DeveloperCard';

import { useGetTopDeveloperQuery } from '@/lib/redux/api/developer/developer';
import 'react-multi-carousel/lib/styles.css';
import './Developer.css';
import './Slider.css';

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

const WhyHireCard = () => {
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
            <Stack>
                <Text
                    size="36px"
                    fw="600"
                    c="gray.8"
                    inline
                    style={{ textAlign: 'center' }}
                >
                    Our Skilled Developers
                </Text>
            </Stack>
            <Box pos={'relative'} w={'100%'}>
                <Center
                    visibleFrom="md"
                    style={{
                        width: '50px',
                        height: '50px',
                        background: '#C2DBFB',
                        border: '1px solid #E9F4FE',
                        borderRadius: '50%',
                        position: 'absolute',
                        left: 30,
                        marginTop: '12%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        // scroll right{}
                        var container = document.querySelector('.container');
                        if (container != null) {
                            container.scrollBy({
                                left: -200,
                                behavior: 'smooth'
                            });
                        }
                    }}
                >
                    <IconChevronLeft
                        style={{ width: '32px', height: '32px' }}
                        stroke={1}
                        color="var(--mantine-color-gray-8)"
                    />
                </Center>

                <Center
                    visibleFrom="md"
                    style={{
                        width: '50px',
                        height: '50px',
                        background: '#C2DBFB',
                        border: '1px solid #E9F4FE',
                        borderRadius: '50%',
                        position: 'absolute',
                        right: 10,
                        marginTop: '12%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                    onClick={() => {
                        var container = document.querySelector('.container');
                        if (container != null) {
                            container.scrollBy({
                                left: 200,
                                behavior: 'smooth'
                            });
                        }
                    }}
                >
                    <IconChevronRight
                        style={{ width: '32px', height: '32px' }}
                        stroke={1}
                        color="var(--mantine-color-gray-8)"
                    />
                </Center>
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
                >
                    {isLoading ? (
                        <Skeletons />
                    ) : (
                        <>
                            {/*button to scroll left and right*/}

                            {data?.map((item: any, index: number) => (
                                <DeveloperCard Developer={item} key={index} />
                            ))}
                        </>
                    )}
                </Stack>
            </Box>

            <Stack w="80%" align="end">
                <Link href={'/talent'}>
                    <Button fw="normal" h={45} w={200} radius={10} size="16px">
                        Discover Talent
                        <GoArrowRight
                            style={{
                                paddingLeft: '5px',
                                width: '30px',
                                height: '30px'
                            }}
                        />
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default WhyHireCard;
