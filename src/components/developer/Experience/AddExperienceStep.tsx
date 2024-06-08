import { useAppSelector } from '@/lib/redux/hooks';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Grid,
    Modal,
    MultiSelect,
    Select,
    Text,
    TextInput
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect, useState } from 'react';
import CardWrapper from '../ProfileCenter/CardWrapper';
import ExperienceTimeline from './ExperienceTimeline';

import { useDeveloper } from '@/Providers/DeveloperContext';
import {
    useCreateExperienceMutation,
    useGetExperienceByDeveloperIdQuery
} from '@/lib/redux/api/developer/experience';
import { useGetAllSkillsQuery } from '@/lib/redux/api/developer/skill';
import Placeholder from '@tiptap/extension-placeholder';

const AddExperienceStep = () => {
    const [companyDescriptionEditor, setCompanyDescriptionEditor] =
        React.useState('');
    const [projectResponsibilitiesEditor, setProjectResponsibilitiesEditor] =
        React.useState('');
    const [experiences, setExperiences] = useState([
        {
            designation: 'Software Engineer',
            company: 'ABC Tech Inc.',
            description:
                'Responsible for developing new features and maintaining existing codebase.',
            companyWebsiteUrl: 'https://www.abctech.com',
            startDate: '2022-01-01',
            endDate: '2023-01-01',
            userId: 'user123',
            companyDescription: '<p>This is a description of company</p>'
        },
        {
            designation: 'Marketing Manager',
            company: 'XYZ Marketing Agency',
            description:
                'Managed social media campaigns and analyzed marketing metrics for client projects.',
            companyWebsiteUrl: 'https://www.xyzmarketingagency.com',
            startDate: '2020-08-15',
            endDate: '2022-05-20',
            userId: 'user456',
            companyDescription: '<p>This is a description of company</p>'
        },
        {
            designation: 'Graphic Designer',
            company: 'DesignWorks',
            description:
                'Designed logos, brochures, and branding materials for various clients.',
            companyWebsiteUrl: 'https://www.designworks.com',
            startDate: '2021-03-10',
            endDate: '2023-04-30',
            userId: '',
            companyDescription: '<p>This is a description of company</p>'
        }
    ]);

    const [opened, { open, close }] = useDisclosure(false);
    const { developer, isLoading, isError, error } = useDeveloper();
    const loginState: any = useAppSelector((state: any) => state?.login);
    const {
        data: experiencesData,
        isLoading: isExperienceLoading,
        error: experienceError
    } = useGetExperienceByDeveloperIdQuery(developer?.id ? developer.id : '');

    const [
        addExperience,
        { isLoading: isAddingExperience, isSuccess: isAdded }
    ] = useCreateExperienceMutation();

    const { data: skillList, isLoading: isLoadingSkills } =
        useGetAllSkillsQuery();

    const skills = skillList?.reduce((acc: any, skill: any) => {
        const existingSkill = acc.find((s: any) => s.label === skill.name);

        if (!existingSkill) {
            acc.push({ label: skill.name, value: skill.id });
        }

        return acc;
    }, []);

    useEffect(() => {
        if (isAdded) {
            close();
            form.reset();
        }
    }, [isAdded]);

    const companyEditor = useEditor({
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color,
            Placeholder.configure({ placeholder: 'Company Description' })
        ],
        content: companyDescriptionEditor,
        onUpdate: ({ editor }: { editor: any }) => {
            //setCompanyDescriptionEditor(editor.getHTML());
            if (editor.getHTML().length <= 1000) {
                setCompanyDescriptionEditor(editor.getHTML());
            } else {
                editor.commands.setContent(companyDescriptionEditor);
            }
        }
    });

    const projectEditor = useEditor({
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color,
            Placeholder.configure({
                placeholder: 'Write you experience description'
            })
        ],
        content: projectResponsibilitiesEditor,
        onUpdate: ({ editor }: { editor: any }) => {
            if (editor.getHTML().length <= 1000) {
                setProjectResponsibilitiesEditor(editor.getHTML());
            } else {
                editor.commands.setContent(projectResponsibilitiesEditor);
            }
        }
    });

    const form = useForm({
        initialValues: {
            designation: '',
            collageName: '',
            companyWebsite: '',
            present: false,
            favoriteLibraries: [],
            country: '',
            city: '',
            startDate: '',
            endDate: ''
        },

        validate: {
            designation: isNotEmpty('This field is required'),
            collageName: isNotEmpty('This field is required'),
            favoriteLibraries: isNotEmpty('This field is required'),
            companyWebsite: (value: string) => {
                if (
                    value &&
                    !value.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)
                ) {
                    return 'Please enter a valid url';
                }
                return undefined;
            },
            startDate: isNotEmpty('This field is required'),
            endDate: (value) => {
                if (!form.values.present) {
                    if (value === '') {
                        return 'This field is required';
                    }
                }
            }
        }
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const error = form.validate() as any;
        if (error.hasErrors) {
            console.log('Error', error);
            return;
        }

        const present = new Date().toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        });

        const newExperience = {
            title: form.values.designation,
            company: form.values.collageName,
            description: projectResponsibilitiesEditor,
            companyWebsiteUrl: form.values.companyWebsite,
            companyDescription: companyDescriptionEditor,
            startDate: form.values.startDate,
            endDate: form.values.present ? present : form.values.endDate,
            isEndDatePresent: form.values.present,
            skills: form.values.favoriteLibraries
                ? form.values.favoriteLibraries.map((skill: string) => {
                      const selectedSkill = skills.find(
                          (s: any) => s.label === skill
                      );
                      return selectedSkill ? selectedSkill.value : null;
                  })
                : null
            // userId: loginState?.id ? loginState.id : ''
        };

        addExperience(newExperience)
            .unwrap()
            .then((data) => {
                console.log('Added Experience:', data);
            })
            .catch((error) => {
                console.log('Error adding Experience:', error);
            });
    };

    const headerProps = {
        title: 'Experience',
        add: true,
        onAdd: open
    };

    return (
        <CardWrapper
            headerProps={headerProps}
            noData={!experiencesData?.length}
        >
            <ExperienceTimeline
                experiences={experiencesData ? experiencesData : []}
            />

            <Modal
                size={'xl'}
                opened={opened}
                onClose={() => {
                    close();
                    form.reset();
                }}
                title="Add Experience"
                centered
            >
                <Box
                    maw={900}
                    mx="auto"
                    component="form"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Grid maw={900} mx="auto" gutter={'lg'}>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                withAsterisk
                                label="Company Name"
                                placeholder="AASTU"
                                {...form.getInputProps('collageName')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                label="Company website"
                                placeholder="http://example.com"
                                {...form.getInputProps('companyWebsite')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12 }}>
                            <h3
                                style={{
                                    marginBottom: '2px',
                                    fontSize: '14px',
                                    fontWeight: '600'
                                }}
                            >
                                Company description
                            </h3>

                            <RichTextEditor editor={companyEditor}>
                                <RichTextEditor.Toolbar sticky>
                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.Bold />
                                        <RichTextEditor.BulletList />
                                        <RichTextEditor.OrderedList />
                                    </RichTextEditor.ControlsGroup>
                                </RichTextEditor.Toolbar>

                                <RichTextEditor.Content />
                            </RichTextEditor>
                            {/* maximum number of characters */}
                            <Text mt={5}>
                                {companyDescriptionEditor.length} /{1000}{' '}
                                characters
                            </Text>
                            <Text mt={5} c={'red'}>
                                {companyDescriptionEditor.length >= 1000 &&
                                    "You've reached the maximum number of characters"}
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                withAsterisk
                                label="Designation"
                                placeholder="Full Stack Developer"
                                {...form.getInputProps('designation')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <MultiSelect
                                label="Tech Stack"
                                searchable
                                placeholder="The tech stacks used"
                                data={
                                    skills
                                        ? skills.map(
                                              (skill: any) => skill.label
                                          )
                                        : []
                                }
                                clearable
                                {...form.getInputProps('favoriteLibraries')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Select
                                label="City"
                                placeholder="Addis Ababa"
                                data={[
                                    'Algiers',
                                    'Oran',
                                    'Luanda',
                                    'Lobito',
                                    'Porto-Novo',
                                    'Cotonou',
                                    'Gaborone',
                                    'Francistown',
                                    'Ouagadougou',
                                    'Bobo-Dioulasso',
                                    'Bujumbura',
                                    'Gitega',
                                    'Praia',
                                    'Mindelo',
                                    'Yaoundé',
                                    'Douala',
                                    'Bangui',
                                    'Bimbo',
                                    "N'Djamena",
                                    'Moundou',
                                    'Moroni',
                                    'Pointe-Noire',
                                    'Brazzaville',
                                    'Djibouti',
                                    'Ali Sabieh',
                                    'Cairo',
                                    'Alexandria',
                                    'Malabo',
                                    'Bata',
                                    'Asmara',
                                    'Keren',
                                    'Mbabane',
                                    'Manzini',
                                    'Addis Ababa',
                                    'Dire Dawa',
                                    'Libreville',
                                    'Port-Gentil',
                                    'Banjul',
                                    'Serekunda',
                                    'Accra',
                                    'Kumasi',
                                    'Conakry',
                                    'Nzérékoré',
                                    'Bissau',
                                    'Bafatá',
                                    'Yamoussoukro',
                                    'Abidjan',
                                    'Nairobi',
                                    'Mombasa',
                                    'Maseru',
                                    'Teyateyaneng',
                                    'Monrovia',
                                    'Gbarnga',
                                    'Tripoli',
                                    'Benghazi',
                                    'Antananarivo',
                                    'Toamasina',
                                    'Lilongwe',
                                    'Blantyre',
                                    'Bamako',
                                    'Sikasso',
                                    'Nouakchott',
                                    'Nouadhibou',
                                    'Port Louis',
                                    'Vacoas-Phoenix',
                                    'Rabat',
                                    'Casablanca',
                                    'Maputo',
                                    'Matola',
                                    'Windhoek',
                                    'Rundu',
                                    'Niamey',
                                    'Zinder',
                                    'Abuja',
                                    'Lagos',
                                    'Kigali',
                                    'Butare',
                                    'São Tomé',
                                    'Trindade',
                                    'Dakar',
                                    'Thiès',
                                    'Victoria',
                                    'Anse Boileau',
                                    'Freetown',
                                    'Bo',
                                    'Mogadishu',
                                    'Hargeisa',
                                    'Pretoria',
                                    'Johannesburg',
                                    'Juba',
                                    'Wau',
                                    'Khartoum',
                                    'Omdurman',
                                    'Dodoma',
                                    'Dar es Salaam',
                                    'Lomé',
                                    'Sokodé',
                                    'Tunis',
                                    'Sfax',
                                    'Ankara',
                                    'Istanbul',
                                    'Kampala',
                                    'Gulu',
                                    'Lusaka',
                                    'Ndola',
                                    'Harare',
                                    'Bulawayo'
                                ]}
                                {...form.getInputProps('city')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Select
                                label="Country"
                                placeholder="Ethiopia"
                                data={[
                                    'Algeria',
                                    'Angola',
                                    'Benin',
                                    'Botswana',
                                    'Burkina Faso',
                                    'Burundi',
                                    'Cabo Verde',
                                    'Cameroon',
                                    'Central African Republic',
                                    'Chad',
                                    'Comoros',
                                    'Democratic Republic of the Congo',
                                    'Republic of the Congo',
                                    'Djibouti',
                                    'Egypt',
                                    'Equatorial Guinea',
                                    'Eritrea',
                                    'Eswatini',
                                    'Ethiopia',
                                    'Gabon',
                                    'Gambia',
                                    'Ghana',
                                    'Guinea',
                                    'Guinea-Bissau',
                                    'Ivory Coast',
                                    'Kenya',
                                    'Lesotho',
                                    'Liberia',
                                    'Libya',
                                    'Madagascar',
                                    'Malawi',
                                    'Mali',
                                    'Mauritania',
                                    'Mauritius',
                                    'Morocco',
                                    'Mozambique',
                                    'Namibia',
                                    'Niger',
                                    'Nigeria',
                                    'Rwanda',
                                    'Sao Tome and Principe',
                                    'Senegal',
                                    'Seychelles',
                                    'Sierra Leone',
                                    'Somalia',
                                    'South Africa',
                                    'South Sudan',
                                    'Sudan',
                                    'Tanzania',
                                    'Togo',
                                    'Tunisia',
                                    'Turkey',
                                    'Uganda',
                                    'Zambia',
                                    'Zimbabwe'
                                ]}
                                {...form.getInputProps('country')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                type="month"
                                label="Start Date"
                                {...form.getInputProps('startDate')}
                                max={form.values.endDate}
                                withAsterisk
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                type="month"
                                label="End Date"
                                disabled={form.values.present}
                                {...form.getInputProps('endDate')}
                                min={form.values.startDate}
                                withAsterisk
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}></Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Checkbox
                                label="Present"
                                className="font-light"
                                {...form.getInputProps('present')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12 }}>
                            <h3
                                style={{
                                    marginBottom: '2px',
                                    fontSize: '14px',
                                    fontWeight: '500'
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
                                {projectResponsibilitiesEditor.length} /{1000}{' '}
                                characters
                            </Text>
                            <Text mt={5} c={'red'}>
                                {projectResponsibilitiesEditor.length >= 1000 &&
                                    "You've reached the maximum number of characters"}
                            </Text>
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <Flex gap={24} mt={24} justify={'flex-end'}>
                                <Button variant="default" onClick={close}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    loading={isAddingExperience}
                                >
                                    Submit
                                </Button>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Modal>
        </CardWrapper>
    );
};

export default AddExperienceStep;
