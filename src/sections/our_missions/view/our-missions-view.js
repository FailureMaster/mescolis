'use client';

import { useEffect } from 'react';

import { _jobs, } from 'src/_mock';

import { useBoolean } from 'src/hooks/use-boolean';
import { SplashScreen } from 'src/components/loading-screen';
import CareerJobDetailsHero from '../career-job-details-hero';
import ElearningAbout from '../elearning-about';

// ----------------------------------------------------------------------

const _mockJob = _jobs[0];

export default function OurMissionsView() {

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

            <ElearningAbout />
        </>
    );
}
