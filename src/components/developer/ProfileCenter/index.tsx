import { useDeveloper } from '@/Providers/DeveloperContext';
import { Box, Divider, Stack } from '@mantine/core';
import AddEducationStep from '../Education/AddEducationStep';
import AddExperienceStep from '../Experience/AddExperienceStep';
import IntroVideoStep from '../IntroVideo/IntroVideoStep';
import OverviewStep from '../Overview/OverviewStep';
import AddProjectStep from '../Project/AddProjectStep';
import UploadResumeStep from '../Resume/UploadResumeStep';

import { useGetSkillsQuery } from '@/lib/redux/api/client/clientApi';
import { useGetEducationByDeveloperIdQuery } from '@/lib/redux/api/developer/education';
import { useGetExperienceByDeveloperIdQuery } from '@/lib/redux/api/developer/experience';
import { useGetProjectsByDeveloperIdQuery } from '@/lib/redux/api/developer/project';
import NewSkillsStep from '../Skill/NewSkillsStep';

export function ProfileCenter() {
    const { developer, isLoading, isError, error, isOwner, isView } =
        useDeveloper();
    const {
        data: educations,
        error: educationError,
        isLoading: isEducationLoading
    } = useGetEducationByDeveloperIdQuery(developer?.id ? developer.id : '');
    const {
        data: experiences,
        isLoading: isExperienceLoading,
        error: experienceError
    } = useGetExperienceByDeveloperIdQuery(developer?.id ? developer.id : '');
    const { data: projects, isLoading: isProjectLoading } =
        useGetProjectsByDeveloperIdQuery(developer?.id ? developer.id : '');
    const { data: skills, isLoading: isSkillsLoading } = useGetSkillsQuery(
        developer?.user.id || ''
    );

    return isOwner && !isView ? (
        <Stack gap={10}>
            <div id="Resume">
                <UploadResumeStep />
            </div>
            <div id={'Overview'}>
                <OverviewStep />
            </div>
            <div id={'Video'}>
                <IntroVideoStep />
            </div>
            <div id={'Education'}>
                <AddEducationStep />
            </div>

            <div id={'Experience'}>
                <AddExperienceStep />
            </div>
            <div id={'Project'}>
                <AddProjectStep />
            </div>
            <Box id={'Skills'}>
                <NewSkillsStep />
            </Box>
            {/*<div id={'Certifications'}>
                <CertificationStep />
            </div>*/}
        </Stack>
    ) : (
        <Stack gap={0} justify="center" align="center" bg={'white'}>
            {(developer?.profileOverview?.length || 0) > 8 ? (
                <>
                    <OverviewStep />
                    <Divider w={'90%'} m={0} />
                </>
            ) : (
                ''
            )}

            {experiences?.length ? (
                <>
                    <AddExperienceStep />
                    <Divider w={'90%'} m={0} />
                </>
            ) : (
                ''
            )}
            {projects?.length ? (
                <>
                    <AddProjectStep />
                    <Divider w={'90%'} m={0} />
                </>
            ) : (
                ''
            )}

            {skills?.length ? (
                <>
                    <NewSkillsStep />
                </>
            ) : (
                ''
            )}
            {educations?.length ? (
                <>
                    <AddEducationStep />
                    <Divider w={'90%'} m={0} />
                </>
            ) : (
                ''
            )}
        </Stack>
    );
}
