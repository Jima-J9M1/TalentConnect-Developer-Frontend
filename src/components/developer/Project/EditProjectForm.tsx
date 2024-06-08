import {
    Box,
    Button,
    Checkbox,
    Grid,
    Group,
    MultiSelect,
    Text,
    TextInput
} from '@mantine/core';
import { isNotEmpty, matches, useForm } from '@mantine/form';

import {
    useDeleteProjectMutation,
    useUpdateProjectMutation
} from '@/lib/redux/api/developer/project';
import { useGetAllSkillsQuery } from '@/lib/redux/api/developer/skill';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import dayjs from 'dayjs';

type FormValues = {
    ProjectTitle: string;
    UrlProject: string;
    ProjectDescription: string;
    startDate: string;
    endDate: string;
    TechnicalSkill: string[];
    country: string;
    city: string;
};

export default function EditProjectForm({
    project,
    close
}: {
    project: any;
    close: () => void;
}) {
    const { data: skillList, isLoading: isLoadingSkills } =
        useGetAllSkillsQuery();
    const [updateProject, { isLoading }] = useUpdateProjectMutation();
    const [deleteProject, { isLoading: isLoadingDelete }] =
        useDeleteProjectMutation();

    const skillDictionary: {
        [key: string]: string;
    } = {};

    const skills = skillList?.map((skill: any) => {
        skillDictionary[skill.id] = skill.name;
        return {
            label: skill.name,
            value: skill.id
        };
    });

    const formattedStartDate = dayjs(project?.startDate).format('YYYY-MM');
    const formattedEndDate = dayjs(project?.endDate).format('YYYY-MM');

    const form = useForm<any>({
        initialValues: {
            ProjectTitle: project?.title,
            UrlProject: project?.link,
            ProjectDescription: project?.description,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            TechnicalSkill: project?.skills.map((skill: any) => skill.id) || [],
            country: project.country || '',
            city: project.city || '',
            present: project.isEndDatePresent || false
        },

        validate: {
            ProjectTitle: isNotEmpty('This field is required'),
            UrlProject: matches(
                /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                'Please enter a valid url'
            ),
            startDate: isNotEmpty('This field is required'),
            endDate: (value) => {
                if (!form.values.present) {
                    if (value === '') {
                        return 'This field is required';
                    }
                }
            },
            ProjectDescription: isNotEmpty('This field is required'),
            country: isNotEmpty('This field is required'),
            city: isNotEmpty('This field is required')
        }
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const present = new Date().toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        });

        updateProject({
            id: project.id,
            title: form.values.ProjectTitle,
            link: form.values.UrlProject,
            description: form.values.ProjectDescription,
            skills: form.values.TechnicalSkill,
            startDate: form.values.startDate,
            endDate: form.values.present ? present : form.values.endDate,
            isEndDatePresent: form.values.present ? true : false
        })
            .unwrap()
            .then((result: any) => {
                console.log('Project updation Result', result);
                close();
            })
            .catch((error: any) => {
                console.log('Project updation Error', error);
            });
    };

    const handleDelete = (e: any) => {
        e.preventDefault();
        deleteProject(project.id)
            .unwrap()
            .then((result: any) => {
                console.log('Project deletion Result', result);
                close();
            })
            .catch((error: any) => {
                console.log('Project deletion Error', error);
            });
    };

    const projectEditor = useEditor({
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color
        ],
        content: form.values.ProjectDescription,
        onUpdate: ({ editor }: { editor: any }) => {
            if (editor.getHTML().length <= 1000) {
                form.setFieldValue('ProjectDescription', editor.getHTML());
            } else {
                editor.commands.setContent(form.values.ProjectDescription);
            }
        }
    });

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                        withAsterisk
                        label="Project Title"
                        placeholder="Project Title"
                        {...form.getInputProps('ProjectTitle')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                        withAsterisk
                        label="Github repo or url"
                        placeholder="URL"
                        {...form.getInputProps('UrlProject')}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        withAsterisk
                        type="month"
                        label="Start Date"
                        {...form.getInputProps('startDate')}
                        max={form.values.endDate}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        withAsterisk
                        type="month"
                        label="End Date"
                        min={form.values.startDate}
                        {...form.getInputProps('endDate')}
                        disabled={form.values.present}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}></Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Checkbox
                        label="Present"
                        className="font-light"
                        {...form.getInputProps('present')}
                        checked={form.values.present}
                    />
                </Grid.Col>
                <Grid.Col span={8}>
                    <MultiSelect
                        label="Your favorite libraries"
                        placeholder="Pick libraries"
                        data={skills}
                        value={form.values.TechnicalSkill}
                        {...form.getInputProps('TechnicalSkill')}
                        searchable
                    />
                    {/*<Group wrap="wrap" mt={8} gap={8}>
                        {form.values.TechnicalSkill.filter(
                            (skill: string) => skill.length
                        ).map((skill: string) => {
                            return (
                                <Group
                                    key={skill}
                                    px={8}
                                    py={4}
                                    style={{
                                        border: '1px solid var(--mantine-color-gray-3)',
                                        borderRadius: 24
                                    }}
                                >
                                    <Text size="xs">
                                        {skillDictionary[skill]}
                                    </Text>
                                    <IconX
                                        style={{
                                            color: 'var(--mantine-color-gray-6)'
                                        }}
                                        size={14}
                                        onClick={() => {
                                            const filtered =
                                                form.values.TechnicalSkill.filter(
                                                    (value) => {
                                                        return value != skill;
                                                    }
                                                );
                                            form.setFieldValue(
                                                'TechnicalSkill',
                                                filtered
                                            );
                                        }}
                                    />
                                </Group>
                            );
                        })}
                    </Group>*/}
                </Grid.Col>
                <Grid.Col span={{ base: 12 }}>
                    <h3
                        style={{
                            marginBottom: '2px',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}
                    >
                        Project description
                    </h3>

                    <RichTextEditor editor={projectEditor}>
                        <RichTextEditor.Toolbar sticky>
                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Bold />
                                <RichTextEditor.BulletList />
                                <RichTextEditor.OrderedList />
                            </RichTextEditor.ControlsGroup>
                        </RichTextEditor.Toolbar>

                        <RichTextEditor.Content />
                    </RichTextEditor>
                    <Text mt={5}>
                        {form.values.ProjectDescription.length} /{1000}{' '}
                        characters
                    </Text>
                    <Text mt={5} c={'red'}>
                        {form.values.ProjectDescription.length >= 1000 &&
                            "You've reached the maximum number of characters"}
                    </Text>
                    <Text size="sm" c={'red'} mt={4}>
                        {form.errors.ProjectDescription &&
                            form.errors.ProjectDescription}
                    </Text>
                </Grid.Col>

                <Grid.Col span={12}>
                    <Group gap={24} mt={24} justify="flex-end">
                        <Button variant="default" onClick={close}>
                            Cancel
                        </Button>
                        <Button
                            justify="space-between"
                            type="submit"
                            loading={isLoading}
                        >
                            Save
                        </Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Box>
    );
}
