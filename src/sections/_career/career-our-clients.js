import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Image from 'src/components/image';
import Divider from '@mui/material/Divider';
import Carousel, { useCarousel } from 'src/components/carousel';


// ----------------------------------------------------------------------

export default function CareerOurClients({ brands }) {
    const theme = useTheme();
    const carousel = useCarousel({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: theme.breakpoints.values.md,
                settings: { slidesToShow: 4 },
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
                pt: { xs: 0, md: 0 },
                pb: { xs: 5, md: 10 },
            }}
        >

            <Carousel {...carousel.carouselSettings}>
                {brands.map((brand) => (
                    <Box key={brand.id} sx={{ px: 1.5 }}>
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
                                    width: 106,
                                    height: 32,
                                    mx: 'auto',
                                }}
                            />
                        </Stack>
                    </Box>
                ))}
            </Carousel>

            <Divider sx={{ borderStyle: 'dashed', mt: 10 }} />
        </Container>
    );
}

CareerOurClients.propTypes = {
    brands: PropTypes.array,
};
