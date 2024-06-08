import { Center, Combobox, Input, InputBase, useCombobox } from '@mantine/core';

interface DataType {
    data: any[];
    label: React.ReactNode;
    value?: any;
    inputProps: any;
    setValue: (value: any) => void;
}

export function CustomSelect({
    data,
    label,
    inputProps,
    setValue,
    value
}: DataType) {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption()
    });

    const selectedOption = data.find((item) => item.value === value);

    const options = data.map(({ label, value }: any) => (
        <Combobox.Option value={value} key={value}>
            {label}
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
            }}
            variant="filled"
            size="lg"
        >
            <Combobox.Target>
                <InputBase
                    variant="filled"
                    size="lg"
                    component="button"
                    label={label}
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                    {...inputProps}
                >
                    {selectedOption ? (
                        <Center style={{ justifyContent: 'flex-start' }}>
                            {selectedOption.label}
                        </Center>
                    ) : (
                        <Input.Placeholder>Pick a value</Input.Placeholder>
                    )}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}
