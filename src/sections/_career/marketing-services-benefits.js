import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { max } from 'date-fns';
import { width } from '@mui/system';

// ----------------------------------------------------------------------

const BENEFITS = [
    {
        title: 'Reliable Shipping Solutions',
        description: 'Experience fast and secure shipping with our delivery services, ensuring your packages arrive safely and on time.',
        iconColor: 'primary',
    },
    {
        title: 'International Logistics',
        description: 'Simplify global trade with our international logistics solutions, offering seamless and efficient worldwide delivery.',
        iconColor: 'secondary',
    },
    {
        title: 'Customized Freight Services',
        description: 'Get tailored freight services that fit your needs, with flexible options for air, sea, or land transport.',
        iconColor: 'primary',
    },
    {
        title: 'Eco-Friendly Transportation',
        description: 'Choose our eco-friendly transportation options to reduce your carbon footprint with efficient and responsible delivery.',
        iconColor: 'secondary',
    },
];


const ROWS = [
    {
        label: 'Carrier List Rate',
        total: 108.58,
        content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
    },
    {
        label: 'With ShipTime',
        total: 44.18,
        content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
    },
    // {
    //     label: 'years of experience',
    //     total: 20,
    //     content: 'Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.',
    // },
];

// ----------------------------------------------------------------------

