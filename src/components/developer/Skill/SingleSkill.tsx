import { useDeveloper } from '@/Providers/DeveloperContext';
import { useDeleteSkillMutation } from '@/lib/redux/api/developer/skill';
import { DeveloperSkill } from '@/types';
import { ActionIcon, Badge, Grid, Menu, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons-react';
import { EditSkill } from './EditSkill';

export function SingleSkill({ skill }: { skill: DeveloperSkill }) {
    const [opened, { open, close }] = useDisclosure(false);
    const { isOwner, isView } = useDeveloper();
    const [deleteSkill, { isLoading: isLoadingDelete }] =
        useDeleteSkillMutation();

    const handleDelete = () => {
        deleteSkill(skill?.skillId)
            .unwrap()
            .then((res: any) => {
                console.log('Delete Skill Successfully');
                close();
            })
            .catch((err: any) => {
                console.log('Error Deleting Skill', err);
            });
    };

    const competencyDic: {
        [key: number]: string;
    } = {
        0: 'Beginner',
        1: 'Intermediate',
        2: 'Advanced'
    };

    const color: string =
        skill.competencyLevel == 0
            ? 'blue'
            : skill.competencyLevel == 1
              ? 'yellow'
              : 'green';
    return (
        <>
            <Grid.Col
                span={'auto'}
                style={{
                    color: '#71717A',
                    fontSize: '14px',
                    fontWeight: 400
                }}
            >
                <Text size="sm" style={{ textTransform: 'capitalize' }}>
                    {skill.skill.name}
                </Text>
            </Grid.Col>
            <Grid.Col
                span={'auto'}
                style={{
                    color: '#71717A',
                    fontSize: '14px',
                    fontWeight: 400
                }}
            >
                <Text size="sm">{`${skill.yearsOfExperience} Years`}</Text>
            </Grid.Col>
            <Grid.Col
                span={'auto'}
                style={{
                    color: '#71717A',
                    fontSize: '14px',
                    fontWeight: 400
                }}
            >
                <Badge color={color} variant="outline">
                    {competencyDic[skill.competencyLevel]}
                </Badge>
            </Grid.Col>

            {isOwner && !isView && (
                <Grid.Col
                    span={'auto'}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}
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
                                onClick={handleDelete}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Grid.Col>
            )}
            <Modal
                opened={opened}
                onClose={close}
                title="Edit Skill"
                centered
                size={'md'}
            >
                <EditSkill
                    close={close}
                    skill={skill}
                    handleDelete={handleDelete}
                />
            </Modal>
        </>
    );
}

//export function NewSingleSkill({ skill }: { skill: Skill }) {
//    const dispatch = useDispatch();
//    const [opened, { open, close }] = useDisclosure(false);

//    const handleDelete = () => {
//        dispatch(deleteSkill(skill.id));
//    };

//    const color =
//        skill.competency == 'beginner'
//            ? 'blue'
//            : skill.competency == 'intermediate'
//              ? 'yellow'
//              : 'green';
//    return (
//        <Grid.Col span={2}>
//            <Card
//                shadow="xs"
//                radius="md"
//                withBorder
//                style={{
//                    maxWidth: '200px',
//                    display: 'flex',
//                    flexDirection: 'column',
//                    justifyContent: 'center',
//                    alignItems: 'center',
//                    height: 'fit-content',
//                    gap: 2
//                }}
//            >
//                <Card.Section py="xs" style={{ width: '100%' }} mb={4}>
//                    <Group justify="space-between">
//                        <Group>
//                            <IconCode />
//                            <Text
//                                size="sm"
//                                style={{ textTransform: 'capitalize' }}
//                            >
//                                {skill.skill}
//                            </Text>
//                        </Group>
//                        <ActionIcon variant="default" onClick={open}>
//                            <IconEdit
//                                style={{ cursor: 'pointer' }}
//                                size={'16px'}
//                            />
//                        </ActionIcon>
//                    </Group>
//                </Card.Section>
//                <CardSection py={'xs'} w={'100%'}>
//                    <Group align="center" justify="flex-start">
//                        <Text size="sm">{`${skill.yearsOfExperience} Years`}</Text>
//                        <Badge color={color} variant="outline">
//                            {skill.competency}
//                        </Badge>
//                    </Group>
//                </CardSection>
//            </Card>
//            <Modal
//                opened={opened}
//                onClose={close}
//                title="Edit Skill"
//                centered
//                size={'md'}
//            >
//                <EditSkill
//                    close={close}
//                    skill={skill}
//                    handleDelete={handleDelete}
//                />
//            </Modal>
//        </Grid.Col>
//    );
//}
