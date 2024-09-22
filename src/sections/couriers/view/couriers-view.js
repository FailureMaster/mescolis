'use client';

import { useEffect } from 'react';

import { useBoolean } from 'src/hooks/use-boolean';

import { _tours } from 'src/_mock';

import { SplashScreen } from 'src/components/loading-screen';

import TravelAbout from '../travel-about';
import TravelLandingToursByCity from '../travel-landing-tours-by-city';

// ----------------------------------------------------------------------


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
            <TravelAbout />

            <TravelLandingToursByCity tours={_tours.slice(0, 10)} />
            
        </>
    );
}
