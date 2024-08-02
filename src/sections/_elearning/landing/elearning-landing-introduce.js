import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const LISTS = [
    'Fastest Delivery',
    'Secure & Safe',
    'Affordable Price',
    'Customer Support',
    'Global Reach',
    'World-wide Shipping',
];

// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
    const mdUp = useResponsive('up', 'md');

    return (
        <Container
            sx={{
                py: { xs: 2, md: 4 },
            }}
        >
            <Grid
                container
                spacing={3}
                alignItems={{ md: 'center' }}
                justifyContent={{ md: 'space-between' }}
            >
                {mdUp && (
                    <Grid xs={12} md={6} lg={5}>
                        <Image
                            alt="about"
                            src="/assets/images/course/mescolis_about.png"
                            ratio="4/6"
                            sx={{ borderRadius: 2 }}
                        />
                    </Grid>
                )}

                <Grid xs={12} md={6} lg={6}>
                    <Stack spacing={3} sx={{ mb: 5 }}>
                        <Typography variant="h3">Affordable Shipping Solutions</Typography>

                        <Typography sx={{ color: 'text.secondary' }}>
                        Our mission is to provide you with the best shipping solutions that meet your unique needs. We partner with the most trusted couriers in the industry, ensuring that your shipments are handled with care and delivered on time, every time.
                        </Typography>

                        <Stack spacing={2}>
                            {LISTS.map((text) => (
                                <Stack key={text} direction="row" alignItems="center">
                                    <Box
                                        component="span"
                                        sx={{
                                            mr: 2,
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            bgcolor: 'primary.main',
                                        }}
                                    />
                                    {text}
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>

                    <Button
                        component={RouterLink}
                        href={paths.marketing.caseStudies}
                        size="large"
                        color="inherit"
                        variant="outlined"
                        endIcon={<Iconify icon="carbon:chevron-right" />}
                    >
                        Try Your First Quote
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
