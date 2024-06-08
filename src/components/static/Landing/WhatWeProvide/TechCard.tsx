import React from 'react';
import TechStack from './TechStack';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaCloud } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    SiFlutter,
    SiTypescript,
    SiReact,
    SiFirebase,
    SiAngularjs,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiAew,
    SiGooglecloud
} from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiPython, SiRuby, SiGo, SiRust, SiDart } from 'react-icons/si';
import {
    SiCsharp,
    SiSwift,
    SiKotlin,
    SiScala,
    SiApple,
    SiDotnet,
    SiAndroid,
    SiVuedotjs
} from 'react-icons/si';
import { Flex, Image, Stack } from '@mantine/core';

const TechCard = () => {
    const techItems1 = [
        {
            icon: (
                <FaReact
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'React'
        },
        {
            icon: (
                <FaNodeJs
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'Node.js'
        },
        {
            icon: (
                <FaHtml5
                    style={{ color: '#EF4444', width: '30px', height: '30px' }}
                />
            ),
            text: 'HTML5'
        },
        {
            icon: (
                <FaCss3
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'CSS3'
        },
        {
            icon: (
                <SiAew
                    style={{ color: '#ffc107', width: '30px', height: '30px' }}
                />
            ),
            text: 'AWS'
        }
    ];

    const techItems2 = [
        {
            icon: (
                <SiFlutter
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'Flutter'
        },
        {
            icon: (
                <SiKotlin
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'Kotlin'
        },
        {
            icon: (
                <SiTypescript
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'TypeScript'
        },
        {
            icon: (
                <SiCsharp
                    style={{ color: '#6f42c1', width: '30px', height: '30px' }}
                />
            ),
            text: 'C#'
        },
        {
            icon: (
                <SiAngularjs
                    style={{ color: '#dc3545', width: '30px', height: '30px' }}
                />
            ),
            text: 'AngularJS'
        },
        {
            icon: (
                <SiFlutter
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'Flutter'
        }
    ];

    const techItems3 = [
        {
            icon: (
                <SiPython
                    style={{ color: '#ffc107', width: '30px', height: '30px' }}
                />
            ),
            text: 'Python'
        },
        {
            icon: (
                <SiRuby
                    style={{ color: '#C02942', width: '30px', height: '30px' }}
                />
            ),
            text: 'Ruby'
        },
        {
            icon: (
                <SiGo
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'Go'
        },
        {
            icon: (
                <SiRust
                    style={{ color: '#ea5e0c', width: '30px', height: '30px' }}
                />
            ),
            text: 'Rust'
        },
        {
            icon: (
                <SiDart
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'Dart'
        },
        {
            icon: (
                <SiKubernetes
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'Kubernetes'
        }
    ];

    const techItems4 = [
        {
            icon: (
                <SiSwift
                    style={{ color: '#f97316', width: '30px', height: '30px' }}
                />
            ),
            text: 'Swift'
        },
        {
            icon: (
                <SiNodedotjs
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'Node.js'
        },
        {
            icon: (
                <FaCss3
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'CSS3'
        },
        {
            icon: (
                <SiScala
                    style={{ color: '#C02942', width: '30px', height: '30px' }}
                />
            ),
            text: 'Scala'
        },
        {
            icon: (
                <SiKubernetes
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'Kubernetes'
        }
    ];

    const techItems5 = [
        {
            icon: (
                <SiAndroid
                    style={{ color: '#17a2b8', width: '30px', height: '30px' }}
                />
            ),
            text: 'Android'
        },
        {
            icon: (
                <SiApple
                    style={{ color: '#4A5568', width: '30px', height: '30px' }}
                />
            ),
            text: 'iOS'
        },
        {
            icon: (
                <SiDotnet
                    style={{ color: '#6f42c1', width: '30px', height: '30px' }}
                />
            ),
            text: '.NET'
        },
        {
            icon: (
                <SiGooglecloud
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'GoogleCloud'
        },
        {
            icon: (
                <FaCloud
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'Azure'
        }
    ];
    const techItems6 = [
        {
            icon: (
                <SiReact
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'React'
        },
        {
            icon: (
                <SiFirebase
                    style={{ color: '#ffc107', width: '30px', height: '30px' }}
                />
            ),
            text: 'Firebase'
        },
        {
            icon: (
                <SiVuedotjs
                    style={{ color: '#17a2b8', width: '30px', height: '30px' }}
                />
            ),
            text: 'Vue.js'
        },
        {
            icon: (
                <SiPostgresql
                    style={{ color: '#1fb6ff', width: '30px', height: '30px' }}
                />
            ),
            text: 'PostgreSQL'
        },
        {
            icon: (
                <SiDocker
                    style={{ color: '#3b82f6', width: '30px', height: '30px' }}
                />
            ),
            text: 'Docker'
        }
    ];

    const itemsArr = [
        techItems1,
        techItems2,
        techItems3,
        techItems4,
        techItems5,
        techItems6,
        techItems2,
        techItems1
    ];
    return (
        <Stack style={{ position: 'relative' }}>
            <Flex
                direction="column"
                w={580}
                h={410}
                bg="#F3F4F6"
                pt={5}
                gap={5}
                style={{
                    overflow: 'hidden',
                    borderRadius: '10px',
                    border: 'solid',
                    borderWidth: '3px',
                    borderColor: '#F3F4F6'
                }}
            >
                {itemsArr.map((item: any, index: number) => (
                    <TechStack techItems={item} key={index} />
                ))}
            </Flex>
            <Image
                src="/images/home/horizontal_dots.png"
                alt=""
                w="60%"
                visibleFrom="md"
                style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '60px',
                    zIndex: '-1'
                }}
            />
        </Stack>
    );
};

export default TechCard;
