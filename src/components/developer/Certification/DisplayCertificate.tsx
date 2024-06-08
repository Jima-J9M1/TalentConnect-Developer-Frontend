import { useDeveloper } from '@/Providers/DeveloperContext';
import {
    ActionIcon,
    Card,
    Divider,
    Flex,
    Grid,
    Group,
    Menu,
    Modal,
    ScrollArea,
    Stack,
    Text
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconAwardFilled, IconTrash } from '@tabler/icons-react';
import {
    IconCalendarMonth,
    IconDotsVertical,
    IconPencil
} from '@tabler/icons-react';
import dayjs from 'dayjs';
import Link from 'next/link';
import EditCertificateForm from './EditCertificateForm';

const CustomScrollArea = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollArea scrollbars="y" scrollbarSize={0}>
            {children}
        </ScrollArea>
    );
};

export default function DisplayCertficate({
    certificate
}: {
    certificate: any;
}) {
    const [opened, { open, close }] = useDisclosure(false);
    const { isOwner, isView } = useDeveloper();

    const formattedIssueDate = dayjs(certificate.issueDate).format(
        'DD MMM YYYY'
    );
    const formattedExpirationDate = dayjs(certificate.expirationDate).format(
        'DD MMM YYYY'
    );
    return (
        <Group
            style={{
                border: '2px solid var(--mantine-color-yellow-6)',
                padding: 24,
                borderRadius: 16
            }}
        >
            <Grid align="center">
                <Grid.Col
                    span={'auto'}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '18px'
                    }}
                    pl={0}
                >
                    <IconAwardFilled
                        size={24}
                        style={{ color: 'var(--mantine-color-yellow-6)' }}
                    />
                    <Text fw={500} size="lg">
                        <Link
                            href={certificate?.link || '/'}
                            target="_blank"
                            className={certificate.project_title}
                        >
                            {certificate.name}
                        </Link>
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
                                    //onClick={handleDelete}
                                >
                                    Delete
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        {/*<MdDeleteOutline size={25} />*/}
                    </Grid.Col>
                )}
                <Grid.Col span={12}>
                    <Divider />
                </Grid.Col>
                <Grid.Col span={12} pl={0}>
                    <Flex justify={'space-between'} wrap={'wrap'}>
                        <Stack gap={8}>
                            <Text c={'gray.8'} fw={500}>
                                Certification Provider
                            </Text>
                            <Text c={'gray.7'}>{certificate.issuedBy}</Text>
                        </Stack>
                        <Group gap={32}>
                            <Stack gap={8}>
                                <Text c={'gray.8'} fw={500}>
                                    Issued
                                </Text>
                                <Group gap={2} align="center" justify="center">
                                    <IconCalendarMonth size={12} />{' '}
                                    <Text c={'gray.7'} size="sm">
                                        {formattedIssueDate}
                                    </Text>
                                </Group>
                            </Stack>
                            <Stack gap={8}>
                                <Text c={'gray.8'} fw={500}>
                                    Expires
                                </Text>
                                <Group gap={2} align="center">
                                    <IconCalendarMonth size={12} />{' '}
                                    <Text c={'gray.7'} size="sm">
                                        {formattedExpirationDate}
                                    </Text>
                                </Group>
                            </Stack>
                        </Group>
                    </Flex>
                </Grid.Col>

                <Grid.Col span={12} pl={0}>
                    <Stack gap={8}>
                        <Text c={'gray.8'} fw={500}>
                            Description
                        </Text>
                        <Text
                            size="sm"
                            c="gray.7"
                            dangerouslySetInnerHTML={{
                                __html: certificate?.description
                            }}
                        ></Text>
                    </Stack>
                </Grid.Col>
            </Grid>
            {/*  form */}
            <Modal
                size={'lg'}
                maw={'400px'}
                opened={opened}
                onClose={close}
                title="Edit Certificate"
                centered
            >
                <EditCertificateForm certificate={certificate} close={close} />
            </Modal>
        </Group>
    );
}
