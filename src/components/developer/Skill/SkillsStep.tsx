import { useDeveloper } from '@/Providers/DeveloperContext';
import { useGetSkillsQuery } from '@/lib/redux/api/developer/skill';
import { DeveloperSkill } from '@/types';
import { Grid, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CardWrapper from '../ProfileCenter/CardWrapper';
import { SingleSkill } from './SingleSkill';
import { SkillForm } from './SkillForm';

export default function SkillsStep() {
    const [opened, { open, close }] = useDisclosure(false);

    const {
        developer,
        isLoading: devIsLoading,
        isError: devIsError,
        error: devError,
        isView,
        isOwner
    } = useDeveloper();

    const { data: skills, isLoading } = useGetSkillsQuery(
        developer?.user.id || ''
    );

    const headerProps = {
        title: 'Skills',
        add: true,
        onAdd: open
    };

    return (
        <CardWrapper headerProps={headerProps} noData={!skills?.length}>
            <Stack>
                {skills?.length > 0 && (
                    <Grid>
                        <Grid.Col
                            span={'auto'}
                            style={{
                                color: '#71717A',
                                fontSize: '14px',
                                fontWeight: 400,
                                display: 'flex',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <Text
                                size="sm"
                                style={{ textTransform: 'capitalize' }}
                            >
                                Skill
                            </Text>
                        </Grid.Col>
                        <Grid.Col
                            span={'auto'}
                            style={{
                                color: '#71717A',
                                fontSize: '14px',
                                fontWeight: 400,
                                justifyContent: 'center'
                            }}
                        >
                            <Text size="sm">Years of experience</Text>
                        </Grid.Col>
                        <Grid.Col
                            span={'auto'}
                            style={{
                                color: '#71717A',
                                fontSize: '14px',
                                fontWeight: 400,
                                justifyContent: 'center'
                            }}
                        >
                            <Text size="sm">Competency</Text>
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
                                <Text size="sm">Action</Text>
                            </Grid.Col>
                        )}
                    </Grid>
                )}
                {skills
                    ?.filter((s: any) => s?.Name != '')
                    .map((value: DeveloperSkill, index: number) => {
                        return (
                            <Grid key={index}>
                                <SingleSkill skill={value} />
                            </Grid>
                        );
                    })}
            </Stack>
            <Modal
                opened={opened}
                onClose={close}
                title="Add Skill"
                centered
                size={'md'}
            >
                <SkillForm close={close} />
            </Modal>
        </CardWrapper>
    );
}
