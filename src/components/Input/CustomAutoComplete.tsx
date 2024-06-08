import { Autocomplete } from '@mantine/core';
import { useEffect, useState } from 'react';
interface Props {
    label: string;
    placeholder: string;
    data: any[];
    onOptionSubmit: (val: string) => void;
    multiple?: boolean;
    value?: string;
}
export function CustomAutoComplete(props: Props) {
    const selectedOption = props.data?.find(
        (item) => item.value === props.value
    );
    const [search, setSearch] = useState<string>(selectedOption?.label || '');

    useEffect(() => {
        setSearch(selectedOption?.label || '');
    }, [selectedOption]);

    return (
        <Autocomplete
            label={props.label}
            placeholder={props.placeholder}
            data={props.data}
            onOptionSubmit={(val) => {
                props.onOptionSubmit(val);
                setSearch(val);
            }}
            value={search}
            onChange={setSearch}
            onDropdownClose={() => {
                if (!props?.multiple) {
                    const filtered = props.data.filter(
                        (val: any) =>
                            val?.label?.toLowerCase() == search?.toLowerCase()
                    );
                    if (filtered.length > 0) {
                        setSearch(filtered[0]?.label);
                    } else {
                        setSearch('');
                    }
                } else {
                    setSearch('');
                }
            }}
        />
    );
}
