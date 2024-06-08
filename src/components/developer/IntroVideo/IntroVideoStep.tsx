import { useDeveloper } from '@/Providers/DeveloperContext';
import { AspectRatio, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CardWrapper from '../ProfileCenter/CardWrapper';
import { ProfileSectionHeaderProps } from '../ProfileCenter/ProfileSectionsHeader';
import IntroVideoForm from './IntroVideoForm';

export default function IntroVideoStep() {
    const [opened, { open, close }] = useDisclosure(false);
    const { developer, isLoading } = useDeveloper();
    const headerProps: ProfileSectionHeaderProps = {
        title: 'Intro video',
        add: !developer?.introVideoUrl,
        edit: !!developer?.introVideoUrl,
        onAdd: open,
        onEdit: open,
        upload: true
    };

    return (
        <CardWrapper
            headerProps={headerProps}
            noData={!developer?.introVideoUrl}
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
            <Modal
                opened={opened}
                onClose={close}
                title="Add Intro Video"
                centered
                size={'lg'}
            >
                <IntroVideoForm
                    video={developer?.introVideoUrl}
                    close={close}
                />
            </Modal>
        </CardWrapper>
    );
}
