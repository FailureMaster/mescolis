'use client';

import { useEffect } from 'react';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _jobs, _mock, _socials } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import CareerJobDetailsHero from '../career-job-details-hero';
import MarketingAboutStory from '../marketing-about-story';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function HowItWorksView() {
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

            <MarketingAboutStory />
        </>
    );
}
