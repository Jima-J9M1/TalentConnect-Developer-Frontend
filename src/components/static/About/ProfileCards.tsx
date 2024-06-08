import { Avatar, Card, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { IoLogoLinkedin } from 'react-icons/io';

interface Props {
    img: string;
    name: string;
    title: string;
    desc: string;
    linkedin: string;
}

const ProfileCards = ({ img, name, title, desc, linkedin }: Props) => {
    return (
        <Card
            pt={40}
            pb={40}
            mx={{ base: '10%', md: '0', sm: '10%' }}
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            padding="lg"
            radius="md"
            withBorder={true}
        >
            <Stack align="center">
                <Avatar src={img} alt={name} size={100} />
            </Stack>
            <Stack gap={8}>
                <Text
                    ta="center"
                    c={'gray.9'}
                    style={{
                        fontWeight: 600
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        fontWeight: 500,
                        color: 'rgba(35, 166, 240, 1)',
                        fontSize: '12px'
                    }}
                    ta="center"
                >
                    {title}
                </Text>
                <Text
                    ta="center"
                    c={'gray.8'}
                    style={{
                        fontWeight: 400,

                        fontSize: '12px'
                    }}
                >
                    {desc}
                </Text>
            </Stack>

            <Stack align="center" style={{ justifySelf: 'flex-end' }} mt={4}>
                <Link href={linkedin} target="_blank">
                    <IoLogoLinkedin
                        style={{
                            width: '30px',
                            height: '30px',
                            color: 'black'
                        }}
                    />
                </Link>
            </Stack>
        </Card>
    );
};

export default ProfileCards;
