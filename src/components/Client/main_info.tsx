import { getIcons } from '@/country_codes';
import {
    Box,
    Button,
    Grid,
    Group,
    Image,
    SelectProps,
    Text,
    TextInput
} from '@mantine/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SignupStyle from './Signup.module.css';

const MainInfo = ({ form, started, nextStep, isLoading, error }: any) => {
    const iconProps = {
        stroke: 1.5,
        color: 'currentColor',
        opacity: 0.6,
        size: 18
    };

    // const icons: Record<string, React.ReactNode> = {
    //     left: <IconAlignLeft {...iconProps} />,
    //     center: <IconAlignCenter {...iconProps} />,
    //     right: <IconAlignRight {...iconProps} />,
    //     justify: <IconAlignJustified {...iconProps} />
    // };

    const renderSelectOption: SelectProps['renderOption'] = ({
        option,
        checked
    }) => (
        <Group flex="1" gap="xs">
            {/* {icons[option.value]} */}
            {option.label}
            <Image src={getIcons()[0]} alt="Icon" w={30} />
            {/* {checked && (
                    <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />
                )} */}
        </Group>
    );

    return (
        <Group className={SignupStyle.main_info}>
            <Text fw={500} className={SignupStyle.signupText}>
                Connecting You With Skilled Talent!
            </Text>
            <Text size="lg" style={{ width: '100%' }}>
                Enter Your details to schedule a call
            </Text>

            <Grid gutter={20}>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <TextInput
                        size="md"
                        label="Full name"
                        withAsterisk
                        mt="md"
                        placeholder="Full name"
                        {...form.getInputProps('fullName')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <TextInput
                        size="md"
                        label="Company Name"
                        withAsterisk
                        placeholder="Company Name"
                        mt="md"
                        {...form.getInputProps('companyName')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <TextInput
                        size="md"
                        label="Email"
                        placeholder="Email"
                        withAsterisk
                        {...form.getInputProps('email')}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Box style={{ marginBottom: '5px' }}>
                        Phone Number
                        <span style={{ color: 'red' }}> *</span>
                    </Box>
                    <PhoneInput
                        country={'us'}
                        isValid={(value, country) => {
                            if (started == true && value.length < 5) {
                                return false;
                            }
                            return true;
                        }}
                        containerStyle={{ width: '100%', border: 'none' }}
                        inputStyle={{
                            width: '100%'
                        }}
                        onChange={(phone) => {
                            form.setFieldValue('phoneNumber', phone);
                        }}
                        placeholder="Phone Number"
                    />
                    {started &&
                        form.getInputProps('phoneNumber').value.length < 5 && (
                            <Text
                                style={{ fontSize: '13px' }}
                                mt="1px"
                                color="red"
                            >
                                invalid phone number
                            </Text>
                        )}
                </Grid.Col>
                {error && (
                    <Grid.Col span={{ base: 12, lg: 12 }}>
                        <Text
                            style={{
                                color: 'red'
                            }}
                        >
                            {(error as any).data?.message}
                        </Text>
                    </Grid.Col>
                )}
                <Grid.Col
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <Button
                        size="md"
                        className={SignupStyle.applyBtn}
                        // type="submit"
                        loading={isLoading}
                        onClick={nextStep}
                    >
                        Book a call
                    </Button>
                </Grid.Col>
            </Grid>
        </Group>
    );
};

export default MainInfo;
