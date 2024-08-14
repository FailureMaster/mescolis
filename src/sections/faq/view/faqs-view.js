'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _jobs, _mock, _socials } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

import Advertisement from '../../advertisement';
import CareerJobDetailsInfo from '../../our_partners/career-job-details-info';
import CareerJobDetailsHero from '../../our_partners/career-job-details-hero';
import MarketingAboutStory from '../../our_partners/marketing-about-story';
import MarketingLandingFaqs from '../marketing-landing-faqs';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function OurPartnersView() {

    const mdUp = useResponsive('up', 'md');

    const loading = useBoolean(true);

    useEffect(() => {
        const fakeLoading = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            loading.onFalse();
        };
        fakeLoading();
    }, [loading]);

    if (loading.value) {
        return <SplashScreen />;
    }

    return (
        <>
            <CareerJobDetailsHero job={_mockJob} />

            <Stack
                spacing={2}
                direction="row"
                alignItems="flex-center"
                sx={{ width: '100%', py: 2.5, mx: 'auto', bgcolor: 'background.neutral' }}
            >
                <Stack spacing={2} alignItems="center" sx={{ width: 1, maxWidth: 340, mx: 'auto' }}>
                    <Button fullWidth variant="contained" size="large" color="primary">
                        Try it out. Get a quote.
                    </Button>
                </Stack>
            </Stack>

            <MarketingLandingFaqs />

        </>
    );
}
