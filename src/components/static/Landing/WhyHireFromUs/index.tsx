'use client';
import React, { useEffect, useState } from 'react';
import { Text, Stack, Flex, Image } from '@mantine/core';
import { LiaHeadsetSolid } from 'react-icons/lia';
import { GoShieldCheck } from 'react-icons/go';
import { TbCoins } from 'react-icons/tb';
import HireCard from './HireCard';
import classes from './HireCard/HireCard.module.css';

const WhyHireFromUs = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once after mounting

    const items = [
        {
            icon: (
                <LiaHeadsetSolid
                    style={{
                        width: '30px',
                        height: '30px'
                    }}
                    className={classes.icon}
                />
            ),
            title: 'Continous Support',
            data: 'Regular check-ins post-hiring to gather feedback and ensure satisfaction.'
        },
        {
            icon: (
                <GoShieldCheck
                    style={{
                        width: '30px',
                        height: '30px'
                    }}
                    className={classes.icon}
                />
            ),
            title: 'Risk-Free Hiring',
            data: "Try our risk-free 2-week trial and see if they're the perfect fit, all without any upfront commitment"
        },
        {
            icon: (
                <TbCoins
                    style={{
                        width: '30px',
                        height: '30px'
                    }}
                    className={classes.icon}
                />
            ),
            title: 'Cost-Effective Solution',
            data: 'Affordable software development options without compromising quality.'
        }
    ];

    return (
        <Stack
            pos={'relative'}
            style={{
                backgroundColor: 'rgba(244, 244, 244, 0.4)'
            }}
            gap={48}
            py={{ base: 64 }}
            px={{ base: 16, md: 50 }}
        >
            <Stack
                style={{
                    visibility: windowSize.width < 1285 ? 'hidden' : 'visible'
                }}
            >
                <Image
                    left={'0%'}
                    top={'48%'}
                    pos={'absolute'}
                    src="/images/home/VectorPath.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    style={{
                        objectFit: 'contain'
                    }}
                />
            </Stack>
            <Stack>
                <Text
                    size="36px"
                    fw="600"
                    c="gray.8"
                    inline
                    style={{ textAlign: 'center' }}
                >
                    Why Hire from{' '}
                    <b
                        style={{
                            color: '#2195F3',
                            fontWeight: 'bold'
                        }}
                    >
                        Eskalate?
                    </b>
                </Text>
            </Stack>

            <Flex
                pos={'relative'}
                py={{ base: 64, md: 64 }}
                gap={80}
                justify={'center'}
                wrap={'wrap'}
            >
                {items.map((item: any, index: number) => (
                    <HireCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        data={item.data}
                    />
                ))}
            </Flex>
        </Stack>
    );
};

export default WhyHireFromUs;
