import {
    Box,
    Button,
    Card,
    Checkbox,
    Flex,
    MultiSelect,
    Text
} from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

import { useGetAllSkillsQuery } from '@/lib/redux/api/developer/skill';
import style from './TalentCard/talentCard.module.css';

interface DiscoverTalentsProps {
    talents: any;
    setTalents: any;
    setLoading: any;
    params: any;
    setParams: any;
}

const FilterTalents = ({
    setLoading,
    params,
    setParams
}: DiscoverTalentsProps) => {
    const [yearsRange, setYearsRange] = React.useState([0, 12]) as any[];

    // const {
    //     data: talentsData,
    //     isLoading: talentsLoading,
    //     isError: talentsError
    // } = useGetPaginatedDevelopersQuery({ page: 1, limit: 6, ...params });

    // useEffect(() => {
    //     if (talentsData) {
    //         setTalents(talentsData);
    //     }

    //     // setLoading(false);
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
        },

        onValuesChange: (values) => {
            setLoading(true);
            const param = {
                skills: values.skills
                    ? values.skills.map((skill: string) => {
                          const selectedSkill = skills?.find(
                              (s: any) => s.label === skill
                          );
                          return selectedSkill ? selectedSkill.label : null;
                      })
                    : null,
                title: [
                    values.mobileApp ? 'Mobile Developer' : null,
                    values.webApp ? 'Frontend Developer' : null,
                    values.fullstackApp ? 'Backend Developer' : null,
                    values.uiux ? 'UI/UX Designer' : null,
                    values.productManager ? 'Product Manager' : null
                ]
            };

            setParams({ ...params, ...param });
        }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const param = {
            skills: form.values.skills
                ? form.values.skills.map((skill: string) => {
                      const selectedSkill = skills?.find(
                          (s: any) => s.label === skill
                      );
                      return selectedSkill ? selectedSkill.label : null;
                  })
                : null,
            // country: form.values.country,
            title: [
                form.values.mobileApp ? 'Mobile Developer' : null,
                form.values.webApp ? 'Frontend Developer' : null,
                form.values.fullstackApp ? 'Backend Developer' : null,
                form.values.uiux ? 'UI/UX Designer' : null,
                form.values.productManager ? 'Product Manager' : null
            ],
            minExpYears: yearsRange[0],
            maxExpYears: yearsRange[1]
        };

        setParams({ ...params, ...param });
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <Card
                display={{ base: 'none', lg: 'flex' }}
                radius="lg"
                px={32}
                pt={32}
                pb={64}
                h={'fit-content'}
                w={'400px'}
                style={{
                    flexDirection: 'column',
                    gap: '28px'
                }}
                shadow="md"
                pos={{ base: 'sticky' }}
            >
                <Flex
                    justify="space-between"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    gap="md"
                >
                    <Text size="lg" c={'#71717A'}>
                        Filter Talents
                    </Text>
                    <Button
                        onClick={() => {
                            form.reset();
                            setYearsRange([0, 6]);
                            setParams({ page: 1, limit: 6 });
                        }}
                        variant="outline"
                        color="red"
                    >
                        Clear
                    </Button>
                </Flex>
                <Flex direction="column" wrap="wrap" gap="xs">
                    <Box w={'100%'} m={0}>
                        <Text size="xl" c={'#71717A'}>
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
                        {...form.getInputProps('skills', { type: 'input' })}
                    />
                </Flex>
                <Flex direction="column" wrap="wrap" gap="sm">
                    <Box w={'100%'} m={0}>
                        <Text size="xl" c={'#71717A'}>
                            Engineering
                        </Text>
                        <hr style={{ color: '#71717A', width: '100%' }} />
                    </Box>
                    <Flex direction="column" gap="0px" w={'400px'}>
                        <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Mobile Developer"
                                {...form.getInputProps('mobileApp', {
                                    type: 'checkbox'
                                })}
                            />
                        </Card>
                        <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Frontend Developer"
                                {...form.getInputProps('webApp', {
                                    type: 'checkbox'
                                })}
                            />
                        </Card>
                        <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Backend Developer"
                                {...form.getInputProps('fullstackApp', {
                                    type: 'checkbox'
                                })}
                            />
                        </Card>
                        {/* <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="UI/UX Designer"
                                {...form.getInputProps('uiux', {
                                    type: 'checkbox'
                                })}
                            />
                        </Card>
                        <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Product Manager"
                                {...form.getInputProps('productManager', {
                                    type: 'checkbox'
                                })}
                            />
                        </Card> */}
                    </Flex>
                </Flex>
                {/* <Flex direction="column" wrap="wrap" gap="sm">
                    <Box w={'100%'} m={0}>
                        <Text size="xl" c={'#71717A'}>
                            Availability
                        </Text>
                        <Text size="sm" c={'#71717A'}>
                            (Under Development)
                        </Text>
                        <hr style={{ color: '#71717A', width: '100%' }} />
                    </Box>
                    <Flex direction="column" gap="0px" w={'400px'}>
                        <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Full Time"
                                {...form.getInputProps('fullTime', {
                                    type: 'checkbox'
                                })}
                                disabled
                            />
                        </Card>
                        <Card className={style.checkBox}>
                            <Checkbox
                                c={'#71717A'}
                                size="md"
                                label="Part Time"
                                {...form.getInputProps('partTime', {
                                    type: 'checkbox'
                                })}
                                disabled
                            />
                        </Card>
                    </Flex>
                </Flex> */}
                {/* <Flex direction="column" wrap="wrap" gap="sm">
                    <Box w={'100%'} m={0}>
                        <Text size="xl">Years of Experience</Text>
                        <hr style={{ color: 'black', width: '100%' }} />
                    </Box>
                    <RangeSlider
                        value={yearsRange}
                        onChange={setYearsRange}
                        minRange={1}
                        min={0}
                        max={6}
                        step={1}
                        w={'80%'}
                    />
                </Flex> */}

                {/* <Flex direction="column" wrap="wrap" gap="xs">
                    <Text size="md">Country</Text>
                    <MultiSelect
                        placeholder="Pick country"
                        data={['Ethiopia', 'Ghana']}
                        clearable
                        {...form.getInputProps('country', { type: 'input' })}
                    />
                </Flex> */}

                {/* <Flex
        direction="column"  
        wrap="wrap"
        gap="xs"
      >
        <Text size='md'>Experience level</Text>
        <MultiSelect
          placeholder="Pick experience level"
          data={[
            "Junior",
            "Mid",
            "Senior",
          ]}
          clearable
        />
      </Flex> */}

                {/* <Center>
                    <Button type="submit" variant="filled" w={'40%'}>
                        Apply Filter
                    </Button>
                </Center> */}
            </Card>
        </form>
    );
};

export default FilterTalents;
