import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import Image from 'src/components/image';
import { useTranslation } from 'src/contexts/TranslationContext';

// ----------------------------------------------------------------------

export default function TravelLandingToursByCity({ tours }) {
    const { trans } = useTranslation();

    const mdUp = useResponsive('up', 'md');

    const viewAllBtn = (
        <Button
            component={RouterLink}
            href={paths.travel.tours}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
        >
            {trans('p_couriers_view_all_button')}
        </Button>
    );

    return (
        <Container
            sx={{
                pb: 10,
            }}
        >
            <Box
                sx={{
                    gap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    },
                }}
            >
                {tours.map((tour) => (
                    <TourItem key={tour.id} tour={tour} />
                ))}
            </Box>

            {!mdUp && (
                <Stack alignItems="center" sx={{ mt: 8 }}>
                    {viewAllBtn}
                </Stack>
            )}
        </Container>
    );
}

TravelLandingToursByCity.propTypes = {
    tours: PropTypes.array,
};

// ----------------------------------------------------------------------

function TourItem({ tour }) {
    const { coverUrl2 } = tour;

    return (
        <Link component={RouterLink} href='' color="inherit" underline="none">
            <Paper
                variant="outlined"
                sx={{
                    p: 3,
                    borderRadius: 2,
                    cursor: 'pointer',
                    bgcolor: 'background.default',
                    '&:hover': {
                        boxShadow: (theme) => theme.customShadows.z24,
                        bgcolor: 'background.paper',
                    },
                }}
            >
                <Stack direction="row" alignItems="center" spacing={2.5}>

                    <Image src={coverUrl2} sx={{ width: '100%', height: 64, mx: 'auto' }} />

                </Stack>
            </Paper>
        </Link>
    );
}

TourItem.propTypes = {
    tour: PropTypes.shape({
        coverUrl: PropTypes.string,
        coverUrl2: PropTypes.string,
    }),
};
