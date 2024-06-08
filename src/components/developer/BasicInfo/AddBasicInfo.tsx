import { socialLinks } from '@/constants';
import {
    useGetDeveloperQuery,
    useUpdateDeveloperMutation
} from '@/lib/redux/api/developer/developer';
import {
    ActionIcon,
    Button,
    Flex,
    Grid,
    Group,
    NumberInput,
    Select,
    Stack,
    Text,
    TextInput
} from '@mantine/core';
import { matches, useForm } from '@mantine/form';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import classes from './BasicInfo.module.css';

export function AddBasicInfo({
    close,
    basicInfo: developer
}: {
    close: () => void;
    basicInfo: any;
}) {
    const [updateDeveloper, { isLoading, status, isSuccess, error }] =
        useUpdateDeveloperMutation();

    const { data: devProfile } = useGetDeveloperQuery({});

    // remove the id from the links
    const initialSocialLinks = developer?.socialLinks.map((social: any) => {
        return {
            name: social.name,
            url: social.url
        };
    });

    const form = useForm<{
        name: string;
        country: string;
        engineering: string;
        phoneNumber: string;
        yearsOfExperience: number;
        calendlyLink: string;
        socialMedia: [{ name: string; url: string }];
        city: string;
    }>({
        initialValues: {
            name: developer?.user.fullName || '',
            country: developer?.user.country || '',
            engineering: developer?.title || '',
            yearsOfExperience: developer?.yearsOfExperience || 0.0,
            phoneNumber: devProfile?.user.phoneNumber || '',
            calendlyLink: '',
            socialMedia: initialSocialLinks || [],
            city: developer?.user?.city || ''
        },
        validate: {
            name: (value: string) =>
                value.length > 0 ? null : 'Name is required',
            country: (value: string) =>
                value.length > 0 ? null : 'Country is required',
            engineering: (value: string) =>
                value.length > 0 ? null : 'Engineering is required',
            yearsOfExperience: (value: number) =>
                value > 0 ? null : 'Years of experience is required',
            phoneNumber: (value: string) =>
                value.length > 8 && value.length < 14
                    ? null
                    : 'Phone number is required',
            socialMedia: {
                url: matches(
                    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                    'Please enter a valid url'
                )
            }
        }
    });

    const handleAddBasicInfo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = form.validate() as any;
        if (error.hasErrors) return;

        const newValue = {
            fullName: form.values.name,
            country: form.values.country,
            phoneNumber: form.values.phoneNumber,
            title: form.values.engineering,
            yearsOfExperience: form.values.yearsOfExperience,
            socialLinks: form.values.socialMedia,
            city: form.values.city
        };

        updateDeveloper(newValue)
            .unwrap()
            .then((data: any) => {
                console.log('Updated Profile Successfully', data);
                close();
            })
            .catch((error: any) => {
                console.log('Error updating profile', error);
            });
    };
    return (
        <form onSubmit={handleAddBasicInfo}>
            <Grid columns={12}>
                <Grid.Col span={6}>
                    <TextInput
                        withAsterisk
                        label={'Full name'}
                        {...form.getInputProps('name')}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Select
                        withAsterisk
                        data={[
                            { label: 'Ethiopia', value: 'Ethiopia' },
                            { label: 'Kenya', value: 'Kenya' },
                            { label: 'Ghana', value: 'Ghana' },
                            { label: 'Egypt', value: 'Egypt' }
                        ]}
                        label={'Country'}
                        {...form.getInputProps('country')}
                        placeholder="Country"
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        withAsterisk
                        label="City"
                        {...form.getInputProps('city')}
                        placeholder="City"
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Select
                        withAsterisk
                        data={[
                            {
                                label: 'Frontend Developer',
                                value: 'Frontend Developer'
                            },
                            {
                                label: 'Backend Developer',
                                value: 'Backend Developer'
                            },
                            {
                                label: 'UI/UX Designer',
                                value: 'UI/UX Designer'
                            },
                            {
                                label: 'Mobile Developer',
                                value: 'Mobile Developer'
                            },
                            {
                                label: 'Full Stack Developer',
                                value: 'Full Stack Developer'
                            }
                        ]}
                        label={'Engineering Category'}
                        {...form.getInputProps('engineering')}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <NumberInput
                        label="Total yrs of Exp"
                        placeholder="0.0"
                        decimalScale={2}
                        fixedDecimalScale
                        defaultValue={0.2}
                        min={0.0}
                        {...form.getInputProps('yearsOfExperience')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Flex style={{ marginBottom: '5px' }} gap={5}>
                        <Text fw={500}>Phone Number</Text>
                        <span style={{ color: 'red' }}> *</span>
                    </Flex>
                    <PhoneInput
                        country={'et'}
                        isValid={(value, country) => {
                            if (
                                form.isTouched('phoneNumber') &&
                                value.length < 5
                            ) {
                                return false;
                            }
                            return true;
                        }}
                        containerStyle={{ width: '100%', border: 'none' }}
                        inputStyle={{
                            width: '100%'
                        }}
                        value={form.values.phoneNumber}
                        onChange={(new_number) => {
                            form.setFieldValue('phoneNumber', new_number);
                        }}
                        placeholder="Phone Number"
                    />
                    {form.errors?.phoneNumber && (
                        <Text style={{ fontSize: '13px' }} mt="1px" color="red">
                            invalid phone number
                        </Text>
                    )}
                </Grid.Col>
                {/*<Grid.Col span={6}>
                    <TextInput
                        label={'Calendly Link'}
                        {...form.getInputProps('calendlyLink')}
                    />
                </Grid.Col>*/}
                <Grid.Col span={12}>
                    <Text size="sm" fw={500} mb={10}>
                        Links
                    </Text>
                    <Stack gap={5} pl={10}>
                        {form.values.socialMedia.map((social, index) => {
                            return (
                                <TextInput
                                    key={index}
                                    label={social.name}
                                    {...form.getInputProps(
                                        `socialMedia.${index}.url`
                                    )}
                                    classNames={{
                                        label: classes.input_label
                                    }}
                                    rightSection={
                                        <ActionIcon
                                            variant="transparent"
                                            color="red"
                                            onClick={() =>
                                                form.removeListItem(
                                                    'socialMedia',
                                                    index
                                                )
                                            }
                                        >
                                            <IconTrash
                                                size="1rem"
                                                style={{
                                                    color: 'var(--mantine-color-red-5)'
                                                }}
                                            />
                                        </ActionIcon>
                                    }
                                />
                            );
                        })}
                    </Stack>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Flex gap={10} wrap={'wrap'}>
                        {Object.keys(socialLinks)
                            .filter((value) => {
                                return !form.values.socialMedia.some(
                                    (social) => social.name === value
                                );
                            })

                            .map((value, index) => {
                                return (
                                    <Group
                                        key={index}
                                        style={{
                                            border: '1px solid',
                                            borderColor:
                                                'var(--mantine-color-default-border)',
                                            borderRadius: '30px',
                                            padding: '5px 10px',
                                            cursor: 'pointer'
                                        }}
                                        gap={2}
                                        onClick={() =>
                                            form.insertListItem('socialMedia', {
                                                name: value,
                                                url: ''
                                            })
                                        }
                                        align="center"
                                    >
                                        <IconPlus
                                            size="1rem"
                                            style={{
                                                color: 'var(--mantine-color-gray-5)'
                                            }}
                                        />
                                        <Text size="xs" c={'gray.7'}>
                                            {value}
                                        </Text>
                                    </Group>
                                );
                            })}
                    </Flex>
                </Grid.Col>
                {error && (
                    <Grid.Col span={{ base: 12, lg: 12 }}>
                        <Text
                            style={{
                                color: 'red'
                            }}
                        >
                            {(error as any).data?.message}
                        </Text>
                    </Grid.Col>
                )}
                <Grid.Col span={12}>
                    <Flex gap={24} mt={20} justify={'flex-end'}>
                        <Button variant="default" onClick={close}>
                            Cancel
                        </Button>
                        <Button type="submit" loading={isLoading}>
                            Save
                        </Button>
                    </Flex>
                </Grid.Col>
            </Grid>
        </form>
    );
}
