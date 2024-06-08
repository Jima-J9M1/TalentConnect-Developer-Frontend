import { Text, Flex, Group, Stack } from '@mantine/core';

interface Props {
    n: number;
    title: String;
    description: String;
}

const Step = ({ n, title, description }: Props) => {
    const size = 4;
    return (
        <Flex gap={20}>
            <Flex direction="column" align={'center'}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        minHeight: 60,
                        minWidth: 60,
                        maxHeight: 60,
                        maxWidth: 60,
                        position: 'relative',
                        border: '1px solid ',
                        borderColor: 'rgba(33, 149, 243, 1)',
                        borderRadius: '100%'
                    }}
                >
                    <Group
                        w={10}
                        h={10}
                        bg={'white'}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '-10%',
                            transform: 'translateY(-50%)',
                            border: '1px solid ',
                            borderColor: 'rgba(33, 149, 243, 1)',
                            borderRadius: '50%',
                            outline: 'none'
                        }}
                    ></Group>
                    <Group
                        w={10}
                        h={10}
                        bg={'white'}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-10%',
                            transform: 'translateY(-50%)',
                            border: '1px solid ',
                            borderColor: 'rgba(33, 149, 243, 1)',
                            borderRadius: '50%',
                            outline: 'none'
                        }}
                    ></Group>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: 40,
                            minWidth: 40,
                            maxHeight: 40,
                            maxWidth: 40,
                            margin: 'auto',
                            border: '4px solid ',
                            borderColor: 'rgba(33, 149, 243, 1)',
                            borderRadius: '50%'
                        }}
                    >
                        {n}
                    </div>
                </div>

                {n < size ? (
                    <Group
                        style={{
                            minHeight: 'calc((100% - 60px) + 54px)'
                        }}
                        w={3}
                        bg={'rgba(33, 149, 243, 1)'}
                    />
                ) : null}
            </Flex>
            <Stack h={'100%'} align="flex-start" gap={5} pt={15}>
                <Text c={'gray.9'} size={'lg'} style={{ fontWeight: 500 }}>
                    {title}
                </Text>
                <Text c={'gray.7'} size={'sm'} style={{ fontWeight: 400 }}>
                    {description}
                </Text>
            </Stack>
        </Flex>
    );
};

export default Step;
