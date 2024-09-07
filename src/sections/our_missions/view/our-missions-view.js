'use client';

import { _members, _testimonials, _jobs, _mock, _socials } from 'src/_mock';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'src/components/image';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { SplashScreen } from 'src/components/loading-screen';

import Advertisement from '../../advertisement';
import CareerJobDetailsInfo from '../career-job-details-info';
import CareerJobDetailsHero from '../career-job-details-hero';
import MarketingAboutStory from '../marketing-about-story';
import ElearningAbout from '../elearning-about';
import ElearningTeam from '../elearning-team';
import ElearningTestimonial from '../elearning-testimonial';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function OurMissionsView() {

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

            <ElearningAbout />

            <ElearningTeam members={_members} />

            <ElearningTestimonial testimonials={_testimonials} />

            {/* <MarketingAboutStory /> */}
        </>
    );
}
