import { AspectRatio, Grid, Stack, Text } from '@mantine/core';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

interface Props {
    url: string;
    name: string;
    message: string;
    position: string;
}

const TestimonyCard = ({ url, name, position, message }: Props) => {
    return (
        <Grid
            w={'100%'}
            p={{ base: 'xl', md: 'xs' }}
            gutter={{ base: 'xl', md: 128 }}
        >
            <Grid.Col span={{ base: 12, md: 6 }}>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={url}
                        title="Eskalate - V1"
                        style={{ border: 'none', borderRadius: '15px' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
            </Grid.Col>
            <Grid.Col
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
                span={{ base: 12, md: 6 }}
            >
                <Stack gap={8}>
                    <BiSolidQuoteAltLeft color="#444444" size={35} />
                    <Stack>
                        <Text
                            style={{
                                lineHeight: 1.5,
                                fontStyle: 'italic'
                            }}
                            size="20px"
                            w="medium"
                            c="gray"
                            inline
                        >
                            {message}
                        </Text>
                        <Stack gap={-1}>
                            <Text
                                style={{
                                    lineHeight: 1.5,
                                    fontWeight: 'bold'
                                }}
                                size="20px"
                                w="medium"
                                c="#444444"
                                inline
                            >
                                {name}
                            </Text>
                            <Text
                                style={{
                                    lineHeight: 1.5
                                }}
                                size="17px"
                                w="medium"
                                c="gray"
                                inline
                            >
                                {position}
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid.Col>
        </Grid>
    );
};

export default TestimonyCard;
