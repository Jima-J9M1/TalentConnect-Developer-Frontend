import {
    useAddMultipleSkillsMutation,
    useAddSkillMutation,
    useGetAllSkillsQuery
} from '@/lib/redux/api/developer/skill';
import { DeveloperSkill } from '@/types';
import { ActionIcon, Button, Flex, Grid, Select, Text } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconTrash } from '@tabler/icons-react';

export function NewSkillForm({
    close,
    skills: devSkills
}: {
    close: () => void;
    skills: DeveloperSkill[];
}) {
    const [addSkill, { isLoading }] = useAddSkillMutation();
    const [addMultipleSkills, { isLoading: isMultipleLoading }] =
        useAddMultipleSkillsMutation();

    const { data: skillList, isLoading: isLoadingSkills } =
        useGetAllSkillsQuery();

    const skills = skillList?.map((skill: any) => {
        return { label: skill.name, value: skill.id };
    });

    const intialDevSkills = devSkills.map((skill: DeveloperSkill) => {
        return {
            name: skill.skill.id,
            yearsOfExperience: skill.yearsOfExperience?.toString(),
            competencyLevel: skill.competencyLevel?.toString()
        };
    });

    const form = useForm<{
        skills: {
            name: string;
            yearsOfExperience: string;
            competencyLevel: string;
        }[];
    }>({
        initialValues: { skills: intialDevSkills },
        validate: {
            skills: {
                name: isNotEmpty('Skill is required'),
                yearsOfExperience: isNotEmpty(
                    'Years of experience is required'
                ),
                competencyLevel: isNotEmpty('Competency level is required')
            }
        }
    });

    const handleAddSkill = () => {
        const error = form.validate() as any;
        if (error.hasErrors) return;
        const values = {
            skills: form.values.skills.map((skill) => {
                return {
                    skillId: skill.name,
                    yearsOfExperience: skill.yearsOfExperience,
                    competencyLevel: skill.competencyLevel
                };
            })
        };
        addMultipleSkills(values)
            .unwrap()
            .then((res) => {
                console.log('Added Skill successfully', res);
                close();
            })
            .catch((err) => {
                console.log('Error Adding Skill', err);
            });
    };

    const fields = form.values.skills.map((_: any, index: number) => (
        <>
            <Grid.Col span={4}>
                <Select
                    data={skills ? skills : []}
                    placeholder="Skill name"
                    withAsterisk
                    {...form.getInputProps(`skills.${index}.name`)}
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <Select
                    data={[
                        { label: '1 year', value: '1' },
                        { label: '2 years', value: '2' },
                        { label: '3 years', value: '3' },
                        { label: '4 years', value: '4' }
                    ]}
                    placeholder="Years of Experience"
                    {...form.getInputProps(`skills.${index}.yearsOfExperience`)}
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <Select
                    data={[
                        { label: 'Beginner', value: '0' },
                        {
                            label: 'Intermediate',
                            value: '1'
                        },
                        { label: 'Advanced', value: '2' }
                    ]}
                    placeholder="Competency Level"
                    {...form.getInputProps(`skills.${index}.competencyLevel`)}
                />
            </Grid.Col>
            <Grid.Col
                span={1}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}
            >
                <ActionIcon
                    color="red"
                    onClick={() => form.removeListItem('skills', index)}
                >
                    <IconTrash size="1rem" />
                </ActionIcon>
            </Grid.Col>
        </>
    ));

    return (
        <form onSubmit={handleAddSkill}>
            <Grid columns={13}>
                <Grid.Col span={4}>
                    <Text>Skill</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text>Years of Experience</Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Text>Competency</Text>
                </Grid.Col>

                {fields}
                <Grid.Col span={13}>
                    <Button
                        variant="default"
                        onClick={() => {
                            form.insertListItem('skills', {
                                name: '',
                                yearsOfExperience: '',
                                competencyLevel: ''
                            });
                        }}
                    >
                        Add Skill
                    </Button>
                </Grid.Col>

                <Grid.Col span={13}>
                    <Flex justify="flex-end" mt={24} gap={24}>
                        <Button variant="default" onClick={close}>
                            Cancel
                        </Button>
                        <Button
                            w={'fit-content'}
                            loading={isMultipleLoading}
                            onClick={handleAddSkill}
                        >
                            Save
                        </Button>
                    </Flex>
                </Grid.Col>
            </Grid>
        </form>
    );
}
