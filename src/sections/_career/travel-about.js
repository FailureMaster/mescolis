import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';

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

    return (
        <Container
            sx={{
                overflow: 'hidden',
                py: 5,
            }}
        >

            <Grid
                container
                spacing={{ xs: 5, md: 3 }}
                justifyContent="space-between"
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Grid xs={12} md={6} lg={5}>
                    <Box
                        sx={{
                            mb: 2,
                            width: 24,
                            height: 3,
                            borderRadius: 3,
                            bgcolor: 'primary.main',
                            mx: { xs: 'auto', md: 0 },
                        }}
                    />
                    <Typography variant="h3">
                        Small Business Discount Shipping Solutions
                    </Typography>

                    <Button
                        size="large"
                        color="inherit"
                        endIcon={<Iconify icon="carbon:chevron-right" />}
                        sx={{ my: 5 }}
                    >
                        Get in Touch
                    </Button>
                </Grid>

                <Grid xs={12} md={6} lg={6}>
                    <Typography variant="h4" paragraph>
                        Canadian Federation of Independent Business (CFIB) is Canada’s champion of small business.
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        With the Canadian Federation of Independent Business and Mescolis, you can save time and money on discount shipping – and earn Aeroplan® Points on every dollar you spend.
                        <br />
                        <br />
                        Plus, members get access to more exclusive savings, expert advice on business issues, and a strong voice at all levels of government.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
