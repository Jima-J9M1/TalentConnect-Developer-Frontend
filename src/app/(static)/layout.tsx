'use client';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/index';
import MainFooter from '@/components/mainLayout/MainFooter';
import MainHeader from '@/components/mainLayout/MainHeader';
import { AppShell } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Footer from '@/components/mainLayout/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const currentActive =
        pathname === '/'
            ? 'Discover Talent'
            : pathname === '/talent'
              ? 'Discover Talent'
              : 'About us';

    return (
        <AppShell header={{ height: 70 }}>
            <MainHeader />
            <AppShell.Main mt={currentActive == 'Discover Talent' ? -70 : 0}>
                <Provider store={store}>{children}</Provider>
            </AppShell.Main>
            <MainFooter />
        </AppShell>
    );
}
