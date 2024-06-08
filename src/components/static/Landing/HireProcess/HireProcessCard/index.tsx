import { Card, Stack, Text } from '@mantine/core';

const HireProcessCard = ({
    num,
    title,
    description
}: {
    num?: number;
    title: string;
    description: string;
}) => {
    return (
        <Card
            style={{
                position: 'relative',
                borderRadius: '10px',
                padding: '20px',
                background: 'none',
                ...(num
                    ? {
                          border: '1px solid var(--mantine-primary-color-filled)',
                          height: '182px',
                          padding: '32px 20px'
                      }
                    : {})
            }}
            w={{ base: '100%', lg: '358px' }}
        >
            <Text
                fw={900}
                c={'gray.8'}
                size="100px"
                style={{
                    position: 'absolute',
                    right: 32,
                    top: 0,
                    opacity: '5%'
                }}
            >
                {num}
            </Text>
            <Stack gap={10}>
                <Text
                    size="20px"
                    fw="bold"
                    c="#52525B"
                    style={{
                        lineHeight: 1.5
                    }}
                >
                    {title}
                </Text>
                <Text
                    size="16px"
                    c="#52525B"
                    style={{
                        lineHeight: 1.5
                    }}
                >
                    {description}
                </Text>
            </Stack>
        </Card>
    );
};

export default HireProcessCard;
