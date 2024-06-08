import { useDeveloper } from '@/Providers/DeveloperContext';
import { useGetProjectsByDeveloperIdQuery } from '@/lib/redux/api/developer/project';
import { useAppSelector } from '@/lib/redux/hooks';
import { Divider, Modal, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CardWrapper from '../ProfileCenter/CardWrapper';
import { ProfileSectionHeaderProps } from '../ProfileCenter/ProfileSectionsHeader';
import AddProjectForm from './AddProjectForm';
import DisplayProject from './ProjectDisplay';

const AddProjectStep = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { developer, isLoading, isError, error } = useDeveloper();
    const loginState = useAppSelector((state: any) => state.login);

    const { data: projectData, isLoading: isProjectLoading } =
        useGetProjectsByDeveloperIdQuery(developer?.id ? developer.id : '');

    const headerProps: ProfileSectionHeaderProps = {
        title: 'Project',
        add: true,
        onAdd: open,
        onEdit: open
    };

    return (
        <CardWrapper
            headerProps={headerProps}
            noData={projectData?.length == 0}
        >
            <Stack>
                {projectData?.map((project: any, index: number) => (
                    <Stack key={index}>
                        <DisplayProject project={project} />
                        {index < projectData.length - 1 && <Divider />}
                    </Stack>
                ))}
            </Stack>

            <Modal
                size={'lg'}
                opened={opened}
                onClose={close}
                title="Project"
                centered
            >
                <AddProjectForm close={close} />
            </Modal>
        </CardWrapper>
    );
};

export default AddProjectStep;
