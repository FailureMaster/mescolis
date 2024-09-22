'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useBoolean } from 'src/hooks/use-boolean';

import { _jobs } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import MarketingAboutStory from '../marketing-about-story';
import CareerJobDetailsHero from '../career-job-details-hero';


// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function OurPartnersView() {

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

            <MarketingAboutStory />

        </>
    );
}
