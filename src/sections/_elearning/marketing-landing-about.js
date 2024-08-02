import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Carousel, { useCarousel } from 'src/components/carousel';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
    {
        label: 'projects',
        total: 20,
        title: 'Shipping Packages',
        icon: '/assets/home/shipping_package.svg',
        content: 'You can send envelopes, packs, or packages using a variety of top-rated shipping carrier services, including ground, second-day, and next-day delivery.',
    },
    {
        label: 'Happy clients',
        total: 32000,
        title: 'LTL Freight',
        icon: '/assets/home/ltl_freight.svg',
        content: 'Mecolis isn’t just for envelopes and packages. Ship larger items on pallets using Less-Than-Truckload (LTL) Freight.',
    },
    {
        label: 'years of experience',
        total: 20,
        title: 'International Shipping',
        icon: '/assets/home/international_shipping_package.svg',
        content: 'With services to over 220 countries and territories using your preferred carriers, Mecolis ensures your international shipping needs are met.',
    },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout({ brands }) {

    const theme = useTheme();

    const carousel = useCarousel({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        infinite: true,
        responsive: [
            {
                breakpoint: theme.breakpoints.values.md,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: { slidesToShow: 2 },
            },
        ],
    });

    return (
        <Container
            sx={{
                py: { xs: 5, md: 10 },
            }}
        >
            <Grid
                container
                columnSpacing={{ xs: 0, md: 3 }}
                rowSpacing={{ xs: 5, md: 0 }}
                justifyContent="space-between"
            >
                <Grid
                    xs={12}
                    md={6}
                    sx={{
                        textAlign: { xs: 'start' },
                        paddingRight: { md: 10 },
                    }}
                    spacing={3}
                >
                    <Carousel {...carousel.carouselSettings} sx={{ }}>
                        {brands.slice(0, 4).map((brand) => (
                            <Box key={brand.id} sx={{ px: 1.5, py: 1.5 }}>
                                <Stack
                                    component={Paper}
                                    alignItems="center"
                                    justifyContent="center"
                                    variant="outlined"
                                    sx={{
                                        py: 3,
                                        borderRadius: 2,
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Image
                                        alt={brand.name}
                                        src={brand.image}
                                        sx={{
                                            width: 120,
                                            height: 60,
                                            mx: 'auto',
                                        }}
                                    />
                                </Stack>
                            </Box>
                        ))}
                    </Carousel>

                    <Carousel {...carousel.carouselSettings} sx={{ }}>
                        {brands.slice(3, 7).map((brand) => (
                            <Box key={brand.id} sx={{ px: 1.5, py: 1.5 }}>
                                <Stack
                                    component={Paper}
                                    alignItems="center"
                                    justifyContent="center"
                                    variant="outlined"
                                    sx={{
                                        py: 3,
                                        borderRadius: 2,
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Image
                                        alt={brand.name}
                                        src={brand.image}
                                        sx={{
                                            width: 120,
                                            height: 60,
                                            mx: 'auto',
                                        }}
                                    />
                                </Stack>
                            </Box>
                        ))}
                    </Carousel>

                    <Carousel {...carousel.carouselSettings} sx={{ }}>
                        {brands.slice(6, 10).map((brand) => (
                            <Box key={brand.id} sx={{ px: 1.5, py: 1.5 }}>
                                <Stack
                                    component={Paper}
                                    alignItems="center"
                                    justifyContent="center"
                                    variant="outlined"
                                    sx={{
                                        py: 3,
                                        borderRadius: 2,
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Image
                                        alt={brand.name}
                                        src={brand.image}
                                        sx={{
                                            width: 120,
                                            height: 60,
                                            mx: 'auto',
                                        }}
                                    />
                                </Stack>
                            </Box>
                        ))}
                    </Carousel>

                    
                    <Carousel {...carousel.carouselSettings} sx={{ }}>
                        {brands.slice(3, 7).map((brand) => (
                            <Box key={brand.id} sx={{ px: 1.5, py: 1.5 }}>
                                <Stack
                                    component={Paper}
                                    alignItems="center"
                                    justifyContent="center"
                                    variant="outlined"
                                    sx={{
                                        py: 3,
                                        borderRadius: 2,
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Image
                                        alt={brand.name}
                                        src={brand.image}
                                        sx={{
                                            width: 120,
                                            height: 60,
                                            mx: 'auto',
                                        }}
                                    />
                                </Stack>
                            </Box>
                        ))}
                    </Carousel>

                </Grid>

                <Grid xs={12} md={6}>
                    <Typography variant="h3" sx={{ mb: 1 }}>
                        How Can Mecolis Help Me?
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 3 }} >
                        Mecolis’s user-friendly tools make it simple to process and manage shipments, allowing you to focus on your business. Access rates, print labels, ship, track, and manage shipments—all in one convenient place.
                    </Typography>
                    <Stack spacing={5}>
                        {ROWS.map((row) => (
                            <Stack
                                key={row.label}
                                direction="row"
                                alignItems="center"
                                divider={
                                    <Divider
                                        flexItem
                                        orientation="vertical"
                                        sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                                    />
                                }
                            >
                                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                                    <Image
                                        src={row.icon}
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            mx: 'auto',
                                            color: 'primary.main',
                                        }}
                                    />

                                </Stack>
                                <Stack spacing={1}>
                                    <Typography variant="h5">
                                        {row.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {row.content}
                                    </Typography>
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

MarketingLandingAbout.propTypes = {
    brands: PropTypes.array,
};

