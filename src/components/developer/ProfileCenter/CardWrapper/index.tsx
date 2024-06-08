import { useDeveloper } from '@/Providers/DeveloperContext';
import { Box, Card } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ProfileSectionsHeader, {
    ProfileSectionHeaderProps
} from '../ProfileSectionsHeader';

interface Props {
    children: React.ReactNode;
    headerProps: ProfileSectionHeaderProps;
    noData?: boolean;
    isOwner?: boolean;
    opened?: boolean;
    toggle?: () => void;
}

export default function CardWrapper({ children, headerProps, noData }: Props) {
    const [opened, { toggle }] = useDisclosure(true);
    const { isOwner, isView } = useDeveloper();
    return (
        <Card
            radius="md"
            shadow="none"
            p={16}
            h={'fit-content'}
            w={'100%'}
            // if isOwner is true add style else make the style empty
            style={
                isOwner
                    ? {}
                    : {
                          margin: '0',
                          cursor: 'pointer',
                          border: 'none',
                          borderRadius: '0'
                      }
            }
        >
            <ProfileSectionsHeader
                {...headerProps}
                opened={opened}
                toggle={toggle}
            />
            {!noData && (!isOwner || (isOwner && isView)) && opened && (
                <Box p={24}>{children}</Box>
            )}
            {!noData && isOwner && !isView && <Box p={24}>{children}</Box>}

            {noData && children}
        </Card>
    );
    //    :(
    //    <Accordion.Item p={16} value={new Date().toISOString()} key={'hello'}>
    //        {/*<ProfileSectionsHeader {...headerProps} />*/}
    //        {/*{!noData && <Accordion.Panel p={24}>{children}</Accordion.Panel>}*/}
    //        <Accordion.Control>
    //            <ProfileSectionsHeader {...headerProps} />
    //        </Accordion.Control>
    //        <Accordion.Panel>{noData && children}</Accordion.Panel>
    //    </Accordion.Item>
    //);
}
