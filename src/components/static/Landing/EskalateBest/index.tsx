import { Accordion, Card, Grid, Image, Stack, Text } from '@mantine/core';
import { useRef } from 'react';
import { BiBriefcase } from 'react-icons/bi';
import { FaChevronDown, FaNetworkWired } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { RiSpeakLine } from 'react-icons/ri';
import classes from './EskalateBest.module.css';

const EskalateBest = () => {
    // const [card1, setCard1] = useState(false);
    const itemref1 = useRef<any>(null);
    const itemref2 = useRef<any>(null);
    const itemref3 = useRef<any>(null);
    const itemref4 = useRef<any>(null);
    const itemref11 = useRef<any>(null);
    const itemref22 = useRef<any>(null);
    const itemref33 = useRef<any>(null);
    const itemref44 = useRef<any>(null);

    return (
        <Stack
            px={{ lg: 125, md: 70, base: 0 }}
            py={{ md: 50, base: 30 }}
            style={{}}
            bg="#E9F4FE"
            gap={50}
        >
            <Stack align="center">
                <Text
                    className={classes.firstScreenContainerMoto}
                    style={{
                        lineHeight: '41px',
                        textAlign: 'center'
                    }}
                    px={{ lg: 250, md: 200, base: 60 }}
                    size="36px"
                    fw="700"
                    c="#3F3F46"
                >
                    What Makes the African Developers on Eskalate the Best?
                </Text>
            </Stack>
            <Grid
                px={-10}
                pos={'relative'}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 40
                }}
            >
                <Grid.Col
                    visibleFrom="md"
                    span={{ base: 0, md: 6, lg: 12 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 50
                    }}
                >
                    <Stack gap={20} align="center">
                        <Image
                            src="/images/home/africa Map.png"
                            alt="Africa Map"
                            width={400}
                            height={500}
                            style={{
                                objectFit: 'contain'
                            }}
                        />
                    </Stack>
                    <Stack
                        visibleFrom="lg"
                        pos={{ lg: 'absolute', md: 'relative' }}
                        left={'4%'}
                        top={'10%'}
                    >
                        <Accordion
                            onMouseEnter={() => {
                                itemref11.current && itemref11.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref11.current && itemref11.current.click();
                            }}
                            pos={'absolute'}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'350px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        paddingLeft: 1,
                                        color: '#2195F3',
                                        width: '25px',
                                        height: '25px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref11}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <BiBriefcase
                                                style={{
                                                    color: '#2195F3',
                                                    width: '25px',
                                                    height: '25px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Hands-on Experience
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        pl={10}
                                        style={{
                                            lineHeight: 1.6
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Talent undergoes a one-year project
                                        development phase, applying theoretical
                                        knowledge to real-world applications
                                        Coding person Our talents are equipped
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack
                        visibleFrom="lg"
                        pos={'absolute'}
                        left={'10%'}
                        top={'60%'}
                    >
                        <Accordion
                            onMouseEnter={() => {
                                itemref22.current && itemref22.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref22.current && itemref22.current.click();
                            }}
                            pos={'absolute'}
                            style={{
                                borderRadius: '15px'
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'400px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        color: '#2195F3',
                                        width: '45px',
                                        height: '45px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref22}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            // bg="#2195F3"
                                            p="16px"
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <RiSpeakLine
                                                style={{
                                                    color: '#2195F3',
                                                    width: '28px',
                                                    height: '28px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Communication
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        pl={10}
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Our talent excels in both technical
                                        skills and communication for effective
                                        collaboration.
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack
                        visibleFrom="lg"
                        pos={'absolute'}
                        left={'65%'}
                        top={'19%'}
                    >
                        <Accordion
                            onMouseEnter={() => {
                                itemref33.current && itemref33.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref33.current && itemref33.current.click();
                            }}
                            pos={'absolute'}
                            style={{
                                borderRadius: '15px'
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'350px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        color: '#2195F3',
                                        width: '45px',
                                        height: '45px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref33}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <LiaChalkboardTeacherSolid
                                                style={{
                                                    color: '#2195F3',
                                                    width: '25px',
                                                    height: '25px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Rigorous Training
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        pl={10}
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Our developers undergo a rigorous
                                        one-year training program to develop
                                        robust data structures and algorithms
                                        skills.
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack
                        visibleFrom="lg"
                        pos={'absolute'}
                        left={'68%'}
                        top={'65%'}
                    >
                        <Accordion
                            onMouseEnter={() => {
                                itemref44.current && itemref44.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref44.current && itemref44.current.click();
                            }}
                            pos={'absolute'}
                            style={{
                                borderRadius: '15px'
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'400px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        color: '#2195F3',
                                        width: '45px',
                                        height: '45px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref44}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <FaNetworkWired
                                                style={{
                                                    color: '#2195F3',
                                                    width: '25px',
                                                    height: '25px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Problem-solving Expertise
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        pl={10}
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Our A2SV foundation equips developers
                                        with problem solving skills and empowers
                                        them to address critical issues using
                                        digital solutions.
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                </Grid.Col>
                <Grid.Col
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                    }}
                    hiddenFrom="lg"
                    span={{ md: 6, base: 12, lg: 6 }}
                >
                    <Stack className={classes.container}>
                        <Accordion
                            onMouseEnter={() => {
                                itemref1.current && itemref1.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref1.current && itemref1.current.click();
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'400px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        paddingLeft: 1,
                                        color: '#2195F3',
                                        width: '25px',
                                        height: '25px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref1}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <BiBriefcase
                                                style={{
                                                    color: '#2195F3',
                                                    width: '25px',
                                                    height: '25px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Hands-on Experience
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        pl={10}
                                        style={{
                                            lineHeight: 1.6
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Talent undergoes a one-year project
                                        development phase, applying theoretical
                                        knowledge to real-world applications
                                        Coding person Our talents are equipped
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack className={classes.container}>
                        <Accordion
                            onMouseEnter={() => {
                                itemref2.current && itemref2.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref2.current && itemref2.current.click();
                            }}
                            style={{
                                borderRadius: '15px'
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'400px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        color: '#2195F3',
                                        width: '45px',
                                        height: '45px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref2}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            // bg="#2195F3"
                                            p="16px"
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <RiSpeakLine
                                                style={{
                                                    color: '#2195F3',
                                                    width: '28px',
                                                    height: '28px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Strong Communication
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Our talent excels in both technical
                                        skills and communication for effective
                                        collaboration.
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack className={classes.container}>
                        <Accordion
                            onMouseEnter={() => {
                                itemref3.current && itemref3.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref3.current && itemref3.current.click();
                            }}
                            style={{
                                borderRadius: '15px'
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'400px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        color: '#2195F3',
                                        width: '45px',
                                        height: '45px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref3}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <LiaChalkboardTeacherSolid
                                                style={{
                                                    color: '#2195F3',
                                                    width: '25px',
                                                    height: '25px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Rigorous Training
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Our developers undergo a rigorous
                                        one-year training program to develop
                                        robust data structures and algorithms
                                        skills.
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack className={classes.container}>
                        <Accordion
                            onMouseEnter={() => {
                                itemref4.current && itemref4.current.click();
                            }}
                            onMouseLeave={() => {
                                itemref4.current && itemref4.current.click();
                            }}
                            style={{
                                borderRadius: '15px'
                            }}
                            variant="separated"
                            radius={15}
                            transitionDuration={500}
                            w={'400px'}
                            classNames={{ chevron: classes.chevron }}
                            chevron={
                                <FaChevronDown
                                    style={{
                                        color: '#2195F3',
                                        width: '45px',
                                        height: '45px'
                                    }}
                                />
                            }
                        >
                            <Accordion.Item value="Problem-solving Expertise">
                                <Accordion.Control
                                    ref={itemref4}
                                    bg={'white'}
                                    px={20}
                                    py={17}
                                    style={{
                                        borderTopLeftRadius: '15px',
                                        borderTopRightRadius: '15px',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                    icon={
                                        <Card
                                            style={{
                                                border: 'solid',
                                                borderWidth: '0.1px',
                                                borderRadius: '50%',
                                                borderColor: '#2195F3',
                                                background: '#E9F4FE'
                                            }}
                                        >
                                            <FaNetworkWired
                                                style={{
                                                    color: '#2195F3',
                                                    width: '25px',
                                                    height: '25px'
                                                }}
                                            />
                                        </Card>
                                    }
                                >
                                    <Text
                                        pr={15}
                                        size="18px"
                                        fw={{ base: 'normal', md: '700' }}
                                        c="#262626"
                                        style={{
                                            lineHeight: 1.5,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Problem-solving Expertise
                                    </Text>
                                </Accordion.Control>
                                <Accordion.Panel
                                    bg={'white'}
                                    w={'100%'}
                                    px={10}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        borderBottomLeftRadius: '15px',
                                        borderBottomRightRadius: '15px'
                                    }}
                                >
                                    <Text
                                        style={{
                                            lineHeight: 1.5
                                        }}
                                        size="xs"
                                        fw="400"
                                        c="#3F3F46"
                                    >
                                        Our A2SV foundation equips developers
                                        with problem solving skills and empowers
                                        them to address critical issues using
                                        digital solutions.
                                    </Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Stack>
    );
};
export default EskalateBest;
