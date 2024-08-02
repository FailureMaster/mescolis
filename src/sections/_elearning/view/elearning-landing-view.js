'use client';

import {
  _courses,
  _members,
  _coursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
  _tours,
  _jobsByCountries,
} from 'src/_mock';

import ElearningTeam from '../team/elearning-team';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningOurClients from '../elearning-our-clients';
import ElearningDownloadApp from '../elearning-download-app';
import ElearningLandingHero from '../landing/elearning-landing-hero';
import ElearningTestimonial from '../testimonial/elearning-testimonial';
import ElearningLandingIntroduce from '../landing/elearning-landing-introduce';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';
import ElearningLandingCategories from '../landing/elearning-landing-categories';
import ElearningLandingFeaturedCourses from '../landing/elearning-landing-featured-courses';
import MarketingLandingAbout from '../marketing-landing-about';
import CareerNewsletter from '../career-newsletter';
import CareerLandingConnections from '../career-landing-connections';
import ElearningLandingQuote from '../elearning-landing-quote';
import MarketingNewsletter from '../marketing-newsletter';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <MarketingLandingAbout brands={_brandsColor} />

      <ElearningLandingIntroduce />

      <CareerLandingConnections  />

      <CareerNewsletter />

      <ElearningLandingQuote />

      <MarketingNewsletter />

    </>
  );
}