export default function MarketingServicesBenefits() {
    const mdUp = useResponsive('up', 'md');

    return (
        <Box
            sx={{
                bgcolor: 'background.neutral',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container>

                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    MesColis is
                    <Box component="span" sx={{ color: 'primary.main' }}>
                        {` Fast, Easy, and Free. `}
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        mt: 3,
                        mx: 'auto',
                        opacity: 0.72,
                        maxWidth: 480,
                        textAlign: 'center',
                        mb: { xs: 8, md: 10 },
                    }}
                >
                    No Extra Fees. No Memberships. No Volume Commitments.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        alignItems: 'center',
                        gap: { xs: 2, md: 4 },
                        gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                    }}
                >
                    <Stack spacing={{ xs: 4, md: 10 }}>
                        {BENEFITS.slice(0, 2).map((benefit, index) => (
                            <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
                        ))}
                    </Stack>

                    {/* {mdUp && <Image alt="benefits" src="/assets/illustrations/smart-delivery.svg" sx={{
                        maxWidth: 480,
                        width: '100%',
                        margin: 'auto',
                    }} />} */}

                    {/* {mdUp && <Image alt="benefits" src="/assets/illustrations/mescolisrates.png" sx={{
                        // maxWidth: 480,
                        width: '100%',
                        margin: 'auto',
                    }} />} */}

                    {mdUp && <Stack spacing={1.5}>
                        <Typography variant="subtitle1" sx={{ mx: 'auto' }}>
                            Toronto to Dallas, 1 LB
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, borderStyle: 'dashed' }}
                        />

                        <Stack

                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 108.58 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    Carrier List Rate
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>44.18</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    With MesColis
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Typography variant="caption" sx={{ mx: 'auto' }}>
                            *as of February 23, 2024
                        </Typography>


                        <Typography variant="subtitle1" sx={{ mx: 'auto', mt: 4 }}>
                            Montreal to Halifax, 6 LBS
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4', ml: 1 }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 74.74 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4', mr: 1 }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    Carrier List Rate
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150 }}>
                                <Stack direction="row">
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>33.84</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    With MesColis
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Typography variant="caption" sx={{ mx: 'auto' }}>
                            *as of February 23, 2024
                        </Typography>


                    </Stack>}

                    {/* <Stack spacing={5}>
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
                                    <Stack direction="row">
                                        <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                                        <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                            +
                                        </Box>
                                    </Stack>

                                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                                        {row.label}
                                    </Typography>
                                </Stack>

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {row.content}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack> */}

                    <Stack spacing={{ xs: 4, md: 10 }}>
                        {BENEFITS.slice(-2).map((benefit, index) => (
                            <BenefitItem key={benefit.title} benefit={benefit} index={index} />
                        ))}
                    </Stack>
                </Box>

                {!mdUp && <Grid
                    container
                    sx={{

                        display: 'grid',
                        alignItems: 'flex-end',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                        },
                        mt: 4
                    }}
                >

                    <Grid md={6} >
                        <Typography variant="subtitle1" sx={{ textAlign: 'center', pb: 1 }}>
                            Toronto to Dallas, 1 LB
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, mb: 2, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>

                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 108.58 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    Carrier List Rate
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>

                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>
                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>44.18</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    With MesColis
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack sx={{ pt: 2, pb: 2 }}>
                            <Typography variant="caption" sx={{ textAlign: 'center' }}>
                                *as of February 23, 2024
                            </Typography>
                        </Stack>


                    </Grid>

                    <Grid md={6} >
                        <Typography variant="subtitle1" sx={{ textAlign: 'center', pb: 1 }}>
                            Montreal to Halifax, 6 LBS
                        </Typography>

                        <Divider
                            flexItem
                            orientation="horizontal"
                            sx={{ mx: 6, mb: 2, borderStyle: 'dashed' }}
                        />

                        <Stack
                            direction="row"
                            alignItems="center"
                            divider={
                                <Divider
                                    flexItem
                                    orientation="vertical"
                                    sx={{ ml: 3, mr: 3, borderStyle: 'dashed' }}
                                />
                            }
                            sx={{ mx: 'auto', textAlign: 'center' }}
                        >
                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>

                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px', fontWeight: '500' }}> 77.74 </Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    Carrier List Rate
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>

                            <Stack spacing={1} sx={{ width: 1, maxWidth: 150, mx: 'auto' }}>
                                <Stack direction="row" sx={{ mx: 'auto' }}>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        $
                                    </Box>
                                    <Typography variant="h3" sx={{ mx: '2px' }}>33.84</Typography>
                                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                                        *
                                    </Box>
                                </Stack>
                                <Typography variant="subtitle2" sx={{ color: '' }}>
                                    With MesColis
                                </Typography>
                                <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2', mx: 'auto' }}>
                                    <Iconify icon="carbon:currency" width={24} sx={{ color: 'primary.main' }} />
                                </Stack>
                            </Stack>
                        </Stack>

                        <Stack sx={{ pt: 2, pb: 2 }}>
                            <Typography variant="caption" sx={{ textAlign: 'center' }}>
                                *as of February 23, 2024
                            </Typography>
                        </Stack>


                    </Grid>

                </Grid>}


                <Stack alignItems="center">
                    <Button
                        color="inherit"
                        size="large"
                        variant="outlined"
                        sx={{ mt: 5 }}
                    >
                        Try your first quote
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

// ----------------------------------------------------------------------

function BenefitItem({ benefit, reverse, index }) {
    const { title, description, iconColor } = benefit;

    return (
        <Stack
            spacing={1}
            direction={{
                xs: 'row',
                md: 'row',
            }}
            sx={{
                ...(reverse && {
                    textAlign: { md: 'left' },
                }),
            }}
        >
            <Box
                sx={{
                    m: 1,
                    width: 16,
                    height: 16,
                    flexShrink: 0,
                    borderRadius: '50%',
                    background: (theme) =>
                        `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    ...(iconColor === 'secondary' && {
                        background: (theme) =>
                            `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                    }),
                    ...(iconColor === 'success' && {
                        background: (theme) =>
                            `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
                    }),
                }}
            />

            <Stack spacing={1}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </Stack>

        </Stack>
    );
}

BenefitItem.propTypes = {
    benefit: PropTypes.shape({
        description: PropTypes.string,
        iconColor: PropTypes.string,
        title: PropTypes.string,
    }),
    index: PropTypes.number,
    reverse: PropTypes.bool,
};
