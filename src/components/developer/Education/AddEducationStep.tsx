import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    Grid,
    Loader,
    Modal,
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
import EducationTimeline from './EducationTimeline';

import { useDeveloper } from '@/Providers/DeveloperContext';
import { useGetDeveloperQuery } from '@/lib/redux/api/developer/developer';
import {
    useCreateEducationMutation,
    useGetEducationByDeveloperIdQuery
} from '@/lib/redux/api/developer/education';
import { useAppSelector } from '@/lib/redux/hooks';
import { Select } from '@mantine/core';
import Placeholder from '@tiptap/extension-placeholder';

const AddEducationStep = () => {
    const [content, setContent] = React.useState('');
    const [opened, { open, close }] = useDisclosure(false);
    const [educations, setEducations] = useState([
        {
            id: 1,
            collageName: 'AASTU',
            degree: 'Bachelor',
            startDate: new Date('2017-10-10'),
            endDate: new Date('2021-10-10'),
            present: false,
            description: 'I have graduated from AASTU'
        },
        {
            id: 2,
            collageName: 'AASTU',
            degree: 'Bachelor',
            startDate: new Date('2017-10-10'),
            endDate: new Date('2021-10-10'),
            present: false,
            description: 'I have graduated from AASTU'
        }
    ]);

    const { developer, isLoading, isError, error, isOwner } = useDeveloper();
    const loginState = useAppSelector((state: any) => state.login);

    const {
        data: educationData,
        error: educationError,
        isLoading: isEducationLoading
    } = useGetEducationByDeveloperIdQuery(developer?.id ? developer.id : '');
    const [
        addEducation,
        { isLoading: isAdding, isError: isAddingError, isSuccess: isAdded }
    ] = useCreateEducationMutation();
    const {
        data: userData,
        isLoading: isUserDataLoading,
        error: isUserDataError
    } = useGetDeveloperQuery(developer?.id ? developer.id : '');

    useEffect(() => {
        close();
        form.reset();
    }, [isAdded]);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color,
            Placeholder.configure({
                placeholder: 'Write you education description here'
            })
        ],
        content: content,
        onUpdate: ({ editor }: { editor: any }) => {
            if (editor.getHTML().length <= 1000) {
                setContent(editor.getHTML());
            } else {
                editor.commands.setContent(content);
            }
        }
    });

    const form = useForm({
        initialValues: {
            collageName: '',
            degree: 'Others',
            present: false,
            country: '',
            city: '',
            department: '',
            startDate: '',
            endDate: ''
        },

        validate: {
            collageName: isNotEmpty('This field is required'),
            department: isNotEmpty('This field is required'),
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

    const handleSubmit = (values: any) => {
        const present = new Date().toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        });

        const addedEducation = {
            institutionName: form.values.collageName,
            field: form.values.department,
            degree: form.values.degree,
            startDate: form.values.startDate,
            endDate: form.values.present ? present : form.values.endDate,
            isEndDatePresent: form.values.present ? true : false,
            description: content,
            userId: loginState?.id ? loginState.id : '',
            country: form.values.country,
            city: form.values.city
        };

        addEducation(addedEducation)
            .unwrap()
            .then((data) => {
                console.log('ADDED Education:', data);
            })
            .catch((error) => {
                console.log('Error adding education:', error);
            });
    };

    const headerProps = {
        title: 'Education',
        add: true,
        onAdd: open
    };
    return (
        <CardWrapper headerProps={headerProps} noData={!educationData?.length}>
            {isEducationLoading ? (
                <Center>
                    <Loader size={34} />
                </Center>
            ) : null}
            <EducationTimeline
                educations={educationData ? educationData : []}
            />

            <Modal
                size={'xl'}
                opened={opened}
                onClose={() => {
                    close();
                    form.reset();
                }}
                title="Education"
                centered
            >
                <Box
                    maw={900}
                    mx="auto"
                    component="form"
                    onSubmit={form.onSubmit((values) =>
                        handleSubmit(values ? values : {})
                    )}
                >
                    <Grid gutter={'lg'}>
                        <Grid.Col span={{ base: 12 }}>
                            <TextInput
                                withAsterisk
                                label="School"
                                placeholder="AASTU"
                                {...form.getInputProps('collageName')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                withAsterisk
                                label="Department"
                                placeholder="Computer Science"
                                {...form.getInputProps('department')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Select
                                label="Degree"
                                data={[
                                    'Coding Academy',
                                    "Associate's Degree",
                                    "Bachelor's Degree",
                                    "Master's Degree",
                                    'Doctoral or Professional Degree',
                                    'Others'
                                ]}
                                {...form.getInputProps('degree')}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Select
                                label="City"
                                searchable
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
                                searchable
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
                        {/* <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                type="month"
                                label="Start Date"
                                withAsterisk
                                {...form.getInputProps('startDate')}
                                mah={form.values.endDate}
                            />
                        </Grid.Col> */}
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                type="month"
                                label="Start Date"
                                withAsterisk
                                {...form.getInputProps('startDate')}
                                max={form.values.endDate}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <TextInput
                                type="month"
                                label="End Date"
                                withAsterisk
                                disabled={form.values.present}
                                {...form.getInputProps('endDate')}
                                min={form.values.startDate}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 0, md: 6 }}></Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6 }}>
                            <Checkbox
                                label="Present"
                                className="font-light"
                                {...form.getInputProps('present')}
                                checked={form.values.present}
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
                                Description
                            </h3>
                            <RichTextEditor editor={editor}>
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
                                {content.length} /{1000} characters
                            </Text>
                            <Text mt={5} c={'red'}>
                                {content.length >= 1000 &&
                                    "You've reached the maximum number of characters"}
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Flex gap={24} mt={24} justify={'flex-end'}>
                                <Button variant="default" onClick={close}>
                                    Cancel
                                </Button>
                                <Button loading={isAdding} type="submit">
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

export default AddEducationStep;
