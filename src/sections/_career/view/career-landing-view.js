'use client';

import {
    _jobs,
    _careerPosts,
    _brandsColor,
    _testimonials,
    _jobsByCompanies,
    _jobsByCountries,
    _jobsByCategories,
} from 'src/_mock';

import CareerNewsletter from '../career-newsletter';
import CareerOurClients from '../career-our-clients';
import CareerDownloadApp from '../career-download-app';
import CareerLandingHero from '../landing/career-landing-hero';
import CareerLandingStep from '../landing/career-landing-step';
import CareerTestimonial from '../testimonial/career-testimonial';
import CareerLatestPosts from '../../blog/career/career-latest-posts';
import CareerLandingConnections from '../landing/career-landing-connections';
import CareerLandingFeaturedJobs from '../landing/career-landing-featured-jobs';
import CareerLandingTopCompanies from '../landing/career-landing-top-companies';
import CareerLandingHotCategories from '../landing/career-landing-hot-categories';
import CareerLandingForRecruiters from '../landing/career-landing-for-recruiters';
import MarketingLandingAbout from '../marketing-landing-about';
import MarketingAbout from '../marketing-about';
import TravelAbout from '../travel-about';
import MarketingServicesBenefits from '../marketing-services-benefits';
import MarketingLandingProcess from '../marketing-landing-process';
import MarketingNewsletter from '../marketing-newsletter';


// ----------------------------------------------------------------------

export default function CareerLandingView() {
    return (
        <>
            <CareerLandingHero />

            <CareerLandingStep />

            <CareerOurClients brands={_brandsColor} />

            <MarketingAbout />

            <TravelAbout />

            <MarketingServicesBenefits />

            <MarketingLandingProcess />

            <CareerLandingForRecruiters />

            <MarketingNewsletter />

        </>
    );
}
