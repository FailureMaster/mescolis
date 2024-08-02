import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { height } from '@mui/system';
// ----------------------------------------------------------------------

export default function ElearningLandingIntroduce() {
    const mdUp = useResponsive('up', 'md');

    return (
        <Container
            sx={{
                py: { xs: 8, md: 15 },
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
                            src="/assets/images/course/21_Shipping.svg"
                            ratio="4/6"
                            sx={{ 
                                borderRadius: 2,
                                height: '500px',
                            }}
                        />
                    </Grid>
                )}

                <Grid xs={12} md={6} lg={6}>
                    <Typography variant="h3" sx={{ mb: 3 }}>
                        MesColis: Quick, Simple, and Cost-Free.
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        No Hidden Fees. No Subscriptions. No Minimum Volumes.
                    </Typography>

                    <Typography sx={{ textAlign: 'right' }}>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            endIcon={<Iconify icon="carbon:chevron-right" />}
                            sx={{
                                borderRadius: '24px 12px', // Rounded corners
                                color: '#fff', // Text color
                                padding: '10px 30px', // Padding for size
                                textTransform: 'none', // Disable uppercase text
                                mt: 3,
                            }}
                        >
                        Try First Quote
                    </Button>

                    </Typography>

                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        sx={{ mt: { xs: 4, md: 6 } }}
                    >
                        <Stack spacing={3}>
                            <Image
                                src="/assets/icons/mescolis_quote_1.png"
                                sx={{ width: '100%' }}
                            />
                        </Stack>

                        <Stack spacing={3}>
                            <Image
                                src="/assets/icons/mescolis_quote_2.png"
                                sx={{ width: '100%' }}
                            />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
