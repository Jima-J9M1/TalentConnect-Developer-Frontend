import About from '@/components/static/About/About';
import How from '@/components/static/About/How';
import MeetOurTeam from '@/components/static/About/MeetOurTeam';
import OurMission from '@/components/static/About/OurMission';
import Talent from '@/components/static/About/OurTalent';
import { Stack } from '@mantine/core';

export default function AboutPage() {
    return (
        <Stack style={{ overflow: 'hidden' }}>
            <About />
            <OurMission />
            <Talent />
            <How />
            <MeetOurTeam />
        </Stack>
    );
}
