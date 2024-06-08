import { useUpdateDeveloperMutation } from '@/lib/redux/api/developer/developer';
import { Button, Container, Flex, Text } from '@mantine/core';
import { Link, RichTextEditor } from '@mantine/tiptap';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

export default function OverviewForm({
    close,
    overviewValue
}: {
    close: () => void;
    overviewValue: string;
}) {
    const [updateDeveloper, { isLoading, isError, isSuccess }] =
        useUpdateDeveloperMutation();

    const [content, setContent] = React.useState<string>(overviewValue);
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            TextStyle,
            Color
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

    const handleSave = () => {
        const newValue = {
            profileOverview: content
        };

        updateDeveloper(newValue)
            .unwrap()
            .then((data: any) => {
                console.log('Updated Profile Overview Successfully', data);
                close();
            })
            .catch((error: any) => {
                console.log('Error updating profile overview', error);
            });
    };

    return (
        <Container
            style={{
                overflow: 'hidden'
            }}
            p={0}
            m={0}
        >
            <RichTextEditor
                editor={editor}
                h={'300px'}
                style={{
                    overflowY: 'scroll',
                    scrollbarWidth: 'thin'
                }}
            >
                <RichTextEditor.Toolbar sticky>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.ClearFormatting />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
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

            {/*</Container>*/}
            <Flex justify="flex-end" mt={24} gap={24}>
                <Button variant="default" onClick={close}>
                    Cancel
                </Button>
                <Button onClick={handleSave} loading={isLoading}>
                    Save
                </Button>
            </Flex>
        </Container>
    );
}
