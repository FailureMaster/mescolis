import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
import { he } from 'date-fns/locale';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
    { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
    { title: 'Awards', total: 20, icon: 'carbon:trophy' },
    { title: 'Shipment Delivered', total: 20000, icon: 'carbon:data-vis-4' },
    { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
];

const LISTS = [
    'Fastest Delivery',
    'Secure & Safe',
    'Affordable Price',
    'Customer Support',
    'Global Reach',
    'World-wide Shipping',
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

                <Grid xs={12} md={6} lg={6} sx={{
                    mb: { xs: 5, md: 0 },
                    pr: { xs: 0, md: 8 },
                }}>
                    <Image alt="teams" src="/assets/images/marketing/melcoris_hero.png" sx={{
                        margin: 'auto',
                        height: { xs: '100%', md: 420 },
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
                    {/* <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                        Discounted Shipping with Top Couriers
                    </Typography> */}

                    <Typography variant="h2" sx={{ my: 3 }}>
                        Best
                        <Box component="span" sx={{ color: 'primary.main' }}>
                            {` Shipping `}
                        </Box>
                        Solutions
                    </Typography>

                    <Typography sx={{ mt: 3, mb: 3, color: 'text.secondary' }}>
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

                    <Button
                        variant="outlined"
                        color="inherit"
                        size="large"
                        endIcon={<Iconify icon="carbon:chevron-right" />}
                        sx={{ mt: 3 }}
                    >
                        Try Your First Quote
                    </Button>
                </Grid>
            </Grid>

            {/* <Box
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
            </Box> */}
        </Container>
    );
}
