'use client';

import { theme } from '@/theme';
import { MantineProvider } from '@mantine/core';

/**
 * This is a theme provider
 * @param {React.ReactNode} children
 */

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider
            theme={theme}
            withGlobalClasses
            //defaultColorScheme="dark"
        >
            {children}
        </MantineProvider>
    );
}
