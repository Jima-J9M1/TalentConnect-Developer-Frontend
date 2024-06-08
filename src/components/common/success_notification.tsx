import { Notification } from '@mantine/core';
import { useEffect, useState } from 'react';

interface props {
    title: string;
    description: string;
    onClose?: Function;
}

export default function SuccessNotification({
    title,
    description,
    onClose
}: props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
            onClose && onClose();
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                zIndex: 9000,
                maxWidth: '500px'
            }}
        >
            {isVisible && (
                <Notification
                    color="green"
                    title={title}
                    onClose={() => {
                        setIsVisible(false);
                        onClose && onClose();
                    }}
                >
                    {description}
                </Notification>
            )}
        </div>
    );
}
