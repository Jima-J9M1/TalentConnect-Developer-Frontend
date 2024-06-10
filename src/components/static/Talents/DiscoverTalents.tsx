import { useGetAllSkillsQuery } from '@/lib/redux/api/developer/skill';
import {
    ActionIcon,
    Box,
    Button,
    Center,
    Checkbox,
    Container,
    Fieldset,
    Flex,
    Modal,
    MultiSelect,
    SimpleGrid,
    Skeleton,
    Text,
    TextInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { IconAdjustments } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import TalentCard from './TalentCard/TalentCard';

interface DiscoverTalentsProps {
    talents: any;
    setTalents: any;
    setLoading: any;
    loading: any;
    params: any;
    setParams: any;
}

const DiscoverTalents = ({
    talents,
    // setTalents,
    setLoading,
    loading,
    params,
    setParams
}: DiscoverTalentsProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [yearsRange, _] = React.useState([0, 12]) as any[];

    // const {
    //     data: talentsData,
    //     isLoading: talentsLoading,
    //     isError: talentsError
    // } = useGetPaginatedDevelopersQuery({ page: 1, limit: 6, ...params });

    // useEffect(() => {
    //     if (talentsData) {
    //         setTalents(talentsData);
    //     }
    // }, [talentsData, params]);

    // useEffect(() => {
    //     setLoading(talentsLoading);
    // }, [talentsLoading]);

    const { data: skillList } = useGetAllSkillsQuery();

    const skills = skillList?.reduce((acc: any, skill: any) => {
        const existingSkill = acc.find((s: any) => s.label === skill.name);

        if (!existingSkill) {
            acc.push({ label: skill.name, value: skill.id });
        }

        return acc;
    }, []);

    const form = useForm({
        initialValues: {
            search: '',
            skills: [],
            country: [],
            mobileApp: false,
            webApp: false,
            fullstackApp: false,
            frontend: false,
            backend: false,
            uiux: false,
            productManager: false,
            fullTime: false,
            partTime: false
        }
    });

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setParams({ ...params, search: form.values.search });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        const selectedSkills = form.values.skills
            ? form.values.skills.map((skill: string) => {
                  const selectedSkill = skills?.find(
                      (s: any) => s.label === skill
                  );
                  return selectedSkill ? selectedSkill.label : null;
              })
            : null;
        // const selectedCountry = form.values.country.map((country: any) => country.value);

        // console.log('selectedSkills', selectedSkills);

        setParams({
            ...params,
            skills: selectedSkills,
            title: [
                form.values.mobileApp ? 'Mobile Developer' : null,
                form.values.webApp ? 'Frontend Developer' : null,
                form.values.fullstackApp ? 'Backend Developer' : null,
                form.values.uiux ? 'UI/UX Designer' : null,
                form.values.productManager ? 'Product Manager' : null
            ],
            minExpYears: yearsRange[0],
            maxExpYears: yearsRange[1]
        });

        close();
    };

    return (
        <Flex direction="column" gap={{ base: 'sm', md: 'md' }} m={0}>
            <Modal
                opened={opened}
                onClose={close}
                withCloseButton={true}
                centered
                radius="lg"
                style={{
                    flexDirection: 'column',
                    gap: '28px'
                }}
                display={{ base: 'block', lg: 'none' }}
                shadow="lg"
                title="Filter Talents"
            >
                <form onSubmit={(event) => handleSubmit(event)}>
                    <Flex direction="column" wrap="wrap" gap="xs" my={10}>
                        <Box w={'100%'} m={0}>
                            <Text size="lg" c={'#71717A'}>
                                Skills
                            </Text>
                        </Box>
                        <MultiSelect
                            searchable
                            placeholder="Pick skills"
                            data={
                                skills
                                    ? skills.map((skill: any) => skill.label)
                                    : []
                            }
                            clearable
                            {...form.getInputProps('skills')}
                        />
                    </Flex>
                    <Flex direction="column" wrap="wrap" gap="sm" my={10}>
                        <Box w={'100%'} m={0}>
                            <Text size="lg" c={'#71717A'}>
                                Engineering
                            </Text>
                            <hr style={{ color: '#71717A', width: '100%' }} />
                        </Box>
                        <Flex direction="column" gap="md" w={'400px'}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Mobile Developer"
                                {...form.getInputProps('mobileApp', {
                                    type: 'checkbox'
                                })}
                            />
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Frontend Developer"
                                {...form.getInputProps('webApp', {
                                    type: 'checkbox'
                                })}
                            />
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Backend Developer"
                                {...form.getInputProps('fullstackApp', {
                                    type: 'checkbox'
                                })}
                            />
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="UI/UX Designer"
                                {...form.getInputProps('uiux', {
                                    type: 'checkbox'
                                })}
                            />
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Product Manager"
                                {...form.getInputProps('productManager', {
                                    type: 'checkbox'
                                })}
                            />
                        </Flex>
                    </Flex>
                    {/* <Flex direction="column" wrap="wrap" gap="sm">
                        <Box w={'100%'} m={0}>
                            <Text size="lg" c={'#71717A'}>
                                Availability
                            </Text>
                            <Text size="sm" c={'#71717A'}>
                                (Under Development)
                            </Text>
                            <hr style={{ color: '#71717A', width: '100%' }} />
                        </Box>
                        <Flex direction="column" gap="md" w={'400px'}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Full Time"
                                {...form.getInputProps('fullTime', {
                                    type: 'checkbox'
                                })}
                                disabled
                            />
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Part Time"
                                {...form.getInputProps('partTime', {
                                    type: 'checkbox'
                                })}
                                disabled
                            />
                        </Flex>
                    </Flex> */}
                    {/* <Flex direction="column" wrap="wrap" gap="sm" my={10}>
                        <Box w={'100%'} m={0}>
                            <Text size="lg">Years of Experience</Text>
                            <hr style={{ color: 'black', width: '100%' }} />
                        </Box>
                        <RangeSlider
                            minRange={1}
                            min={0}
                            max={6}
                            step={1}
                            defaultValue={[0, 12]}
                            w={'80%'}
                        />
                    </Flex> */}

                    <Flex
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="wrap"
                        gap="md"
                        my={20}
                    >
                        <Button
                            onClick={() => {
                                form.reset();
                                setParams({ page: 1, limit: 6 });
                            }}
                            variant="outline"
                            color="red"
                        >
                            Clear
                        </Button>

                        <Button type="submit" variant="filled" w={'40%'}>
                            Apply Filter
                        </Button>
                    </Flex>
                </form>
            </Modal>
            <Text
                style={{ fontSize: '30px' }}
                pl={{ base: 0, md: 16 }}
                fw={'bold'}
                c={'#71717A'}
            >
                Discover Talent
            </Text>
            <form onSubmit={(event) => handleSearch(event)}>
                <Fieldset
                    variant="unstyled"
                    w={{ base: '100%', lg: '80%' }}
                    style={{ display: 'flex', gap: '5px' }}
                    pl={{ base: 0, md: 16 }}
                >
                    <TextInput
                        placeholder="Search by tech stack"
                        w={'70%'}
                        size={'md'}
                        {...form.getInputProps('search')}
                        variant={'default'}
                    />
                    <Button
                        variant="filled"
                        miw={'110px'}
                        fs={'sm'}
                        size={'md'}
                        type="submit"
                        bg={'#006BFF'}
                    >
                        Search
                    </Button>
                    <ActionIcon
                        variant="filled"
                        aria-label="Settings"
                        size={'xl'}
                        display={{ base: 'block', lg: 'none' }}
                        onClick={() => open()}
                    >
                        <IconAdjustments
                            style={{ width: '70%', height: '70%' }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Fieldset>
            </form>

            <Container
                maw={'1100px'}
                w={'100%'}
                p={0}
                m={0}
                h={{ base: '85vh', lg: '88vh' }}
                style={{
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                    '-ms-overflow-style': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    }
                }}
            >
                {talents && talents?.data?.length >= 1 && !loading ? (
                    <SimpleGrid
                        cols={{ base: 1, lg: 2 }}
                        spacing={{ base: 'md', md: 'xl' }}
                        px={16}
                    >
                        {talents?.data?.map((talent: any, index: any) => (
                            <TalentCard key={index} talent={talent} />
                        ))}
                    </SimpleGrid>
                ) : loading || talents === null ? (
                    <SimpleGrid
                        cols={{ base: 1, md: 2 }}
                        spacing={{ base: 'md', md: 'xl' }}
                    >
                        <Box>
                            <Skeleton height={90} circle mb="xl" />
                            <Skeleton height={20} radius="xl" />
                            <Skeleton height={20} mt={6} radius="xl" />
                            <Skeleton
                                height={20}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </Box>
                        <Box>
                            <Skeleton height={90} circle mb="xl" />
                            <Skeleton height={20} radius="xl" />
                            <Skeleton height={20} mt={6} radius="xl" />
                            <Skeleton
                                height={20}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </Box>
                        <Box>
                            <Skeleton height={90} circle mb="xl" />
                            <Skeleton height={20} radius="xl" />
                            <Skeleton height={20} mt={6} radius="xl" />
                            <Skeleton
                                height={20}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </Box>
                        <Box>
                            <Skeleton height={90} circle mb="xl" />
                            <Skeleton height={20} radius="xl" />
                            <Skeleton height={20} mt={6} radius="xl" />
                            <Skeleton
                                height={20}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </Box>
                        <Box>
                            <Skeleton height={90} circle mb="xl" />
                            <Skeleton height={20} radius="xl" />
                            <Skeleton height={20} mt={6} radius="xl" />
                            <Skeleton
                                height={20}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </Box>
                        <Box>
                            <Skeleton height={90} circle mb="xl" />
                            <Skeleton height={20} radius="xl" />
                            <Skeleton height={20} mt={6} radius="xl" />
                            <Skeleton
                                height={20}
                                mt={6}
                                width="70%"
                                radius="xl"
                            />
                        </Box>
                    </SimpleGrid>
                ) : (
                    <Box w={'100%'}>
                        <Flex w={'100%'} h={'60vh'}>
                            <Center
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                w={'70%'}
                            >
                                <Text style={{ textAlign: 'center' }} size="xl">
                                    {' '}
                                    Can&apos;t Find Developer?{' '}
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
                                <Text style={{ textAlign: 'center' }} size="lg">
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
                        </Flex>
                    </Box>
                )}
            </Container>
        </Flex>
    );
};

export default DiscoverTalents;
