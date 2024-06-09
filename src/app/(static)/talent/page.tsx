'use client';

import DiscoverTalents from '@/components/static/Talents/DiscoverTalents';
import FilterTalents from '@/components/static/Talents/FilterTalents';
import { useGetPaginatedDevelopersQuery } from '@/lib/redux/api/developer/developer';
import { isClientSide } from '@/utils/talentsSave';
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Modal,
    Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import React, { useEffect } from 'react';
import HeroSearch from './search-hero';

const Page = () => {
    const [talents, setTalents] = React.useState(null) as any;
    const [params, setParams] = React.useState({
        page: 1,
        limit: 1000
    }) as any[];
    const [loading, setLoading] = React.useState(true) as any[];
    const [opened, { open, close }] = useDisclosure(false);

    const {
        data: talentsData,
        isLoading: talentsLoading,
        isError: talentsError
    } = useGetPaginatedDevelopersQuery({ ...params });

    useEffect(() => {
        if (!talentsLoading) {
            setTalents(talentsData);
            setLoading(false);
        }
    }, [talentsData]);

    useEffect(() => {
        setLoading(talentsLoading);
    }, [talentsLoading]);

    useEffect(() => {
        if (isClientSide()) {
            const clicks = localStorage.getItem('talentClicks');

            if (!clicks || clicks === 'undefined') {
                localStorage.setItem('talentClicks', '0');
            }

            const clearLocalStorage = () => {
                localStorage.removeItem('talentClicks');
            };

            window.addEventListener('beforeunload', clearLocalStorage);

            return () => {
                window.removeEventListener('beforeunload', clearLocalStorage);
            };
        }
    }, []);

    // const ls = localStorage.getItem('talentClicks');

    // console.log("clickedTalents", ls)

    return (
        <Box bg="#F4F4F5" m={0}>
            <HeroSearch />
            <Flex
                justify="center"
                maw={'2000px'}
                mx={'auto'}
                align={{ base: 'center', md: 'start' }}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 'sm', md: 'xl' }}
                py={40}
                px={20}
            >
                <FilterTalents
                    talents={talents}
                    setTalents={setTalents}
                    setLoading={setLoading}
                    params={params}
                    setParams={setParams}
                />
                <Flex
                    w={{ base: '100%', md: '60%' }}
                    direction="column"
                    gap={{ base: 'sm', md: 'md' }}
                    align="center"
                    style={{ position: 'relative' }}
                >
                    <Container
                        maw={'1100px'}
                        w={'100%'}
                        p={0}
                        m={0}
                        h={'100vh'}
                        // style={{
                        //     overflowY: 'scroll',
                        //     scrollbarWidth: 'none',
                        //     '-ms-overflow-style': 'none',
                        //     '&::-webkit-scrollbar': {
                        //         display: 'none'
                        //     }
                        // }}
                    >
                        <DiscoverTalents
                            talents={talents}
                            setTalents={setTalents}
                            loading={loading}
                            setLoading={setLoading}
                            params={params}
                            setParams={setParams}
                        />
                        <Modal
                            centered
                            opened={opened}
                            onClose={() => {
                                close();
                                setParams({
                                    ...params,
                                    page: 1,
                                    limit: 6
                                });
                            }}
                            withCloseButton={false}
                        >
                            <Center
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                            >
                                <Text style={{ textAlign: 'center' }} size="xl">
                                    {' '}
                                    Want to contact developers?{' '}
                                    <Link
                                        href="/hire"
                                        style={{
                                            color: 'blue',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Let&apos;s Talk!
                                    </Link>
                                </Text>
                                <Text style={{ textAlign: 'center' }} size="md">
                                    Schedule a quick call with our team, and
                                    we&apos;ll connect you with the ideal
                                    developer from our academy.
                                </Text>
                                <Link href={'/hire'}>
                                    <Button variant="outline">
                                        Book a call
                                    </Button>
                                </Link>
                            </Center>
                        </Modal>
                    </Container>

                    {/* <Box
                        w={'100%'}
                        py={10}
                        bg={'white'}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        maw={'1100px'}
                        mb={20}
                        mx={0}
                    >
                        <Pagination
                            onChange={(page) => {
                                {
                                    page <= 2
                                        ? setParams({
                                              ...params,
                                              page: page,
                                              limit: 6
                                          })
                                        : open();
                                }
                            }}
                            total={30}
                            boundaries={1}
                            value={params.page || 1}
                        />
                    </Box> */}
                </Flex>
            </Flex>
        </Box>
    );
};

export default Page;
