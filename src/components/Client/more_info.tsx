'use client';

import { Button, Flex, Grid, Group, Text, TextInput } from '@mantine/core';
import { BiCheck } from 'react-icons/bi';
import SignupStyle from './Signup.module.css';

const MoreInfo = ({ form, skipStep, nextStep }: any) => {
    const commitment = form.getInputProps('commitment').value;
    const startDate = form.getInputProps('startDate').value;
    const howLong = form.getInputProps('howLong').value;
    const validate = () => {
        nextStep();
    };
    return (
        <Group className={SignupStyle.main_info}>
            <Text fw={700} className={SignupStyle.signupText}>
                Connecting You With Skilled Talent!
            </Text>
            <Grid>
                <Grid.Col style={{}}></Grid.Col>
                <Text size="md" ps="10px">
                    Let us know your time requirement to find the perfect match
                </Text>
                <Grid.Col mt={'lg'} style={{}}>
                    <Text fw={600} className={'flex gap-3 flex-wrap'}>
                        What level of time commitment will you require?
                    </Text>
                    <Flex
                        // gap="md"
                        mt={'sm'}
                        className={SignupStyle.wrapper}
                        // justify="flex-start"
                        // align="flex-start"
                        // direction="row"
                        // justifyContent="flex-start"
                        // alignItems="flex-start"
                        // templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                        // style={{
                        //     overflowWrap: "break-word"
                        // }}
                    >
                        <Button
                            bg={commitment != 'Full Time' ? '#e4f4fd' : ''}
                            onClick={() => {
                                form.setFieldValue('commitment', 'Full Time');
                            }}
                            variant={`${commitment != 'Full Time' && 'outline'}`}
                            radius="xl"
                            rightSection={
                                commitment == 'Full Time' && (
                                    <BiCheck style={{ fontSize: '20px' }} />
                                )
                            }
                        >
                            Full Time
                        </Button>
                        <Button
                            bg={commitment != 'Part Time' ? '#e4f4fd' : ''}
                            onClick={() => {
                                form.setFieldValue('commitment', 'Part Time');
                            }}
                            variant={`${commitment != 'Part Time' && 'outline'}`}
                            radius="xl"
                            rightSection={
                                commitment == 'Part Time' && (
                                    <BiCheck style={{ fontSize: '20px' }} />
                                )
                            }
                        >
                            Part Time
                        </Button>
                        <Button
                            bg={
                                commitment != 'I will Decide latter'
                                    ? '#e4f4fd'
                                    : ''
                            }
                            onClick={() => {
                                form.setFieldValue(
                                    'commitment',
                                    'I will Decide latter'
                                );
                            }}
                            variant={`${commitment != 'I will Decide latter' && 'outline'}`}
                            radius="xl"
                            rightSection={
                                commitment == 'I will Decide latter' && (
                                    <BiCheck style={{ fontSize: '20px' }} />
                                )
                            }
                        >
                            I will Decide latter
                        </Button>
                    </Flex>
                    <Text mt={'lg'} fw={600}>
                        How long do you expect this engagement to last?
                    </Text>
                    <Flex
                        gap="md"
                        mt={'sm'}
                        justify="flex-start"
                        align="flex-start"
                        direction="row"
                        style={{
                            flexWrap: 'wrap'
                        }}
                    >
                        <Button
                            bg={howLong != '1 Month' ? '#e4f4fd' : ''}
                            onClick={() => {
                                form.setFieldValue('howLong', '1 Month');
                            }}
                            variant={`${howLong != '1 Month' && 'outline'}`}
                            radius="xl"
                            rightSection={
                                howLong == '1 Month' && (
                                    <BiCheck style={{ fontSize: '20px' }} />
                                )
                            }
                        >
                            1 Month
                        </Button>
                        <Button
                            bg={howLong != '3 - 6 Months' ? '#e4f4fd' : ''}
                            onClick={() => {
                                form.setFieldValue('howLong', '3 - 6 Months');
                            }}
                            variant={`${howLong != '3 - 6 Months' && 'outline'}`}
                            radius="xl"
                            rightSection={
                                howLong == '3 - 6 Months' && (
                                    <BiCheck style={{ fontSize: '20px' }} />
                                )
                            }
                        >
                            3 - 6 Months
                        </Button>
                        <Button
                            bg={howLong != '6  Month +' ? '#e4f4fd' : ''}
                            onClick={() => {
                                form.setFieldValue('howLong', '6  Month +');
                            }}
                            variant={`${howLong != '6  Month +' && 'outline'}`}
                            radius="xl"
                            rightSection={
                                howLong == '6  Month +' && (
                                    <BiCheck style={{ fontSize: '20px' }} />
                                )
                            }
                        >
                            6 Month +
                        </Button>
                    </Flex>
                    <Text mt={'xl'}>When do you want to start ?</Text>
                    <TextInput
                        value={startDate}
                        {...form.getInputProps('startDate')}
                        valueFormat="DD/MM/YYYY HH:mm:ss"
                        label=""
                        placeholder="Date input"
                        type="date"
                        mt={'md'}
                        style={{
                            width: 'fit-content'
                        }}
                    />
                </Grid.Col>
                <Grid.Col
                    mt={'xl'}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Button
                        variant="outline"
                        onClick={skipStep}
                        className={SignupStyle.applyBtnSkip}
                    >
                        Previous
                    </Button>
                    <Button onClick={validate} className={SignupStyle.applyBtn}>
                        Next
                    </Button>
                </Grid.Col>
            </Grid>
        </Group>
    );
};

export default MoreInfo;
