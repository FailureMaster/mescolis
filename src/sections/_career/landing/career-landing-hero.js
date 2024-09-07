import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { inputClasses } from '@mui/material/Input';
import { alpha, useTheme } from '@mui/material/styles';
import { filledInputClasses } from '@mui/material/FilledInput';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _brands } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';



import { CustomTabs } from 'src/components/custom-tabs';
import { useTabs } from 'src/hooks/use-tabs';
import { fontSize, fontWeight, margin, padding } from '@mui/system';
// import { UserNewEditForm } from './user-new-edit-form';
import MarketingContactForm from './marketing-contact-form';
import FilterKeyword from '../filters/filter-keyword';
import FilterLocation from '../filters/filter-location';
// ----------------------------------------------------------------------

const TABS = [
    { value: 'package', label: 'Package' },
    { value: 'envelope', label: 'Envelope' },
    { value: 'ltl_freight', label: 'LTL (Freight)' },
];

// ----------------------------------------------------------------------

export default function CareerLandingHero() {
    const theme = useTheme();
    const tabs = useTabs('package');
    const mdUp = useResponsive('up', 'md');
    const smUp = useResponsive('up', 'sm');

    const [filters, setFilters] = useState({
        filterKeyword: null,
        filterLocation: null,
        filterLocation2: null,
    });
    const handleChangeKeyword = useCallback(
        (newValue) => {
            setFilters({
                ...filters,
                filterKeyword: newValue,
            });
        },
        [filters]
    );
    const handleChangeLocation = useCallback(
        (newValue) => {
            setFilters({
                ...filters,
                filterLocation: newValue,
            });
        },
        [filters]
    );
    const handleChangeLocation2 = useCallback(
        (newValue) => {
            setFilters({
                ...filters,
                filterLocation2: newValue,
            });
        },
        [filters]
    );
    const renderFilters = (
        <Stack
            spacing={{ xs: 1, md: 0 }}
            direction={{ xs: 'column', md: 'row' }}
            sx={{
                p: { xs: 1, md: 2 },
                borderRadius: 1,
                bgcolor: 'common.white',
                alignItems: { md: 'center' },
                justifyContent: { md: 'center' },
                marginTop: 1,
            }}
        >
            <MarketingContactForm />
        </Stack>
    );

    const renderSummary = (
        <Stack
            spacing={3}
            direction={{ xs: 'column', md: 'row' }}
            divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
            sx={{}}
        >
            <Stack
                spacing={{ md: 3 }}
                direction="row"
                divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
            >
                <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
                    <Typography variant="h4">{fShortenNumber(2000000)}+</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.48 }}>
                        Jobs
                    </Typography>
                </Stack>

                <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
                    <Typography variant="h4">{fShortenNumber(500000)}+</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.48 }}>
                        Successful Hiring
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                spacing={{ md: 3 }}
                direction="row"
                divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
            >
                <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
                    <Typography variant="h4">{fShortenNumber(250000)}+</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.48 }}>
                        Partners
                    </Typography>
                </Stack>

                <Stack spacing={0.5} sx={{ color: 'common.white', width: { xs: 0.5, md: 'auto' } }}>
                    <Typography variant="h4">{fShortenNumber(156000)}+</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.48 }}>
                        Employee
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );

    const renderBrands = (
        <Stack
            flexWrap="wrap"
            direction="row"
            alignItems="center"
            sx={{
                mt: { md: 1 },
            }}
        >
            {_brands.slice(0, 4).map((brand) => (
                <Box
                    key={brand.id}
                    sx={{
                        lineHeight: 0,
                        my: { xs: 1.5, md: 0.5 },
                        mr: { md: 3 },
                        width: { xs: 0.5, md: 'auto' },
                        '&:last-of-type': {
                            mr: 0,
                        },
                    }}
                >
                    <SvgColor
                        src={brand.image}
                        sx={{
                            width: 94,
                            height: 28,
                            color: 'text.disabled',
                        }}
                    />
                </Box>
            ))}
        </Stack>
    );

    const renderTabs = (
        <CustomTabs
            value={tabs.value}
            onChange={tabs.onChange}
            variant="fullWidth"
            slotProps={{ tab: { px: 0 } }}
            sx={{
                fontWeight: 400,
                borderRadius: 1,
                marginTop: 2,
                marginBottom: 1,
                '& .Mui-selected': {
                    color: 'white',
                },
            }}
        >
            {TABS.map((tab) => (
                <Tab key={tab.value} value={tab.value} label={tab.label} sx={{ fontWeight: 400 }} />
            ))}
        </CustomTabs>
    );


    return (
        <Box
            sx={{
                ...bgGradient({
                    color: mdUp
                        ? alpha(theme.palette.grey[900], 0.8) // Darker color on larger screens
                        : alpha(theme.palette.grey[400], 0.4), // Lighter color on mobile
                    imgUrl: '/assets/background/overlay_2.jpg',
                }),
                pt: 15,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                pb: { xs: 10, md: 15 },
                display: { md: 'flex' },
                minHeight: { md: '100vh' },
            }}
        >
            <Container>
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid xs={12} md={5} lg={4}>
                        <Stack
                            spacing={5}
                            sx={{
                                textAlign: { xs: 'center', md: 'unset' },
                            }}
                        >
                            <Stack sx={{}}>
                                <Typography variant="h1" sx={{ color: 'primary.main' }}>
                                    MesColis
                                </Typography>
                                <Typography variant="h3" sx={{ color: 'common.white' }}>
                                    Express Courier Shipping
                                </Typography>
                                <Typography variant="h4" sx={{ color: 'lightgray' }}>
                                    Save up to 70%
                                </Typography>
                                {renderTabs}
                                {renderFilters}
                            </Stack>

                            {/* {renderBrands} */}

                            {/* {renderSummary} */}
                        </Stack>
                    </Grid>

                    {mdUp && (
                        <Grid xs={12} md={6} lg={6}>
                            <CareerHeroIllustration />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box >
    );
}
