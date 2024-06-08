import {
    Button,
    Modal,
    NumberInput,
    PasswordInput,
    Select,
    TextInput,
    createTheme
} from '@mantine/core';

export const theme = createTheme({
    fontSizes: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px'
    },
    components: {
        Modal: Modal.extend({
            defaultProps: {
                padding: 32,
                radius: 8
            }
        }),
        TextInput: TextInput.extend({
            styles: {
                label: {
                    marginBottom: '5px'
                }
            },
            defaultProps: {
                size: 'md'
            }
        }),
        NumberInput: NumberInput.extend({
            styles: {
                label: {
                    marginBottom: '5px'
                }
            },
            defaultProps: {
                size: 'md'
            }
        }),
        PasswordInput: PasswordInput.extend({
            styles: {
                label: {
                    marginBottom: '5px'
                }
            },
            defaultProps: {
                size: 'md'
            }
        }),
        Select: Select.extend({
            styles: {
                label: {
                    marginBottom: '5px'
                }
            },
            defaultProps: {
                size: 'md',
                // variant: 'filled',
                searchable: true
            }
        }),
        MultiSelect: Select.extend({
            styles: {
                label: {
                    marginBottom: '5px'
                }
            },
            defaultProps: {
                size: 'md',
                // variant: 'filled',
                searchable: true
            }
        }),
        Button: Button.extend({
            defaultProps: {
                size: 'md'
                // variant: 'filled',
                // searchable: true
            }
        })
    }
});
