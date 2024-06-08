import {
    ActionIcon,
    Box,
    Button,
    Checkbox,
    Flex,
    Grid,
    Menu,
    Modal,
    Select,
    Text,
    TextInput
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import {
    IconCalendarMonth,
    IconDotsVertical,
    IconPencil,
    IconTrash
} from '@tabler/icons-react';
import React, { useEffect } from 'react';

import { useDeveloper } from '@/Providers/DeveloperContext';
import {
    useDeleteEducationMutation,
    useUpdateEducationMutation
} from '@/lib/redux/api/developer/education';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Color from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import dayjs from 'dayjs';
import DeleteModal from '../DeleteModal/DeleteModal';

const DisplayEducation = ({ education }: { education: any }) => {
    const [content, setContent] = React.useState<string>(
        education?.description || ''
    );
    const [opened, { open, close }] = useDisclosure(false);
    // state to control the delete modal
    const [
        deleteModalOpened,
        { open: openDeleteModal, close: closeDeleteModal }
    ] = useDisclosure(false);
    const [
        updateEducation,
        { isLoading: isUpdating, isSuccess: isUpdatingSuccess }
    ] = useUpdateEducationMutation();
    const [deleteEducation, { isLoading: isDeleting }] =
        useDeleteEducationMutation();

    useEffect(() => {
        if (isUpdatingSuccess) {
            close();
        }
    }, [isUpdatingSuccess]);

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
    const formattedStartDate = dayjs(education.startDate).format('MMMM YYYY');
    const formattedEndDate = dayjs(education.endDate).format('MMMM YYYY');

    const form = useForm({
        initialValues: {
            collageName: education.institutionName
                ? education.institutionName
                : '',
            degree: education.degree ? education.degree : 'No Formal Education',
            present: education.isEndDatePresent ? true : false,
            description: education.description ? education.description : '',
            country: education.country ? education.country : '',
            city: education.city ? education.city : '',
            department: education.field ? education.field : '',
            startDate: dayjs(education.startDate).format('YYYY-MM'),
            endDate: dayjs(education.endDate).format('YYYY-MM')
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

    // console.log('Form:', education);

    const handleSubmit = (values: any) => {
        const present = new Date().toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        });

        const updatedEducation = {
            id: education.id,
            institutionName: form.values.collageName,
            field: form.values.department,
            degree: form.values.degree,
            startDate:
                form.values.startDate.length === 0
                    ? education.startDate
                    : form.values.startDate,
            endDate: form.values.present
                ? present
                : form.values.endDate.length === 0
                  ? education.endDate
                  : form.values.endDate,
            description: content,
            country: form.values.country,
            city: form.values.city,
            isEndDatePresent: form.values.present
        };

        updateEducation(updatedEducation)
            .unwrap()
            .then((data: any) => {
                console.log('UPDATE SUCCESS:', data);
            })
            .catch((error: any) => {
                console.log('Error:', error);
            });

        close();
    };

    const handleDelete = () => {
        let id = education.id ? education.id : '';

        deleteEducation(id)
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
            <Grid pl={8} w={'100%'} gutter={'5px'}>
                <Grid.Col
                    span={'auto'}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text fw={500}>
                        {education.institutionName
                            ? education.institutionName
                            : ''}
                    </Text>
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
                            alignItems: 'center',
                            gap: 5
                        }}
                    >
                        {' '}
                        <IconCalendarMonth
                            color="var(--mantine-color-gray-7)"
                            size={16}
                        />
                        <Text>
                            {formattedStartDate} -{' '}
                            {education.isEndDatePresent
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
                            {education.isEndDatePresent
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
                        <Text size="md" c="gray.7">
                            {education.degree ? education.degree : ''}
                        </Text>
                    </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 12 }}>
                    <Text
                        size="md"
                        c="gray.7"
                        dangerouslySetInnerHTML={{
                            __html: education.description
                                ? education.description
                                : ''
                        }}
                    />
                </Grid.Col>
            </Grid>

            <Modal
                size={'xl'}
                opened={opened}
                onClose={close}
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
                                    'No Formal Education',
                                    'Primary Education',
                                    'Secondary Education',
                                    'High School Diploma or Equivalent',
                                    'Coding Academy',
                                    "Associate's Degree",
                                    "Bachelor's Degree",
                                    "Master's Degree",
                                    'Doctoral or Professional Degree'
                                ]}
                                {...form.getInputProps('degree')}
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
                                <Button
                                    onClick={() => handleSubmit(form.values)}
                                    loading={isUpdating}
                                >
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
                title="Delete Education"
                message="Are you sure you want to delete this education?"
            />
        </>
    );
};

export default DisplayEducation;
