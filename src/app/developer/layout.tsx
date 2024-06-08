'use client';
import { DeveloperProvider } from '@/Providers/DeveloperContext';
import Header from '@/components/mainLayout/Header';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function ProfileLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [opened, { toggle }] = useDisclosure(true);
    return (
        <DeveloperProvider>
            <AppShell
                header={{ height: 80 }}
                navbar={{
                    width: 0,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened }
                }}
                padding="md"
                bg={'gray.1'}
            >
                <AppShell.Header>
                    <Header />
                </AppShell.Header>

                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </DeveloperProvider>
    );
}
