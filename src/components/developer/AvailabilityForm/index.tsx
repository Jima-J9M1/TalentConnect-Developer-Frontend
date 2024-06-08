import {
    Button,
    Grid,
    Group,
    NumberInput,
    Radio,
    Stack,
    Text
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

interface AvailabilityFormProps {
    close: any;
}

import {
    useGetDeveloperQuery,
    useUpdateAvailabilityMutation
} from '@/lib/redux/api/developer/developer';
import { IconCheck } from '@tabler/icons-react';

const AvailabilityForm = ({ close }: AvailabilityFormProps) => {
    const [inWeeks, setInWeeks] = useState(true);
    const [willBeAvailableIn, setWillBeAvailableIn] = useState(true);
    const [updateAvailability, { isLoading, isError, isSuccess, error }] =
        useUpdateAvailabilityMutation();

    const { data: developer } = useGetDeveloperQuery({});

    const form = useForm({
        initialValues: {
            availability:
                developer?.availability?.availabilityStatus.toString() || '0',
            weeks: developer?.availability?.availabilityInWeeks || 0,
            fullTime:
                developer?.availability?.jobTypePreference.toString() || '0'
        },

        onValuesChange: (values) => {
            if (values.availability === '2') {
                setWillBeAvailableIn(false);
            } else {
                setWillBeAvailableIn(true);
            }
        },

        validate: {
            weeks: (value, values) => {
                if (values.availability === '2' && !value) {
                    return 'This field is required';
                }
                return null;
            }
        }
    });

    const handleWeekChange = async (e: any) => {
        e.preventDefault();

        form.validate();
        if (form.errors.weeks) {
            console.log('THe errors are', form.errors);
            return;
        }

        const availability = parseInt(form.values.availability);
        const weeks =
            form.values.availability === '2' ? form.values.weeks : null;
        const fullTime = parseInt(form.values.fullTime);

        updateAvailability({
            availabilityStatus: availability,
            availabilityInWeeks: weeks,
            jobTypePreference: fullTime
        })
            .unwrap()
            .then((data: any) => {
                console.log(data);
                close();
            })
            .catch((err: any) => {
                console.log(err);
                form.setErrors({ retry: 'An error occured, please try again' });
            });
    };

    return (
        <form
            onSubmit={(e) => {
                handleWeekChange(e);
            }}
        >
            <Grid gutter={32}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    {form.errors.retry && (
                        <Text c="red" style={{ textAlign: 'center' }}>
                            {form.errors.retry}
                        </Text>
                    )}
                    <Radio.Group
                        name="availability"
                        {...form.getInputProps('availability')}
                        label="Are you available to be shortlisted?"
                        size="md"
                    >
                        <Stack my={10}>
                            <Radio value="0" label="Yes" />
                            <Radio value="1" label="no" />
                            <Group gap={0}>
                                <Radio
                                    {...form.getInputProps('availability')}
                                    value="2"
                                    label="I will be available"
                                />
                                <NumberInput
                                    {...form.getInputProps('weeks')}
                                    min={0}
                                    max={12}
                                    size="xs"
                                    w={'40px'}
                                    disabled={willBeAvailableIn}
                                    error={null}
                                />
                                week(s)
                                {form.errors.weeks && (
                                    <Text
                                        c="red"
                                        style={{ textAlign: 'center' }}
                                    >
                                        {form.errors.weeks}
                                    </Text>
                                )}
                            </Group>
                        </Stack>
                    </Radio.Group>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Radio.Group
                        name="fullTime"
                        {...form.getInputProps('fullTime')}
                        label="Are you interested in full-time?"
                        size="md"
                    >
                        <Stack my={10}>
                            <Radio value="0" label="Yes" />
                            <Radio value="1" label="No, only part-time." />
                            <Radio
                                value="2"
                                label="I can start part-time immediately and then switch to full time."
                            />
                        </Stack>
                    </Radio.Group>
                </Grid.Col>
                <Grid.Col
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Button loading={isLoading} type="submit" px={'28px'}>
                        {isSuccess ? <IconCheck color="#ffff" /> : 'Save'}
                    </Button>
                </Grid.Col>
            </Grid>
        </form>
    );
};

export default AvailabilityForm;
