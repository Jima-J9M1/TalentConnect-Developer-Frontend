'use client';
import { Center, Group, Text } from '@mantine/core';

export default function VerifyDeveloperPage() {
    return (
        <Center w={'100%'}>
            <Group w={400} bg={'blue.1'} p={30} style={{ borderRadius: 8 }}>
                <Text size="xl" c={'blue.7'} fw={500}>
                    Verify your email
                </Text>
                <Text>
                    We have sent you an email with a verification link. Please
                    check your inbox and click the link to verify your email.
                </Text>
            </Group>
        </Center>
    );
}
