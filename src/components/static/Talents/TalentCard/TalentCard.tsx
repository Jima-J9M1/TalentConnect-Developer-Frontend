import { isClientSide } from '@/utils/talentsSave';
import { AspectRatio, Avatar, Badge, Card, Flex, Text } from '@mantine/core';
import { ETFlag, GHFlag } from 'mantine-flagpack';
import Link from 'next/link';
import { IoCodeSlash } from 'react-icons/io5';
import { TbBriefcase2 } from 'react-icons/tb';
import style from './talentCard.module.css';

interface TalentCardProps {
    talent: any;
}

const TalentCard = ({ talent }: TalentCardProps) => {
    // talent.profilePictureUrl ? (
    //     console.log("TalentCard -> talent", talent)
    // ) : null;

    // const blur = '/e_blur:10000';
    // const blurredUrl = talent.profilePictureUrl
    //     ? talent.profilePictureUrl.replace('/upload', `/upload/${blur}`)
    //     : '';

    return (
        <Link
            href={`developer/${talent?.id}`}
            onClick={() => {
                if (isClientSide()) {
                    const clicks = localStorage.getItem('talentClicks');
                    localStorage.setItem(
                        'talentClicks',
                        `${parseInt(clicks as string) + 1}`
                    );
                }
            }}
            style={{
                cursor: 'pointer',
                textDecoration: 'none'
            }}
        >
            <Card
                radius="lg"
                py={24}
                px={32}
                h={'100%'}
                miw={{ base: '290px' }}
                w={'100%'}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '5px'
                }}
                className={style.card}
            >
                <Flex
                    justify="space-between"
                    align="start"
                    direction="row"
                    wrap="wrap"
                    gap="sm"
                >
                    <Flex direction="row" wrap="wrap" gap="sm">
                        <Avatar
                            variant="filled"
                            radius="50%"
                            color="rgba(209, 209, 209, 1)"
                            size="xl"
                            src={talent?.profilePictureUrl}
                        />
                        {/* <AspectRatio w={'90px'} h={"90px"} mx={'auto'} ratio={20 / 1} >

                            <Overlay radius={'50%'} color="#000" backgroundOpacity={0} blur={4} />
                        </AspectRatio> */}

                        <Flex direction="column" wrap="wrap" gap="4px">
                            <AspectRatio w={'90px'} h={'20px'} ratio={20 / 1}>
                                <Text size="md" c={'#3F3F46'} fw={'600'}>
                                    {talent?.user?.fullName.split(' ')[0]}
                                </Text>

                                {/* <Overlay
                                    color="#000"
                                    backgroundOpacity={0}
                                    blur={3}
                                /> */}
                            </AspectRatio>
                            <Flex
                                direction={'row'}
                                align={'center'}
                                gap={'5px'}
                                c={'#3F3F46'}
                                fw={'400'}
                            >
                                <IoCodeSlash />
                                {talent?.title}
                            </Flex>
                            <Flex
                                direction={'row'}
                                justify={'space-between'}
                                align={'center'}
                                gap={'5px'}
                                c={'#3F3F46'}
                                fw={'400'}
                            >
                                <TbBriefcase2 />
                                {talent?.yearsOfExperience} years of Experience
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex align={'center'} direction="row" wrap="wrap" gap="xs">
                        {talent?.user?.country === 'Ghana' ? (
                            <GHFlag size={'25px'} />
                        ) : (
                            <ETFlag size={'25px'} />
                        )}
                        <Text c={'#71717A'}>{talent?.user?.country}</Text>
                    </Flex>
                    {/* <Text size="md" c={'#71717A'} fw={'400'}>
                        {talent.profileOverview &&
                            (talent.profileOverview.length > 170 ? (
                                <>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: `${talent?.profileOverview.slice(0, 150)}`
                                        }}
                                    ></span>
                                </>
                            ) : (
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: talent?.profileOverview
                                    }}
                                ></span>
                            ))}
                    </Text> */}
                </Flex>

                <Flex direction="column" wrap="wrap" gap="sm">
                    <hr
                        style={{
                            borderColor: '#D4D4D8',
                            borderWidth: '1px',
                            width: '100%',
                            opacity: '0.2'
                        }}
                    />

                    <Flex
                        justify="start"
                        align="center"
                        direction="row"
                        wrap="wrap"
                        gap="xs"
                    >
                        {talent?.skills?.map(
                            (skill: any, index: number) =>
                                index <= 3 && (
                                    <Badge
                                        key={index}
                                        style={{
                                            color: '#52525B',
                                            border: '2px solid #A6D5FA',
                                            backgroundColor: 'white',
                                            fontWeight: '400'
                                        }}
                                        size="lg"
                                    >
                                        {skill.skill.name}
                                    </Badge>
                                )
                        )}
                    </Flex>
                </Flex>
            </Card>
        </Link>
    );
};

export default TalentCard;
