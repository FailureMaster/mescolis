import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CountUp from 'src/components/count-up';
import { margin, width } from '@mui/system';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
    { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
    { title: 'Awards', total: 20, icon: 'carbon:trophy' },
    { title: 'Shipment Delivered', total: 20000, icon: 'carbon:data-vis-4' },
    { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
];

// ----------------------------------------------------------------------

const StyledIcon = styled('div', {
    shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
    width: 160,
    height: 160,
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    color: theme.palette[color].darker,
    border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
    '&:before': {
        zIndex: 8,
        content: '""',
        borderRadius: '50%',
        position: 'absolute',
        width: 'calc(100% - 48px)',
        height: 'calc(100% - 48px)',
        background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
    },
    '& svg': {
        zIndex: 9,
    },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
    const mdUp = useResponsive('up', 'md');

    return (
        <Container
            sx={{
                pt: {},
                pb: 10,
            }}
        >
            <Grid container spacing={3} justifyContent="space-between" alignItems="center">

                <Grid xs={12} md={6} lg={5} sx={{
                    mb: { xs: 5, md: 0 },
                }}>
                    <Image alt="teams" src="/assets/images/marketing/melcoris_hero.png" sx={{
                        margin: 'auto',
                    }} />
                </Grid>

                <Grid
                    xs={12}
                    md={6}
                    lg={6}
                    sx={{
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                        Discounted Shipping with Top Couriers
                    </Typography>

                    <Typography variant="h2" sx={{ my: 3 }}>
                        Ship for
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {` Less `}
                        </Box>
                    </Typography>

                    <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                        We work with the most trusted couriers you love & trust to provide you with a multitude of discount shipping services.
                        <br />
                        <br />
                        From Purolator to GLS, Canpar, Canada Post, FedEx and more!
                    </Typography>

                    <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        endIcon={<Iconify icon="carbon:chevron-right" />}
                    >
                        Carriers
                    </Button>
                </Grid>
            </Grid>

            <Box
                sx={{
                    mt: 10,
                    textAlign: 'center',
                    display: 'grid',
                    gap: { xs: 5, md: 8 },
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                }}
            >
                {SUMMARY.map((value, index) => (
                    <div key={value.title}>
                        <StyledIcon color={COLORS[index]}>
                            <Iconify icon={value.icon} width={48} />
                        </StyledIcon>

                        <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
                            <CountUp
                                start={value.total / 5}
                                end={value.total}
                                formattingFn={(newValue) => fShortenNumber(newValue)}
                            />
                        </Typography>

                        <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
                    </div>
                ))}
            </Box>
        </Container>
    );
}
