'use client';

import SignupStyle from '@/components/Client/Signup.module.css';
import Calendly from '@/components/Client/calendly';
import Editor from '@/components/Client/editor';
import MainInfo from '@/components/Client/main_info';
import MoreInfo from '@/components/Client/more_info';
import Skills from '@/components/Client/skills';
import Success from '@/components/Client/success';
import {
    useRegisterClientMutation,
    useUpdateClientMutation
} from '@/lib/redux/api/client/clientApi';
import { AddClinetInf } from '@/types';
import { Box, Stepper } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
    const [register, { isLoading, isSuccess, reset, error, data }] =
        useRegisterClientMutation();

    const [updateData, updateDataStatus] = useUpdateClientMutation();
    const [started, setStarted] = useState(false);
    const searchParams = useSearchParams();
    const form = useForm({
        initialValues: {
            fullName: '',
            email: searchParams.get('email') ?? '',
            companyName: '',
            phoneNumber: '',
            calendly: '',
            skills: [],
            technologies: [],
            apiTechnologies: [],
            commitment: '',
            howLong: '',
            startDate: new Date(),
            additionalDetail: '',
            document: '',
            id: ''
        },

        validate: {
            fullName: isNotEmpty('Name is required'),
            email: isEmail('Email is required'),
            companyName: isNotEmpty('Company Name is required'),
            phoneNumber: (value): any =>
                value.length < 5 ? 'Invalid phone number' : null
        }
    });

    const [active, setActive] = useState(0);

    const nextStep = () =>
        setActive((current) => (current < 4 ? current + 1 : current));
    // const skipStep = () =>
    //     setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () =>
        setActive((current) => (current > 0 ? current - 1 : current));
    if (updateDataStatus.data) {
        nextStep();
        updateDataStatus.reset();
    }
    const [showCalendly, setShowCalendly] = useState(false);

    if (isSuccess) {
        console.log(data);
        form.setFieldValue('id', data.id);

        setShowCalendly(true);
        reset();
    }

    const submit = () => {
        const values = form.values;
        setStarted(true);
        const error = form.validate();
        if (error.hasErrors) return;
        const newValue: AddClinetInf = {
            fullName: values.fullName,
            email: values.email,
            companyName: values.companyName,
            phoneNumber: '+' + values.phoneNumber
        };
        register(newValue);
    };
    const updateLast = (document: string, file: any) => {
        const values = form.values;
        const formData = new FormData();
        file && formData.append('attachement', file);
        formData.append('jobTitle', JSON.stringify(values.skills));
        formData.append('message', document);
        formData.append('availabilityType', values.additionalDetail);
        formData.append('hirePeriod', values.howLong);
        formData.append('startDate', values.startDate.toString());
        values.apiTechnologies.map((d) => {
            formData.append('techStacks', d);
        });
        updateData({
            api: formData,
            id: values.id
        });
    };

    return (
        <Box className={SignupStyle.signupForm}>
            <>
                <Stepper
                    styles={{
                        steps: {
                            display: 'none'
                        }
                    }}
                    style={{
                        padding: 0
                    }}
                    active={active}
                    onStepClick={setActive}
                >
                    <Stepper.Step
                        label="First step"
                        description="Create an account"
                        // className='text-start'
                        style={{
                            padding: 0
                        }}
                    >
                        {!showCalendly && (
                            <MainInfo
                                form={form}
                                nextStep={submit}
                                isLoading={isLoading}
                                error={error}
                                started={started}
                            />
                        )}
                        <Calendly
                            show={showCalendly}
                            form={form}
                            nextStep={nextStep}
                            skipStep={prevStep}
                        />
                    </Stepper.Step>
                    <Stepper.Step
                        label="Second step"
                        description="Verify email"
                    >
                        <Skills
                            form={form}
                            nextStep={nextStep}
                            skipStep={prevStep}
                        />
                    </Stepper.Step>
                    <Stepper.Step
                        label="Final step"
                        description="Get full access"
                    >
                        <MoreInfo
                            form={form}
                            nextStep={nextStep}
                            skipStep={prevStep}
                        />
                    </Stepper.Step>
                    <Stepper.Step
                        label="Final step"
                        description="Get full access"
                    >
                        <Editor
                            form={form}
                            nextStep={updateLast}
                            skipStep={prevStep}
                            updateDataStatus={updateDataStatus}
                        />
                    </Stepper.Step>
                    <Stepper.Completed>
                        <Success />
                    </Stepper.Completed>
                </Stepper>
            </>
        </Box>
    );
};

export default Page;
