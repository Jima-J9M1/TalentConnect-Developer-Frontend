import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { unsetUser } from '@/lib/redux/slices/loginSlice';
import { Menu } from '@mantine/core';
import { IconLogout2, IconSettings, IconUserCircle } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function DropDownMenu() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const loginState = useAppSelector((state: any) => state.login);
    const handleLogout = () => {
        dispatch(unsetUser());
        router.push('/signin');
    };

    return (
        <Menu.Dropdown>
            <Menu.Item
                onClick={() => router.push(loginState?.developerId)}
                leftSection={
                    <IconUserCircle style={{ width: 16, height: 16 }} />
                }
            >
                Profile
            </Menu.Item>
            {/*<Menu.Item
                onClick={() => router.push('jobs')}
                leftSection={
                    <IconBriefcase
                        style={{ width: rem(14), height: rem(14) }}
                    />
                }
            >
                Jobs
            </Menu.Item>*/}
            <Menu.Item
                onClick={() => router.push('/developer/settings')}
                leftSection={<IconSettings style={{ width: 16, height: 16 }} />}
            >
                Account Settings
            </Menu.Item>
            <Menu.Item
                onClick={handleLogout}
                leftSection={<IconLogout2 style={{ width: 16, height: 16 }} />}
            >
                Logout
            </Menu.Item>
        </Menu.Dropdown>
    );
}
