import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

import { TestimonialItemContent, TestimonialItemThumbnail } from './testimonial-item';
import ElearningTeamItem from './elearning-team-item';

// ----------------------------------------------------------------------

const SUMMARY = [
    {
        name: 'Learners',
        number: 14000,
        description:
            'At MesColis, we share a common vision of our future. Since our beginning in 2008, we have developed a culture based on integrity and core values. Our culture empowers our team to continuously question everything, especially our processes and our results.',
    },
    {
        name: 'Courses',
        number: 1050,
        description:
            'We ask the question “Is it the right thing to Do”… for our customers, team members, community and shareholders. We believe it’s possible to satisfy all stakeholders, but only when we function as a team and when we are never satisfied with the status quo.',
    },
    {
        name: 'Graduates',
        number: 52000,
        description:
            'Our success depends on finding and keeping talent and empowering them with the tools to “Thrive & Strive.” This approach has been responsible for all of our greatest success stories, like our Heroic Support Team. When our team and our customers succeed, our business continues to grow and expand.',
    },
    {
        name: 'Graduates',
        number: 52000,
        description:
            'Our growth provides the return our shareholders expect and deserve and allows us the ability to give back to the communities where we live.',
    },
];

// ----------------------------------------------------------------------

export default function ElearningTestimonial({ members }) {
    const theme = useTheme();

    const carouselLarge = useCarousel({
        slidesToShow: 1,
        draggable: false,
        slidesToScroll: 1,
        adaptiveHeight: true,
    });

    const carouselThumb = useCarousel({
        autoplay: true,
        slidesToShow: 5,
        centerMode: true,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        centerPadding: '0px',
        rtl: Boolean(theme.direction === 'rtl'),

        responsive: [
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    });

    useEffect(() => {
        carouselLarge.onSetNav();
        carouselThumb.onSetNav();
    }, [carouselLarge, carouselThumb]);

    return (
        <Box
            sx={{
                bgcolor: 'background.neutral',
                textAlign: 'center',
                overflow: 'hidden',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container sx={{ position: 'relative' }}>
                <Grid
                    container
                    spacing={8}
                    direction={{ md: 'row-reverse' }}
                    justifyContent={{ md: 'space-between' }}
                >
                    <Grid xs={12} md={6} lg={6}>
                        <Box
                            sx={{
                                columnGap: 2,
                                display: 'grid',
                                rowGap: { xs: 2, md: 3 },
                                gridTemplateColumns: {
                                    xs: 'repeat(2, 1fr)',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(2, 1fr)',
                                },
                            }}
                        >
                            {members.slice(0, 4).map((member) => (
                                <ElearningTeamItem key={member.id} member={member} />
                            ))}
                        </Box>
                    </Grid>

                    <Grid
                        xs={12}
                        md={6}
                        lg={5}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Stack spacing={{ xs: 2, md: 4 }}>
                            <Typography variant="h3">
                                Meet our Leadership Team
                            </Typography>

                            {SUMMARY.map((value) => (
                                <Box>
                                    <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

ElearningTestimonial.propTypes = {
    members: PropTypes.array,
};
