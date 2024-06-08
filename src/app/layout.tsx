import type { Metadata } from 'next';
import './globals.css';
import '../styles/index.css';
import { ColorSchemeScript, Container } from '@mantine/core';
import { ThemeProvider } from '@/Providers/ThemeProvider';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import 'mantine-flagpack/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import ReduxProvider from '@/Providers/ReduxProvider';
// import './dotenv/config'
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    // SEO Metadata
    title: 'Hire Top African Tech Talent | Remote Developers - Eskalate',
    description:
        'Connect with a diverse pool of skilled remote developers from Africa. Eskalate provides access to top talent at competitive rates.',
    keywords: [
        'African tech talent',
        'remote developers',
        'software development',
        'IT outsourcing',
        'Africa',
        'diversity in tech'
    ],

    // Social Sharing Metadata (Open Graph)
    openGraph: {
        title: 'Eskalate: Hire Top African Tech Talent',
        description:
            'Build your tech team with skilled & diverse remote developers from Africa. Access top talent at competitive rates.',
        images: ['https://www.eskalate.io/Logo.svg'] // Replace with actual image URL
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <ColorSchemeScript />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>

            <Script
                async
                id="google-analytics" // Add id attribute
                src="https://www.googletagmanager.com/gtag/js?id=G-WH4CZ6HFN1"
            />
            <Script
                id="google-analytics-script"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WH4CZ6HFN1');
                    `
                }}
            />
            <ThemeProvider>
                <body className={poppins.className}>
                    <NextTopLoader showSpinner={true} />
                    <Container my={0} p={0} maw={'2560px'}>
                        <ReduxProvider>{children}</ReduxProvider>
                    </Container>
                </body>
            </ThemeProvider>
        </html>
    );
}
