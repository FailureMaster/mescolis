import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function TravelLandingToursByCity({ tours }) {
    const mdUp = useResponsive('up', 'md');

    const viewAllBtn = (
        <Button
            component={RouterLink}
            href={paths.travel.tours}
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
        >
            View All
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
    const { coverUrl2, location } = tour;

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

                    <Image src={coverUrl2} sx={{ width: '100%', height: 64 }} />

                    {/* <Stack spacing={0.5}>
                        <TextMaxLine variant="h6" line={1}>
                            {location}
                        </TextMaxLine>

                    </Stack> */}
                </Stack>
            </Paper>
        </Link>
    );
}

TourItem.propTypes = {
    tour: PropTypes.shape({
        coverUrl: PropTypes.string,
        location: PropTypes.string,
        coverUrl2: PropTypes.string,
    }),
};
