import React from 'react';
import { Modal, Stack, Divider, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CardWrapper from '../ProfileCenter/CardWrapper';
import { ProfileSectionHeaderProps } from '../ProfileCenter/ProfileSectionsHeader';
import DisplayCertficate from './DisplayCertificate';
import AddCertificateForm from './AddCertificateForm';

const certifications = [
    {
        id: 1,
        name: 'Certified Scrum Master',
        issuedBy: 'Scrum Alliance',
        issueDate: '2019-01-01',
        expirationDate: '2021-01-01',
        certificateId: 1,
        credentialURL:
            'https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm',
        description:
            'Certified ScrumMaster® (CSM) is a designation offered by Scrum Alliance to practitioners who have successfully completed a CSM course and demonstrate their understanding through the CSM test. A CSM performs the following functions: Aids project teams in using Scrum effectively. Provides expertise above that of a typical project manager. Acts as a ‘servant leader’ and helps the team work together and learn the Scrum framework.'
    },
    {
        id: 2,
        name: 'AWS Certified Solutions Architect - Associate',
        issuedBy: 'Amazon Web Services',
        issueDate: '2019-01-01',
        certificateId: 2,
        expirationDate: '2021-01-01',
        credentialURL:
            'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
        description:
            'The AWS Certified Solutions Architect – Associate examination is intended for individuals who perform a solutions architect role and have one or more years of hands-on experience designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.'
    }
];

const CertificationStep = () => {
    const [opened, { open, close }] = useDisclosure(false);

    const headerProps: ProfileSectionHeaderProps = {
        title: 'Certifications',
        add: true,
        onAdd: open,
        onEdit: open
    };

    return (
        <CardWrapper
            headerProps={headerProps}
            noData={certifications?.length == 0}
        >
            <Stack p={0}>
                {certifications?.map((certificate: any, index: number) => (
                    <Stack key={index}>
                        <DisplayCertficate certificate={certificate} />
                        {index < certifications.length - 1 && <Divider />}
                    </Stack>
                ))}
            </Stack>

            <Modal
                size={'lg'}
                opened={opened}
                onClose={close}
                title="Add Certificate"
                centered
                scrollAreaComponent={ScrollArea.Autosize}
            >
                {/*<AddProjectForm close={close} />*/}
                <AddCertificateForm close={close} />
            </Modal>
        </CardWrapper>
    );
};

export default CertificationStep;
