import { useUpdateDeveloperFileMutation } from '@/lib/redux/api/developer/developer';
import { Button, Group, Stack, rem } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface Props {
    close: () => void;
}

export default function UploadProfilePicture({ close }: Props) {
    const [updateDeveloperFile, { isLoading }] =
        useUpdateDeveloperFileMutation();

    const openRef = useRef<() => void>(null);
    const imageRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState<any>(null);

    const uploadProfilePicture = () => {
        const formData = new FormData();
        formData.append('profilePicture', selectedImage);

        console.log('formData: ', formData.get('profilePicture'));

        updateDeveloperFile(formData)
            .unwrap()
            .then((data: any) => {
                close();
            })
            .catch((error: any) => {
                console.log('Error uploading profile picture: ', error);
            });
    };

    return (
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
                    const selectedFile = files[0];
                    setSelectedImage(selectedFile);
                }}
                onReject={(files: any) => console.log('rejected files', files)}
                maxSize={5 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: 200,
                    height: 200,
                    padding: selectedImage ? 0 : rem(20),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <Group
                    justify="center"
                    gap="xl"
                    display={'column'}
                    style={{ pointerEvents: 'none' }}
                >
                    {selectedImage ? (
                        <Image
                            src={URL.createObjectURL(selectedImage)}
                            alt="Selected"
                            width={200}
                            height={200}
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
                                <Stack>
                                    <IconPhoto
                                        style={{
                                            width: 100,
                                            height: 100,
                                            color: 'var(--mantine-color-dimmed)'
                                        }}
                                        stroke={1.5}
                                        ref={imageRef}
                                    />
                                </Stack>
                            </Dropzone.Idle>
                        </>
                    )}
                </Group>
            </Dropzone>
            <p>Drag and drop your video here, or click to browse</p>
            <Group justify="space-between" w={'100%'} pos={'relative'}>
                <Button onClick={() => {}} variant="outline" color="red">
                    Delete
                </Button>

                <Button onClick={uploadProfilePicture} loading={isLoading}>
                    Save
                </Button>
            </Group>
        </Stack>
    );
}
