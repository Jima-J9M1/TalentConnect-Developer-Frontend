import {
    Accordion,
    AccordionControl,
    AccordionItem,
    AccordionPanel,
    Group,
    Stack,
    Text
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { FaComputer } from 'react-icons/fa6';
import { GiBalloonDog } from 'react-icons/gi';
import classes from './HeaderSection/HeaderSection.module.css';

const GeneralQuestions = () => {
    const accordionItems: any = [
        {
            id: '1',
            value: 'What is Eskalate?',
            description:
                'Eskalate is a platform that helps you to create and manage your own online store. You can create your own store, add products, manage orders, and much more.'
        },
        {
            id: '2',
            value: 'How can I create a store?',
            description:
                'To create a store, you need to sign up for an account. Once you have signed up, you can create your store by following the instructions provided on the website.'
        },
        {
            id: '3',
            value: 'How can I add products to my store? ',
            description:
                'To add products to your store, you need to log in to your account and go to the products section. From there, you can add new products by providing the necessary details.'
        },
        {
            id: '4',
            value: 'How can I manage orders?',
            description:
                'To manage orders, you need to log in to your account and go to the orders section. From there, you can view all the orders that have been placed and manage them accordingly.'
        }
    ];

    const accordionItems2: any = [
        {
            id: '5',
            value: 'What are the payment options?',
            description:
                'We offer various payment options including credit card, debit card, and PayPal.'
        },
        {
            id: '6',
            value: 'How can I contact customer support?',
            description:
                'You can contact our customer support team through email, phone, or live chat.'
        },
        {
            id: '7',
            value: 'Can I customize the look of my store?',
            description:
                'Yes, you can customize the look of your store by choosing from different themes and templates.'
        },
        {
            id: '8',
            value: 'Is there a limit on the number of products I can add?',
            description:
                'No, there is no limit on the number of products you can add to your store.'
        }
    ];

    const items = accordionItems.map((item: any) => (
        <AccordionItem key={item.value} value={item.value}>
            <AccordionControl p={0} c={'var(--mantine-color-blue-5)'}>
                {item.value}
            </AccordionControl>
            <AccordionPanel>{item.description}</AccordionPanel>
        </AccordionItem>
    ));

    const items2 = accordionItems2.map((item: any) => (
        <AccordionItem key={item.value} value={item.value}>
            <AccordionControl p={0} c={'var(--mantine-color-blue-5)'}>
                {item.value}
            </AccordionControl>
            <AccordionPanel>{item.description}</AccordionPanel>
        </AccordionItem>
    ));

    return (
        <Stack
            justify="center"
            align="center"
            gap="xl"
            maw={{ base: '90%', md: '1000px' }}
        >
            <Stack gap={10}>
                <Group>
                    <FaComputer
                        color="var(--mantine-color-blue-5)"
                        size={'20px'}
                    />{' '}
                    <Text size="xl" c={'var(--mantine-color-blue-5)'} fw={500}>
                        General Questions
                    </Text>
                </Group>

                <Accordion
                    defaultValue="Eskalate"
                    classNames={{ chevron: classes.chevron }}
                    chevron={<IconPlus className={classes.icon} />}
                    miw={{ base: '390px', md: '800px' }}
                    maw={{ base: '100%', md: '800px' }}
                >
                    {items}
                </Accordion>
            </Stack>

            <Stack gap={10}>
                <Group>
                    <GiBalloonDog
                        color="var(--mantine-color-blue-5)"
                        size={'20px'}
                    />{' '}
                    <Text size="xl" c={'var(--mantine-color-blue-5)'} fw={500}>
                        Developers
                    </Text>
                </Group>

                <Accordion
                    defaultValue="Eskalate"
                    classNames={{ chevron: classes.chevron }}
                    chevron={<IconPlus className={classes.icon} />}
                    miw={{ base: '390px', md: '800px' }}
                    maw={{ base: '100%', md: '800px' }}
                >
                    {items2}
                </Accordion>
            </Stack>
        </Stack>
    );
};

export default GeneralQuestions;
