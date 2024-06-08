'use client';

import { Loader } from '@mantine/core';

export default function Loading() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '2rem'
            }}
        >
            <Loader size={30} />
        </div>
    );
}
