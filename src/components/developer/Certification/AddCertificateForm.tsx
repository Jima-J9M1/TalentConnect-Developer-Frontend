import { Box, Button, Grid, Group, Text, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

import { Link, RichTextEditor } from '@mantine/tiptap';
import Color from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type FormValues = {
    name: string;
    description: string;
    credentialURL: string;
    certificateId: string;
    issueDate: string;
    expirationDate: string;
    issuedBy: string;
};

export default function AddCertificateForm({ close }: { close: () => void }) {
    const form = useForm<FormValues>({
        initialValues: {
            name: '',
            description: '',
            credentialURL: '',
            certificateId: '',
            issueDate: '',
            expirationDate: '',
            issuedBy: ''
        },

        validate: {
            name: isNotEmpty('Name is required'),
            description: isNotEmpty('Description is required'),
            credentialURL: isNotEmpty('Credential URL is required'),
            certificateId: isNotEmpty('Certificate ID is required'),
            issueDate: isNotEmpty('Issue Date is required'),
            expirationDate: isNotEmpty('Expiration Date is required'),
            issuedBy: isNotEmpty('Issued By is required')
        }
    });

    const handleSubmit = () => {};

    const certificateEditor = useEditor({
        extensions: [
            StarterKit,
            Link,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color,
            Placeholder.configure({
                placeholder: 'Write you certificate description here'
            })
        ],
        content: form.values.description,
        onUpdate: ({ editor }: { editor: any }) => {
            if (editor.getHTML().length <= 1000) {
                form.setFieldValue('description', editor.getHTML());
            } else {
                editor.commands.setContent(form.values.description);
            }
        }
    });

    return (
        <Box mx="auto" component="form" onSubmit={handleSubmit}>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                        withAsterisk
                        label="Certificate Name"
                        placeholder="Certificate Name"
                        {...form.getInputProps('name')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                        withAsterisk
                        label="Issuing Authority"
                        placeholder="Certificate Name"
                        {...form.getInputProps('name')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                        withAsterisk
                        label="Certificate ID"
                        placeholder="Certificate ID"
                        {...form.getInputProps('certificateId')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TextInput
                        withAsterisk
                        label="Certificate Link"
                        placeholder="https://example.com"
                        {...form.getInputProps('credentialURL')}
                    />
                </Grid.Col>

                <Grid.Col span={6}>
                    <TextInput
                        withAsterisk
                        type="date"
                        label="Issue Date"
                        {...form.getInputProps('issueDate')}
                        max={form.values.issueDate}
                        placeholder="Issue Date"
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        withAsterisk
                        type="date"
                        label="Expire Date"
                        {...form.getInputProps('expirationDate')}
                        min={form.values.expirationDate}
                        placeholder="Expire Date"
                    />
                </Grid.Col>

                <Grid.Col span={{ base: 12 }}>
                    <Text size="sm" fw={500} mb={2}>
                        Certificate Description
                    </Text>

                    <RichTextEditor editor={certificateEditor}>
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
                        {form.values.description.length} /{1000} characters
                    </Text>
                    <Text mt={5} c={'red'}>
                        {form.values.description.length >= 1000 &&
                            "You've reached the maximum number of characters"}
                    </Text>
                    {/*  error message */}
                    <Text size="sm" c={'red'} mt={4}>
                        {form.errors.description && form.errors.description}
                    </Text>
                </Grid.Col>
            </Grid>

            <Grid.Col span={12}>
                <Group gap={24} mt={24} justify="flex-end">
                    <Button variant="default" onClick={close}>
                        Cancel
                    </Button>
                    <Button
                        justify="space-between"
                        type="submit"
                        //loading={isLoading}
                    >
                        Save
                    </Button>
                </Group>
            </Grid.Col>
        </Box>
    );
}
