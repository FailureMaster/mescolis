import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';
import { useTranslation } from 'src/contexts/TranslationContext';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MarketingLandingFaqs() {
    const { trans } = useTranslation();

    const mdUp = useResponsive('up', 'md');

    const [expanded, setExpanded] = useState(false);

    const handleChangeExpanded = useCallback(
        (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        },
        []
    );

    const _faqs = [
        trans('p_faq_content_question_1'),
        trans('p_faq_content_question_2'),
        trans('p_faq_content_question_3'),
        trans('p_faq_content_question_4'),
        trans('p_faq_content_question_5'),
    ].map((question, index) => ({
        id: _mock.id(index),
        question,
        answer: [
            trans('p_faq_content_answer_1'),
            trans('p_faq_content_answer_2'),
            trans('p_faq_content_answer_3'),
            trans('p_faq_content_answer_4'),
            trans('p_faq_content_answer_5'),
        ][index],
    }));

    return (
        <Container
            sx={{
                pt: { xs: 5, md: 10 },
                pb: { xs: 10, md: 15 },
            }}
        >
            <Grid container spacing={3} justifyContent="space-between" alignItems="center">
                <Grid xs={12} md={6} lg={6}>
                    <Stack spacing={2} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="overline" color="text.disabled">
                            {trans('p_faq_content_subtitle')}
                        </Typography>

                        <Typography variant="h2">
                            {trans('p_faq_content_title')}
                        </Typography>
                    </Stack>

                    {_faqs.map((faq) => (
                        <Accordion
                            key={faq.id}
                            expanded={expanded === faq.question}
                            onChange={handleChangeExpanded(faq.question)}
                        >
                            <AccordionSummary
                                sx={{
                                    minHeight: 64,
                                    [`& .${accordionSummaryClasses.content}`]: {
                                        p: 0,
                                        m: 0,
                                    },
                                    [`&.${accordionSummaryClasses.expanded}`]: {
                                        bgcolor: 'action.selected',
                                    },
                                }}
                            >
                                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                    {faq.question}
                                </Typography>

                                <Iconify
                                    width={24}
                                    icon={expanded === faq.question ? 'carbon:subtract' : 'carbon:add'}
                                />
                            </AccordionSummary>

                            <AccordionDetails>{faq.answer}</AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>

                {mdUp && (
                    <Grid xs={12} md={6} lg={5}>
                        <Image alt="faqs" src="/assets/illustrations/illustration_faqs.svg" />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}
