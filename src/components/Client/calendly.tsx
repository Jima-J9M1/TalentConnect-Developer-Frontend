'use client';

import { Box, Button, Grid } from '@mantine/core';
import { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import SignupStyle from './Signup.module.css';
const Calendly = ({ form, skipStep, nextStep, show }: any) => {
    const [showButton, setShowButton] = useState(false);
    useCalendlyEventListener({
        onProfilePageViewed: () => console.log('onProfilePageViewed'),
        onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
        onEventTypeViewed: () => console.log('onEventTypeViewed'),
        onEventScheduled: (e) => {
            // setShowButton(true);
            nextStep();
        }
    });
    return (
        <Box hidden={!show} className={SignupStyle.calendlyStyle}>
            <InlineWidget
                prefill={{
                    name: form.values.fullName,
                    email: form.values.email
                }}
                url="https://calendly.com/ibsaabraham663/freelancer-interview?month=2024-06"
                styles={{
                    width: '100%',
                    height: '100vh',
                    padding: '0',
                    margin: '0'
                }}
            />
            <Grid.Col
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Box></Box>
                <Box>
                    {showButton && (
                        <Button size="lg" onClick={() => nextStep()}>
                            Continue
                        </Button>
                    )}
                </Box>
            </Grid.Col>
        </Box>
    );
};

export default Calendly;
