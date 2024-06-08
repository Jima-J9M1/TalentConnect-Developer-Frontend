import {
    ActionIcon,
    Badge,
    Box,
    Button,
    Checkbox,
    Flex,
    Grid,
    Menu,
    Modal,
    MultiSelect,
    Select,
    Text,
    TextInput
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { Link, RichTextEditor } from '@mantine/tiptap';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import Color from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useEffect } from 'react';

import { useDeveloper } from '@/Providers/DeveloperContext';
import {
    useDeleteExperienceMutation,
    useUpdateExperienceMutation
} from '@/lib/redux/api/developer/experience';
import { useGetAllSkillsQuery } from '@/lib/redux/api/developer/skill';
import { IconCalendarMonth, IconDotsVertical } from '@tabler/icons-react';
import dayjs from 'dayjs';
import DeleteModal from '../DeleteModal/DeleteModal';

/**
 * Role-Title
 * ROles:
 * - fullstack
 * - frontend
 * - backend
 * - mobile
 * - Ui/ux
 * - Product
 *
 * Fav Libraries - tech stack
 *
 */

const DisplayExperience = ({ experience }: { experience: any }) => {
    const [companyDescriptionEditor, setCompanyDescriptionEditor] =
        React.useState(experience?.companyDescription || '');
    const [projectResponsibilitiesEditor, setProjectResponsibilitiesEditor] =
        React.useState(experience?.description || '');
    const [opened, { open, close }] = useDisclosure(false);
    const [
        updateExperience,
        { isLoading: isUpdating, isSuccess: isUpdatingSuccess }
    ] = useUpdateExperienceMutation();
    const [deleteExperience, { isLoading: isDeleting }] =
        useDeleteExperienceMutation();
    // state to control the delete modal
    const [
        deleteModalOpened,
        { open: openDeleteModal, close: closeDeleteModal }
    ] = useDisclosure(false);

    const { data: skillList, isLoading: isLoadingSkills } =
        useGetAllSkillsQuery();

    useEffect(() => {
        if (isUpdatingSuccess) {
            close();
        }
    }, [isUpdatingSuccess]);

    const skills = skillList?.reduce((acc: any, skill: any) => {
        const existingSkill = acc.find((s: any) => s.label === skill.name);

        if (!existingSkill) {
            acc.push({ label: skill.name, value: skill.id });
        }

        return acc;
    }, []);

    const formattedStartDate = dayjs(experience.startDate).format('MMMM YYYY');
    const formattedEndDate = dayjs(experience.endDate).format('MMMM YYYY');
    const form = useForm({
        initialValues: {
            designation: experience?.title,
            collageName: experience?.company,
            companyWebsite: experience?.companyWebsiteUrl,
            present: experience.isEndDatePresent ? true : false,
            favoriteLibraries: experience?.skills.map(
                (skill: any) => skill.name
            ),
            country: experience?.country,
            city: experience?.city,
            startDate: dayjs(experience.startDate).format('YYYY-MM'),
            endDate: dayjs(experience.endDate).format('YYYY-MM')
        },

        validate: {
            designation: isNotEmpty('This field is required'),
            collageName: isNotEmpty('This field is required'),
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

    // console.log('Experience:', experience);

    const companyEditor = useEditor({
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color
        ],
        content: companyDescriptionEditor || '',
        onUpdate: ({ editor }: { editor: any }) => {
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
            Color
        ],
        content: projectResponsibilitiesEditor || '',
        onUpdate: ({ editor }: { editor: any }) => {
            if (editor.getHTML().length <= 1000) {
                setProjectResponsibilitiesEditor(editor.getHTML());
            } else {
                editor.commands.setContent(projectResponsibilitiesEditor);
            }
        }
    });

    const handleSubmit = (e: any) => {
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
            id: experience.id,
            title: form.values.designation,
            company: form.values.collageName,
            description: projectResponsibilitiesEditor,
            companyWebsiteUrl: form.values.companyWebsite,
            companyDescription: companyDescriptionEditor,
            startDate:
                form.values.startDate.length === 0
                    ? experience.startDate
                    : form.values.startDate,
            endDate: form.values.present
                ? present
                : form.values.endDate.length === 0
                  ? experience.endDate
                  : form.values.endDate,
            isEndDatePresent: form.values.present
            // userId: experience?.userId
        };

        updateExperience(newExperience)
            .unwrap()
            .then((data: any) => {
                console.log('UPDATE SUCCESS:', data);
            })
            .catch((error: any) => {
                console.log('Error:', error);
            });
    };

    const handleDelete = () => {
        let id = experience.id ? experience.id : '';

        deleteExperience(id)
            .unwrap()
            .then((data: any) => {
                console.log('Data:', data);
                closeDeleteModal();
            })
            .catch((error: any) => {
                console.log('Error is here:', error);
            });
    };

    const { isOwner, isView } = useDeveloper();
    return (
        <>
            <Grid pl={16} align="center" pt={0} w={'100%'} gutter={'xs'}>
                <Grid.Col
                    span={'auto'}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                        //background: 'red'
                    }}
                >
                    <Text fw={500}>{experience?.title}</Text>
                </Grid.Col>
                <Grid.Col
                    visibleFrom="sm"
                    span={4}
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Text
                        c="dimmed"
                        size="xs"
                        style={{
                            display: 'flex',
                            gap: 5,
                            alignItems: 'center'
                        }}
                    >
                        {' '}
                        <IconCalendarMonth
                            color="var(--mantine-color-gray-7)"
                            size={16}
                        />
                        <Text>
                            {formattedStartDate} -{' '}
                            {experience.isEndDatePresent
                                ? 'Present'
                                : formattedEndDate}{' '}
                        </Text>
                    </Text>
                </Grid.Col>
                {isOwner && !isView && (
                    <Grid.Col
                        span={1}
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                        //bg={'red'}
                        pr={2}
                    >
                        <Menu position="right-start">
                            <Menu.Target>
                                <ActionIcon
                                    variant="subtle"
                                    c={'dimmed'}
                                    p={2}
                                    //onClick={open}
                                >
                                    <IconDotsVertical size={18} />
                                </ActionIcon>
                            </Menu.Target>
                            {/*<MdDeleteOutline size={25} />*/}
                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={<IconPencil size={16} />}
                                    onClick={open}
                                >
                                    Edit
                                </Menu.Item>
                                <Menu.Item
                                    leftSection={<IconTrash size={16} />}
                                    onClick={openDeleteModal}
                                >
                                    Delete
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Grid.Col>
                )}
                <Grid.Col span={12} hiddenFrom="sm">
                    <Text
                        c="dimmed"
                        size="xs"
                        style={{
                            display: 'flex',
                            gap: 5,
                            alignItems: 'center'
                        }}
                    >
                        {' '}
                        <IconCalendarMonth
                            color="var(--mantine-color-gray-7)"
                            size={16}
                        />
                        <Text>
                            {formattedStartDate} -{' '}
                            {experience.isEndDatePresent
                                ? 'Present'
                                : formattedEndDate}{' '}
                        </Text>
                    </Text>
                </Grid.Col>

                <Grid.Col span={{ base: 12 }}>
                    <Text
                        style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            gap: 5
                        }}
                    >
                        <Text size="xs" c="gray.7">
                            {experience.company}
                        </Text>
                    </Text>
                </Grid.Col>
                <Grid.Col
                    span={{ base: 12 }}
                    style={{
                        display: 'flex',
                        gap: 10,
                        flexWrap: 'wrap'
                    }}
                >
                    {experience.skills?.map((library: any, index: number) => {
                        return (
                            <Badge
                                key={index}
                                style={{
                                    backgroundColor: 'rgba(35, 166, 240, 0.12',
                                    color: 'gray'
                                }}
                                size="lg"
                            >
                                {library.name}
                            </Badge>
                        );
                    })}
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 12 }}>
                    <Text
                        size="md"
                        c="gray.7"
                        dangerouslySetInnerHTML={{
                            __html: experience?.description
                                ? experience?.description
                                : ''
                        }}
                    />
                </Grid.Col>
            </Grid>
            <Modal
                size={'xl'}
                opened={opened}
                onClose={close}
                title="Update Experience"
                centered
                radius={8}
                padding={32}
            >
                <Box
                    // maw={900}
                    mx="auto"
                    component="form"
                    onSubmit={form.onSubmit((e) => handleSubmit(e))}
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
                                withAsterisk
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

                            <RichTextEditor
                                editor={companyEditor}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: '2px'
                                }}
                            >
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
                                {companyDescriptionEditor?.length} /{1000}{' '}
                                characters
                            </Text>
                            <Text mt={5} c={'red'}>
                                {companyDescriptionEditor?.length >= 1000 &&
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
                                label="Tech stack"
                                placeholder="The tech stacks used"
                                searchable
                                data={
                                    skills
                                        ? skills.map(
                                              (skill: any) => skill.label
                                          )
                                        : []
                                }
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
                        <Grid.Col span={{ base: 12, md: 6 }}></Grid.Col>
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
                                {projectResponsibilitiesEditor?.length} /{1000}{' '}
                                characters
                            </Text>
                            <Text mt={5} c={'red'}>
                                {projectResponsibilitiesEditor?.length >=
                                    1000 &&
                                    "You've reached the maximum number of characters"}
                            </Text>
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <Flex gap={24} mt={24} justify={'flex-end'}>
                                <Button variant="default" onClick={close}>
                                    {' '}
                                    Cancel
                                </Button>
                                <Button type="submit" loading={isUpdating}>
                                    Save
                                </Button>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Box>
            </Modal>
            <DeleteModal
                opened={deleteModalOpened}
                close={closeDeleteModal}
                onDelete={handleDelete}
                isLoading={isDeleting}
                title="Delete Experience"
                message="Are you sure you want to delete this experience?"
            />
        </>
    );
};

export default DisplayExperience;
