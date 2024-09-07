import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { useBoolean } from 'src/hooks/use-boolean';
import { _tours, _mock } from 'src/_mock';

import { fShortenNumber } from 'src/utils/format-number';

import { textGradient } from 'src/theme/styles';
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import TravelFilters from './travel-filters';
import TravelTourList from './travel-tour-list';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
    { name: 'Air tickets sold', number: 130 },
    { name: 'Tours booked', number: 196 },
    { name: 'Site visitors', number: 10679 },
    { name: 'Verified hotels', number: 877 },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
    const smUp = useResponsive('up', 'sm');

    const theme = useTheme();

    const loading = useBoolean(true);

    return (
        <Container
            sx={{
                overflow: 'hidden',
                pt: 5,
            }}
        >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                    Find your courier in
                    <Box
                        component="span"
                        sx={{
                            ...textGradient(
                                `90deg, #078DEE 20%, #FFA03F 100%`
                            ),
                        }}
                    >
                        &nbsp;Rest of the world
                    </Box>

                </Typography>
                <Typography variant="h4" sx={{ mx: 'auto', color: 'text.secondary' }}>
                    Compare the top shipping couriers and save up to 76% every time you ship.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {(smUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
                    <Grid key={img} xs={12} sm={3} md={index === 0 ? 6 : 2}>
                        <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2, width: 1 }} />
                    </Grid>
                ))}
            </Grid>

            <TravelFilters
                sx={{
                    mt: 5,
                    mb: 3
                }}
            />

            {/* <TravelTourList tours={_tours} loading={loading.value} /> */}

        </Container>
    );
}
