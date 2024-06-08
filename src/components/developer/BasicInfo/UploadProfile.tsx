import { Button, Center, Group, Stack, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

export function UploadProfile(props: Partial<DropzoneProps>) {
    const openRef = useRef<() => void>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <Center>
            <Stack
                style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Dropzone
                    openRef={openRef}
                    onDrop={(files: any) => {
                        console.log('accepted files', files);
                        const selectedFile = files[0];
                        if (selectedFile) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                                setSelectedImage(reader.result as string);
                            };
                            reader.readAsDataURL(selectedFile);
                        }
                    }}
                    onReject={(files: any) =>
                        console.log('rejected files', files)
                    }
                    maxSize={5 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    {...props}
                    style={{
                        borderRadius: '50%',
                        overflow: 'hidden',
                        width: 'fit-content',
                        padding: selectedImage ? 0 : rem(20)
                    }}
                >
                    <Group
                        justify="center"
                        gap="xl"
                        display={'column'}
                        //mih={100}
                        style={{ pointerEvents: 'none' }}
                    >
                        {selectedImage ? (
                            <Image
                                src={
                                    // file to url
                                    URL.createObjectURL(selectedImage as any)
                                }
                                alt="Selected"
                                width={102}
                                height={102}
                                style={{
                                    borderRadius: '50%'
                                }}
                            />
                        ) : (
                            <>
                                <Dropzone.Accept>
                                    <IconUpload
                                        style={{
                                            width: rem(52),
                                            height: rem(52),
                                            color: 'var(--mantine-color-blue-6)'
                                        }}
                                        stroke={1.5}
                                    />
                                </Dropzone.Accept>
                                <Dropzone.Reject>
                                    <IconX
                                        style={{
                                            width: rem(52),
                                            height: rem(52),
                                            color: 'var(--mantine-color-red-6)'
                                        }}
                                        stroke={1.5}
                                    />
                                </Dropzone.Reject>
                                <Dropzone.Idle>
                                    <IconPhoto
                                        style={{
                                            width: rem(52),
                                            height: rem(52),
                                            color: 'var(--mantine-color-dimmed)'
                                        }}
                                        stroke={1.5}
                                    />
                                </Dropzone.Idle>
                            </>
                        )}
                    </Group>
                </Dropzone>
                <Button
                    onClick={() => openRef.current?.()}
                    style={{ pointerEvents: 'all' }}
                    size="compact-xs"
                >
                    Change profile
                </Button>
            </Stack>
        </Center>
    );
}
