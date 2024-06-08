import {
    useAddSkillMutation,
    useGetAllSkillsQuery
} from '@/lib/redux/api/developer/skill';
import { Button, Flex, Grid, Select } from '@mantine/core';
import { useForm } from '@mantine/form';

// Assuming this is your Skill component
export function SkillForm({ close }: { close: () => void }) {
    const [addSkill, { isLoading }] = useAddSkillMutation();

    const { data: skillList, isLoading: isLoadingSkills } =
        useGetAllSkillsQuery();

    const skills = skillList?.map((skill: any) => {
        return { label: skill.name, value: skill.id };
    });

    const form = useForm({
        initialValues: {
            name: '',
            yearsOfExperience: 0,
            competencyLevel: 0
        },
        validate: {
            name: (value: string) =>
                value.length > 0 ? null : 'Skill is required',
            yearsOfExperience: (value: number) =>
                value > 0 ? null : 'Years of experience is required'
        }
    });

    const handleAddSkill = () => {
        const error = form.validate() as any;
        if (error.hasErrors) return;

        const values = {
            skillId: form.values.name,
            yearsOfExperience: form.values.yearsOfExperience,
            competencyLevel: form.values.competencyLevel
        };

        addSkill(values)
            .unwrap()
            .then((res) => {
                console.log('Added Skill successfully', res);
                close();
            })
            .catch((err) => {
                console.log('Error Adding Skill', err);
            });
    };

    return (
        <form onSubmit={handleAddSkill}>
            <Grid columns={12}>
                <Grid.Col span={12}>
                    <Select
                        data={skills ? skills : []}
                        label={'Skill'}
                        placeholder="Skill name"
                        {...form.getInputProps('name')}
                        searchable
                    />
                </Grid.Col>

                <Grid.Col span={12}>
                    <Select
                        data={[
                            { label: '1 year', value: '1' },
                            { label: '2 years', value: '2' },
                            { label: '3 years', value: '3' },
                            { label: '4 years', value: '4' }
                        ]}
                        placeholder="Years of Experience"
                        label={'Years of Experience'}
                        {...form.getInputProps('yearsOfExperience')}
                    />
                </Grid.Col>

                <Grid.Col span={12}>
                    <Select
                        data={[
                            { label: 'Beginner', value: '0' },
                            {
                                label: 'Intermediate',
                                value: '1'
                            },
                            { label: 'Advanced', value: '2' }
                        ]}
                        label={'Competency'}
                        placeholder="Competency Level"
                        {...form.getInputProps('competencyLevel')}
                    />
                </Grid.Col>

                <Grid.Col span={12}>
                    <Flex justify="flex-end" mt={24} gap={24}>
                        <Button variant="default" onClick={close}>
                            Cancel
                        </Button>
                        <Button
                            w={'fit-content'}
                            loading={isLoading}
                            onClick={handleAddSkill}
                        >
                            Add Skill
                        </Button>
                    </Flex>
                </Grid.Col>
            </Grid>
        </form>
    );
}
