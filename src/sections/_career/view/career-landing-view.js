'use client';

import { useScroll } from 'framer-motion';

import {
    _brandsColor,
} from 'src/_mock';

import ScrollProgress from 'src/components/scroll-progress';

import CareerOurClients from '../career-our-clients';
import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingStep from '../landing/career-landing-step';
import MarketingAbout from '../marketing-about';
import MarketingLandingProcess from '../marketing-landing-process';
import MarketingServicesBenefits from '../marketing-services-benefits';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <ScrollProgress scrollYProgress={scrollYProgress} />

            <CareerLandingHero />

            <CareerLandingStep />

            <CareerOurClients brands={_brandsColor} />

            <MarketingAbout />

            <MarketingServicesBenefits />

            <MarketingLandingProcess />

        </>
    );
}
