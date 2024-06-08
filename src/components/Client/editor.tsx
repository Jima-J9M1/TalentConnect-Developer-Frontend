'use client';
import { Button, FileInput, Grid, Group, Text } from '@mantine/core';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import SignupStyle from './Signup.module.css';

const Editor = ({ skipStep, nextStep, form, updateDataStatus }: any) => {
    if (updateDataStatus.error) {
        console.log(updateDataStatus.error, 'Error');
    }
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] })
        ],
        content: ''
    });

    if (updateDataStatus.isSuccess) {
        updateDataStatus.reset();
    }

    const [file, setFile] = useState<File | null>(null);
    const validate = () => {
        const value: any = editor?.getHTML();
        nextStep(value, file);
    };
    return (
        <Group className={SignupStyle.main_info}>
            <Text fw={700} className={SignupStyle.signupText}>
                Connecting You With Skilled Talent!
            </Text>
            <Grid>
                <Grid.Col style={{}}>
                    <Text>Share additional details to better assist you</Text>
                    {updateDataStatus.isError && (
                        <Text color="red" mt={'sm'} size="sm">
                            {updateDataStatus.error?.data?.message ??
                                updateDataStatus.error.error}
                        </Text>
                    )}
                </Grid.Col>
                <Grid.Col style={{}}>
                    <Text mb={'sm'} mt={'lg'} fw={500}>
                        Anything else you would like our team to know ?
                    </Text>
                    <MainEditor editor={editor} form={form} />
                    <Text mt={'xl'} mb={'xs'}>
                        Legal document you would share to team?
                    </Text>
                    <Group justify="start">
                        <FileInput
                            placeholder="Insert file"
                            styles={{
                                label: {
                                    marginBottom: '10px',
                                    fontSize: '14px'
                                },
                                input: { width: 'fit' }
                            }}
                            value={file}
                            onChange={setFile}
                            leftSection={<BiUpload />}
                        />
                    </Group>
                </Grid.Col>
                <Grid.Col
                    mt={'xl'}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Button
                        variant="outline"
                        onClick={skipStep}
                        className={SignupStyle.applyBtnSkip}
                    >
                        Previous
                    </Button>
                    <Button
                        loading={updateDataStatus.isLoading}
                        onClick={validate}
                        className={SignupStyle.applyBtn}
                    >
                        Submit
                    </Button>
                </Grid.Col>
            </Grid>
        </Group>
    );
};

function MainEditor({ editor, form }: any) {
    return (
        <RichTextEditor
            style={{ height: '200px', overflowY: 'auto' }}
            editor={editor}
        >
            <RichTextEditor.Toolbar sticky>
                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Underline />
                    <RichTextEditor.Strikethrough />
                    <RichTextEditor.ClearFormatting />
                    <RichTextEditor.Highlight />
                    <RichTextEditor.Code />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H1 />
                    <RichTextEditor.H2 />
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Blockquote />
                    <RichTextEditor.Hr />
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                    <RichTextEditor.Subscript />
                    <RichTextEditor.Superscript />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Link />
                    <RichTextEditor.Unlink />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.AlignLeft />
                    <RichTextEditor.AlignCenter />
                    <RichTextEditor.AlignJustify />
                    <RichTextEditor.AlignRight />
                </RichTextEditor.ControlsGroup>

                <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Undo />
                    <RichTextEditor.Redo />
                </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content />
        </RichTextEditor>
    );
}

export default Editor;
