import { Badge, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
import { TbBriefcase2 } from 'react-icons/tb';
import { ETFlag } from 'mantine-flagpack';
import '../Slider.css';
import { useRouter } from 'next/navigation';

interface Props {
    Developer: any;
}

const DeveloperCard = ({ Developer }: Props) => {
    const router = useRouter();
    return (
        //<Link
        //    href={`developer/${Developer?.id}`}
        //    style={{ textDecoration: 'none' }}
        //>
        <div
            onClick={() => router.push(`/developer/${Developer?.id}`)}
            style={{
                cursor: 'pointer',
                width: '309px',
                background: '#FFFFFF',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 10
            }}
        >
            <div>
                <Image
                    style={{
                        borderRadius: 20,
                        padding: 10,
                        objectFit: 'cover'
                    }}
                    src={Developer?.profilePictureUrl}
                    alt=""
                    width={300}
                    height={200}
                ></Image>
            </div>
            <div
                style={{
                    paddingLeft: 7,
                    paddingRight: 7,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Text fw={'500'} c={'gray.8'}>
                    {Developer?.user?.fullName}
                </Text>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 3,
                        alignItems: 'center'
                    }}
                >
                    <ETFlag w={24} />
                    <Text
                        size="12px"
                        c={'gray.6'}
                        style={{
                            fontSize: 12
                        }}
                    >
                        {Developer?.user?.country}
                    </Text>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8,
                    paddingLeft: 10,
                    alignItems: 'center',
                    alignContent: 'center'
                }}
            >
                <FaCode
                    style={{
                        width: '16px',
                        height: '16px',
                        color: '#3F3F46'
                    }}
                />
                <Text size="14px" c={'gray.8'}>
                    {Developer?.title}
                </Text>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8,
                    paddingLeft: 10,
                    alignItems: 'center',
                    alignContent: 'center'
                }}
            >
                <TbBriefcase2
                    style={{
                        width: '16px',
                        height: '16px',
                        color: '#3F3F46'
                    }}
                />
                <Text size="14px" c={'gray.8'}>
                    {Developer?.yearsOfExperience}
                    {' Years of Experience'}
                </Text>
            </div>
            <div
                style={{
                    paddingLeft: 10,
                    paddingRight: 10
                }}
            >
                <Flex
                    wrap="wrap"
                    gap={8}
                    style={{
                        borderTop: 'solid',
                        borderTopWidth: '0.2px',
                        borderTopColor: '#D4D4D8'
                    }}
                    py="14px"
                >
                    {Developer?.skills.map((skill: any, index: any) => (
                        <>
                            {index < 5 && (
                                <Badge variant="default" fw={'400'}>
                                    {Developer?.skills[index]?.skill?.name}
                                </Badge>
                            )}
                        </>
                    ))}
                </Flex>
            </div>
        </div>
        //</Link>
    );
};

export default DeveloperCard;
