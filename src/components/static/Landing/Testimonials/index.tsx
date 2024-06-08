'use client';
import { Flex, Stack, Text } from '@mantine/core';
import classes from './Testimonies.module.css';
import { Carousel } from '@mantine/carousel';
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';
import { useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';
import TestimonyCard from './TestimonyCard';

const Testimonials = () => {
    const [embla, setEmbla] = useState<EmblaCarouselType>();

    const handleNext = () => embla?.scrollNext();
    const handlePrev = () => embla?.scrollPrev();

    return (
        <Stack
            w={'100%'}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
            }}
            gap={20}
            px={{ base: 24, md: 30, lg: 150 }}
            py={{ base: 30, md: 100 }}
        >
            <Stack justify="center" align="center">
                <Text
                    size="30px"
                    fw={600}
                    c="#3F3F46"
                    inline
                    className={classes.firstScreenContainerMoto}
                >
                    Testimonials from Our Partners
                </Text>
            </Stack>
            <Flex w={{ md: '60%', base: '100%' }}>
                <Text
                    size="20px"
                    fw={400}
                    c="#71717A"
                    style={{
                        textAlign: 'center',
                        lineHeight: 1.5
                    }}
                >
                    Hear from Industry Leaders: How A2SV Talent, Available
                    through Eskalate, is Making an Impact at Google and Beyond
                </Text>
            </Flex>
            <Flex pt={50}>
                <Carousel
                    getEmblaApi={setEmbla}
                    w={'100%'}
                    slideGap={70}
                    speed={7}
                    classNames={classes}
                    loop
                >
                    <Carousel.Slide>
                        <TestimonyCard
                            url="https://www.youtube.com/embed/89B0FvoxATU"
                            name="Andrew Rogers"
                            position="Founder at Manifest Automation"
                            message="When we had the opportunity to hire our first engineers from A2SV, I couldn’t be more excited. We have 2 engineers from A2SV. And both of the engineers have been amazing. We have been able to work with them, communicate with them daily, grow their skills and they are invaluable members of our team."
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <TestimonyCard
                            url="https://www.youtube.com/embed/MLsbpdDXWcQ"
                            name="Abdoulaye Diack"
                            position="Research Program Manager AI and Machine Learning at Google Ghana"
                            message="I am happily surprised because all of the 3 hires are really high performers in my company, at Google Research in Ghana. And to me it just shows the potential and I think they will excel wherever they go."
                        />
                    </Carousel.Slide>
                </Carousel>
            </Flex>
            <Flex w={'100%'} justify={'end'} align={'end'} gap={20}>
                <GrFormPreviousLink
                    onClick={handlePrev}
                    size={35}
                    color="white"
                    radius={'50%'}
                    style={{
                        background: 'var(--mantine-primary-color-filled)',
                        borderRadius: '50%',
                        cursor: 'pointer'
                    }}
                />
                <GrFormNextLink
                    onClick={handleNext}
                    color="white"
                    style={{
                        background: 'var(--mantine-primary-color-filled)',
                        borderRadius: '50%',
                        fontWeight: 'lighter',
                        cursor: 'pointer'
                    }}
                    size={35}
                />
            </Flex>
        </Stack>
    );
};

export default Testimonials;
