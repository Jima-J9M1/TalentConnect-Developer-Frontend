'use client';

import FrontendDevelopers from '@/components/static/Engineering/FrontendDevelopers';
import Hero from '@/components/static/Engineering/Hero';
import OurPartners from '@/components/static/Engineering/OurPartners';
import RelatedProducts from '@/components/static/Engineering/RelatedProducts';
import WhyHireFrontendDevs from '@/components/static/Engineering/WhyHireFrontendDevs';
import CTA from '@/components/static/Landing/CTA';
import { Stack } from '@mantine/core';
import React from 'react';

const page = () => {
    return (
        <Stack
            style={{
                overflow: 'hidden'
            }}
            gap={60}
        >
            <Hero />
            <OurPartners />
            <WhyHireFrontendDevs />
            <RelatedProducts />
            <FrontendDevelopers />
            <CTA />
        </Stack>
    );
};

export default page;
