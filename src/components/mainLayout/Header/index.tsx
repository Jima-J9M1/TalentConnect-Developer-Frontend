import { useDeveloper } from '@/Providers/DeveloperContext';
import AvailabilityForm from '@/components/developer/AvailabilityForm';
import { useGetDeveloperByIdQuery } from '@/lib/redux/api/developer/developer';
import { useAppSelector } from '@/lib/redux/hooks';
import {
    ActionIcon,
    Avatar,
    Badge,
    Button,
    CopyButton,
    Flex,
    Group,
    Menu,
    Modal,
    Skeleton,
    Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconBriefcase2,
    IconCheck,
    IconChevronDown,
    IconCopy
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDownMenu from './DropDownMenu';

export default function Header() {
    const [opened, { open, close }] = useDisclosure(false);
    const loginState = useAppSelector((state: any) => state.login);
    const [url, setUrl] = useState<string>('');
    // to be changed later for now lets fetch the developer
    const { data: developer, isLoading } = useGetDeveloperByIdQuery(
        loginState?.developerId
    );

    const { isOwner, isView } = useDeveloper();

    useEffect(() => {
        setUrl(window.location.href as string);
    }, []);

    return (
        <Group
            h="100%"
            justify="space-between"
            align="center"
            px={{ base: 24, sm: 64, md: 128 }}
        >
            <Link href="/">
                <Image
                    src={'/images/logos/Logo.svg'}
                    width={132}
                    height={50}
                    alt="logo"
                />
            </Link>
            <Group>
                {/* will be implemented later */}
                {isOwner && !isView && (
                    <Group gap={'sm'}>
                        <Text
                            c="gray.7"
                            display={{ base: 'none', xs: 'none', sm: 'flex' }}
                        >
                            {developer?.availability?.availabilityStatus === 0
                                ? 'Available For Job'
                                : developer?.availability
                                        ?.availabilityStatus === 1
                                  ? 'Not Available'
                                  : 'Available soon'}
                        </Text>
                        <Group pos={'relative'} align="center">
                            <ActionIcon
                                variant="subtle"
                                color="gray"
                                size={'lg'}
                            >
                                <IconBriefcase2
                                    style={{ color: 'gray.6' }}
                                    onClick={open}
                                />
                            </ActionIcon>
                            {developer?.availability?.availabilityStatus ===
                            0 ? (
                                <Badge
                                    color="green"
                                    circle
                                    size="8px"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0
                                    }}
                                />
                            ) : developer?.availability?.availabilityStatus ===
                              1 ? (
                                <Badge
                                    color="red"
                                    circle
                                    size="8px"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0
                                    }}
                                />
                            ) : (
                                <Badge
                                    color="yellow"
                                    circle
                                    size="8px"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0
                                    }}
                                />
                            )}
                        </Group>
                    </Group>
                )}

                {!isView && isOwner ? (
                    isLoading ? (
                        <Skeleton
                            style={{ borderRadius: '30px' }}
                            h={40}
                            w={200}
                        />
                    ) : !loginState?.id ? (
                        <Button
                            variant="outline"
                            component={Link}
                            href={'/signin'}
                        >
                            Login
                        </Button>
                    ) : (
                        <Menu
                            shadow="md"
                            width={200}
                            position="bottom-end"
                            offset={9}
                        >
                            <Menu.Target>
                                <Group
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '1px solid #e1e1e1',
                                        padding: '3px',
                                        borderRadius: '30px'
                                    }}
                                >
                                    <Avatar
                                        src={developer?.profilePictureUrl}
                                    />
                                    <Text visibleFrom="sm" c={'gray.7'}>
                                        {' '}
                                        {developer?.user.fullName}
                                    </Text>
                                    <ActionIcon
                                        variant="subtle"
                                        radius={'50%'}
                                        visibleFrom="sm"
                                    >
                                        <IconChevronDown
                                            size={24}
                                            style={{ color: 'gray' }}
                                        />
                                    </ActionIcon>
                                </Group>
                            </Menu.Target>
                            <DropDownMenu />
                        </Menu>
                    )
                ) : isLoading ? (
                    <Skeleton style={{ borderRadius: '30px' }} h={40} w={200} />
                ) : (
                    <Flex gap={'md'} align={'center'}>
                        <Button component={Link} href={`../hire`}>
                            Hire top talent
                        </Button>
                        <CopyButton value={url}>
                            {({ copied, copy }) => (
                                <>
                                    <Button
                                        variant="outline"
                                        visibleFrom="xs"
                                        leftSection={
                                            copied ? (
                                                <IconCheck
                                                    color="var(--mantine-color-blue-6)"
                                                    style={{
                                                        width: 16
                                                    }}
                                                />
                                            ) : (
                                                <IconCopy
                                                    style={{
                                                        width: 16
                                                    }}
                                                />
                                            )
                                        }
                                    >
                                        <Text
                                            onClick={copy}
                                            c={copied ? 'blue.6' : ''}
                                        >
                                            {copied ? 'Copied url' : 'Copy url'}
                                        </Text>
                                    </Button>

                                    <ActionIcon
                                        hiddenFrom="xs"
                                        color={copied ? 'teal' : 'gray'}
                                        variant="subtle"
                                        onClick={copy}
                                    >
                                        {copied ? (
                                            <IconCheck style={{ width: 16 }} />
                                        ) : (
                                            <IconCopy style={{ width: 16 }} />
                                        )}
                                    </ActionIcon>
                                </>
                            )}
                        </CopyButton>
                    </Flex>
                )}
            </Group>
            <Modal.Root opened={opened} onClose={close} centered size="xl">
                <Modal.Overlay />

                <Modal.Content p={'md'}>
                    <Modal.Header>
                        <Modal.Title>
                            <Text size="xl">Work Availability Update</Text>
                        </Modal.Title>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Modal.Body>
                        <AvailabilityForm close={close} />
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
        </Group>
    );
}
