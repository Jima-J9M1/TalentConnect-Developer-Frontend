import { Button, Center, Grid, Group } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SignupStyle from './Signup.module.css';
const Success = () => {
    const router = useRouter();
    return (
        <Group className={SignupStyle.main_info}>
            <Grid columns={24}>
                <Grid.Col
                    span={{ base: 24, sm: 24, lg: 4 }}
                    style={{ display: 'flex' }}
                >
                    <Image
                        src="/brian.jpg"
                        alt="abcd"
                        width={100}
                        height={100}
                        style={{
                            borderRadius: '100px',
                            margin: 'auto'
                        }}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 24, sm: 24, lg: 20 }}>
                    <Grid columns={12} pt={'15px'}>
                        <Grid.Col
                            span={12}
                            style={{
                                fontSize: '25px',
                                fontWeight: '500'
                            }}
                            color="bllue"
                            className={SignupStyle.centerOnMobile}
                        >
                            Thank You for Choosing Us!
                        </Grid.Col>
                        <Grid.Col
                            span={12}
                            className={SignupStyle.centerOnMobile}
                        >
                            Brian Bell, our Head of Business, will be reaching
                            out to finalize your call scheduling!
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
            <Grid.Col span={12}>
                <Center>
                    <Button
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Continue
                    </Button>
                </Center>
            </Grid.Col>
        </Group>
    );
};

export default Success;
