import { useDeveloper } from '@/Providers/DeveloperContext';
import { Group, Text } from '@mantine/core';
import {
    IconChevronDown,
    IconChevronUp,
    IconPencil,
    IconPlus,
    IconUpload
} from '@tabler/icons-react';
import styles from './ProfileSectionHeader.module.css';

export interface ProfileSectionHeaderProps {
    title: string;
    add?: boolean;
    edit?: boolean;
    onAdd?: () => void;
    onEdit?: () => void;
    isOwner?: boolean;
    opened?: boolean;
    toggle?: () => void;
    upload?: boolean;
}

export default function ProfileSectionsHeader({
    title,
    add,
    edit,
    onAdd,
    onEdit,
    opened,
    toggle,
    upload
}: ProfileSectionHeaderProps) {
    const { isOwner, isView } = useDeveloper();
    return (
        <Group
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: !isOwner || isView ? 'pointer' : 'default'
            }}
            px={'lg'}
            onClick={toggle}
        >
            <Text pos={'relative'} size="lg">
                {title}
                <span className={styles.experienceTitle__underline}>
                    <span
                        className={styles.experienceTitle__underlineBroken}
                    ></span>
                </span>
            </Text>

            {upload && isOwner && !isView && (
                <IconUpload
                    style={{ cursor: 'pointer' }}
                    size={'18px'}
                    color="var(--mantine-primary-color-filled)"
                    onClick={add ? onAdd : onEdit}
                />
            )}
            {!upload && add && isOwner && !isView && (
                <IconPlus
                    style={{ cursor: 'pointer' }}
                    size={'18px'}
                    color="var(--mantine-primary-color-filled)"
                    onClick={onAdd}
                />
            )}
            {!upload && edit && isOwner && !isView && (
                <IconPencil
                    style={{ cursor: 'pointer' }}
                    size={'18px'}
                    color="var(--mantine-color-gray-7)"
                    onClick={onEdit}
                />
            )}
            {(!isOwner || (isOwner && isView)) && !opened && (
                <IconChevronDown
                    style={{ cursor: 'pointer' }}
                    size={'24px'}
                    color="var(--mantine-primary-color-filled)"
                    onClick={toggle}
                />
            )}
            {(!isOwner || (isOwner && isView)) && opened && (
                <IconChevronUp
                    style={{ cursor: 'pointer' }}
                    size={'24px'}
                    color="var(--mantine-primary-color-filled)"
                    onClick={toggle}
                />
            )}
        </Group>
    );
}
