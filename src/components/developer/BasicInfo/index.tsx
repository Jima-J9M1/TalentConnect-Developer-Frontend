import { useDeveloper } from '@/Providers/DeveloperContext';
import { socialLinks } from '@/constants';
import { useGetDeveloperQuery } from '@/lib/redux/api/developer/developer';
import {
    ActionIcon,
    AspectRatio,
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Divider,
    Flex,
    Group,
    Modal,
    Skeleton,
    Stack,
    Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconCamera,
    IconDownload,
    IconPencil,
    IconPlayerPlay
} from '@tabler/icons-react';
import { ETFlag } from 'mantine-flagpack';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { AddBasicInfo } from './AddBasicInfo';
import classes from './BasicInfo.module.css';
import UploadProfilePicture from './UploadProfilePicture';

export default function BasicInfo() {
    const [opened, { open, close }] = useDisclosure(false);
    const [openedUpload, { open: openUpload, close: closeUpload }] =
        useDisclosure(false);
    const { data: devProfile } = useGetDeveloperQuery({});
    const { developer, isLoading, isError, error } = useDeveloper();

    return (
        <Card p={0} radius={'md'}>
            <Stack
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'fit-content',
                    gap: 2
                }}
                bg={'white'}
                className={classes.card}
                px={0}
            >
                <Box
                    py="md"
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    mb={4}
                >
                    <Group
                        justify="space-between"
                        style={{
                            position: 'relative',
                            width: '105px',
                            height: '105px',
                            padding: 0
                        }}
                    >
                        <Avatar
                            src={developer?.profilePictureUrl || ''}
                            size={'120px'}
                        />

                        <Badge
                            color="green"
                            size="sm"
                            style={{
                                position: 'absolute',
                                top: '10%',
                                left: '5%'
                            }}
                        ></Badge>

                        <ActionIcon
                            //variant="light"
                            color={'rgba(110,110,110,0.5)'}
                            onClick={openUpload}
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                right: '5%',
                                borderRadius: '50%'
                                //padding: 10
                            }}
                        >
                            <IconCamera
                                style={{
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                                size={16}
                            />
                        </ActionIcon>
                    </Group>
                </Box>
                <Divider w={'100%'} />
                <Box px={32}>
                    <Stack gap={20} py={12}>
                        <Stack gap={10} justify="center">
                            <Group justify="space-between" align="center">
                                <Text
                                    fw={500}
                                    size={'lg'}
                                    lineClamp={2}
                                    w={'200px'}
                                >
                                    {developer?.user.fullName}
                                </Text>
                                <Skeleton visible={isLoading} h={20} w={20}>
                                    <ActionIcon
                                        variant="subtle"
                                        color="gray"
                                        onClick={open}
                                        style={{
                                            color: 'var(--mantine-color-gray-7)'
                                        }}
                                    >
                                        <IconPencil
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </ActionIcon>
                                </Skeleton>
                            </Group>
                            <Group justify="space-between">
                                <Group gap={4} align="center">
                                    {!isLoading && (
                                        <ETFlag
                                            w={24}
                                            radius={0}
                                            style={{
                                                alignSelf: 'start',
                                                marginTop: 4
                                            }}
                                        />
                                    )}
                                    {/*<Skeleton visible={isLoading} h={16} w={100}>*/}
                                    <Text size="sm" c="gray.6" p={0} m={0}>
                                        <Text>{developer?.user?.city}</Text>
                                        <Text>{developer?.user.country}</Text>
                                    </Text>
                                </Group>
                                {/*</Skeleton>*/}
                                <Text size="sm" c="gray.6">
                                    {devProfile?.user?.phoneNumber}
                                </Text>
                            </Group>
                            {isLoading ? (
                                <Skeleton visible={isLoading} h={16} w={200} />
                            ) : (
                                <Group>
                                    <Group flex={1}>
                                        <Text c="gray.6" lineClamp={4}>
                                            {developer?.title}
                                        </Text>
                                    </Group>
                                    <Text c={'gray.7'}>|</Text>
                                    <Group>
                                        <Text c="gray.7">Full Time</Text>
                                    </Group>
                                </Group>
                            )}
                        </Stack>
                        <Flex gap={10} w={'100%'}>
                            {isLoading ? (
                                <Group justify="space-between" w={'100%'}>
                                    <Skeleton
                                        visible={isLoading}
                                        h={32}
                                        w={100}
                                    />
                                    <Skeleton
                                        visible={isLoading}
                                        h={32}
                                        w={100}
                                    />
                                </Group>
                            ) : (
                                <>
                                    <Stack gap={'2px'} w={'100%'}>
                                        <Text size="xs" c="gray.5">
                                            Experience
                                        </Text>

                                        <Text fw={500} size="xs">
                                            {developer?.yearsOfExperience} Year
                                            {developer?.yearsOfExperience > 1
                                                ? 's'
                                                : ''}
                                        </Text>
                                    </Stack>
                                </>
                            )}
                        </Flex>

                        <Stack style={{ width: '100%' }} gap={4}>
                            {isLoading ? (
                                <>
                                    <Skeleton
                                        visible={isLoading}
                                        h={16}
                                        w={100}
                                    />
                                    <Skeleton
                                        visible={isLoading}
                                        h={20}
                                        w={100}
                                    />
                                </>
                            ) : (
                                <>
                                    <Text size="sm" c={'gray.5'}>
                                        Social links
                                    </Text>
                                    <Group>
                                        {developer?.socialLinks.map(
                                            (social: {
                                                name: string;
                                                url: string;
                                                id: string;
                                            }) => {
                                                return (
                                                    <Link
                                                        target="_blank"
                                                        href={social.url}
                                                        key={social.id}
                                                        style={{
                                                            cursor: 'pointer',
                                                            color: 'var(--mantine-color-gray-9)'
                                                        }}
                                                    >
                                                        {
                                                            socialLinks[
                                                                social?.name as keyof typeof socialLinks
                                                            ]
                                                        }
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </Group>
                                </>
                            )}
                        </Stack>
                        {/*<Stack gap={'2px'} w={'100%'}>
                    <Text
                        size="xs"
                        c="gray.6"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        {isLoading ? (
                            <Group justify="space-between" w={'100%'}>
                                <Skeleton visible={isLoading} h={16} w={100} />
                                <Skeleton visible={isLoading} h={16} w={50} />
                            </Group>
                        ) : (
                            <>
                                <Text>Assessment score</Text>
                                <Text fw={500}>50%</Text>
                            </>
                        )}
                    </Text>
                    <Skeleton visible={isLoading} h={10} w={'100%'} mt={2}>
                        <Progress value={50} />
                    </Skeleton>
                </Stack>*/}
                    </Stack>

                    <Modal
                        opened={opened}
                        onClose={close}
                        title="Add Basic Information"
                        style={{ width: '400px' }}
                        centered
                        size={'lg'}
                    >
                        {developer && (
                            <AddBasicInfo close={close} basicInfo={developer} />
                        )}
                    </Modal>
                    <Modal
                        opened={openedUpload}
                        onClose={closeUpload}
                        title="Upload Profile Picture"
                        centered
                        size={'lg'}
                    >
                        <UploadProfilePicture close={closeUpload} />
                    </Modal>
                </Box>
            </Stack>
        </Card>
    );
}

export function ViewBasicInfo() {
    const [opened, { open, close }] = useDisclosure(false);
    const [
        clientModalOpened,
        { open: openClientModal, close: closeClientModal }
    ] = useDisclosure(false);
    const { developer, isLoading, isError, error, isOwner } = useDeveloper();

    return (
        <Stack w={350}>
            <Card
                radius="md"
                withBorder
                style={{
                    minWidth: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'fit-content',
                    gap: 2
                }}
                px={0}
            >
                <Card.Section
                    py="lg"
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'var(--mantine-color-gray-2)',
                        position: 'relative',
                        height: '194px'
                    }}
                    mb={4}
                >
                    <Image
                        src={developer?.profilePictureUrl || '/'}
                        alt="Profile Picture"
                        fill
                        style={{
                            objectFit: 'cover',
                            filter: 'blur(5px)'
                        }}
                    />
                </Card.Section>
                <Stack align="flex-start" gap={20} py={12}>
                    <Stack gap={10}>
                        <Group
                            justify="space-between"
                            w={'100%'}
                            align="center"
                        >
                            {isLoading ? (
                                <Skeleton h={16} w={200} />
                            ) : (
                                <Text
                                    fw={500}
                                    size={'lg'}
                                    lineClamp={2}
                                    w={'200px'}
                                    style={{ filter: 'blur(5px)' }}
                                >
                                    {developer?.user.fullName}
                                </Text>
                            )}

                            <Group gap={4}>
                                {!isLoading && <ETFlag w={24} radius={0} />}
                                <Skeleton visible={isLoading} h={16} w={50}>
                                    <Text size="sm" c="gray.6">
                                        {developer?.user.country}
                                    </Text>
                                </Skeleton>
                            </Group>
                        </Group>

                        {isLoading ? (
                            <Skeleton visible={isLoading} h={16} w={200} />
                        ) : (
                            <Group>
                                <Text c="gray.6">{developer?.title}</Text>
                            </Group>
                        )}
                    </Stack>
                </Stack>
            </Card>
            <Group w={'auto'} justify="flex-start" wrap="wrap">
                {developer?.resumeUrl && (
                    <Button
                        size="md"
                        bg={'white'}
                        c={'dark'}
                        style={{
                            //border: 1,
                            borderLeft:
                                '2px solid var(--mantine-primary-color-filled)',
                            fontWeight: 400,
                            fontSize: 'var(--mantine-font-size-md)'
                        }}
                        rightSection={
                            <IconDownload color=" var(--mantine-primary-color-filled)" />
                        }
                        leftSection={
                            <AiOutlineFilePdf
                                style={{
                                    height: '20px',
                                    width: 'auto',
                                    color: 'var(--mantine-color-red-8)'
                                }}
                            />
                        }
                        onClick={openClientModal}
                    >
                        Resume{' '}
                    </Button>
                )}

                {developer?.introVideoUrl && (
                    <Button
                        size="md"
                        bg={'white'}
                        c={'dark'}
                        style={{
                            fontWeight: 400,
                            borderLeft:
                                '2px solid var(--mantine-primary-color-filled)',
                            fontSize: 'var(--mantine-font-size-md)'
                        }}
                        rightSection={
                            <IconPlayerPlay color=" var(--mantine-primary-color-filled)" />
                        }
                        //onClick={open}
                        onClick={openClientModal}
                    >
                        {' '}
                        Intro video
                    </Button>
                )}
                {!isOwner && (
                    <Button
                        size="md"
                        style={{
                            fontWeight: 400
                        }}
                        component={Link}
                        //href={developer?.resumeUrl}
                        href={`/hire`}
                    >
                        {' '}
                        Hire {developer?.user?.fullName?.split(' ')[0]}
                    </Button>
                )}
            </Group>
            <Modal
                p={0}
                m={0}
                opened={opened}
                onClose={close}
                title={'Intro Video'}
                centered
                size={'xl'}
            >
                {developer?.introVideoUrl && (
                    // video player here
                    <AspectRatio ratio={1080 / 500} mx="auto">
                        <video
                            width="320"
                            height="240"
                            style={{ objectFit: 'contain' }}
                            controls
                            src={developer.introVideoUrl}
                        />
                    </AspectRatio>
                )}
            </Modal>
            <Modal
                p={0}
                m={0}
                opened={clientModalOpened}
                onClose={closeClientModal}
                centered
                size={'lg'}
            >
                <Stack align="center">
                    <Group pos={'relative'} h={210} w={210}>
                        <Image
                            src={'/images/others/clientsignup.svg'}
                            alt="Client Signup"
                            fill
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </Group>
                    <Text
                        style={{
                            textAlign: 'justify'
                        }}
                        c={'gray.7'}
                    >
                        Schedule a call now and unlock the potential to connect
                        with top-tier tech talent, explore tailored solutions,
                        and ensure success in your projects. Our team is ready
                        to assist you on your journey to streamlined project
                        success.
                    </Text>
                    <Button
                        size="md"
                        component={Link}
                        href={`../signup/client`}
                    >
                        {' '}
                        Schedule a call
                    </Button>
                </Stack>
            </Modal>
        </Stack>
    );
}
