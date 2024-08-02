import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import { _mock } from 'src/_mock';
import { bgGradient } from 'src/theme/css';
import ElearningHeroIllustration from 'src/assets/illustrations/elearning-hero-illustration';

import Iconify from 'src/components/iconify';
import { PlayerDialog } from 'src/components/player';

import { CustomTabs } from 'src/components/custom-tabs';
import { useTabs } from 'src/hooks/use-tabs';

import MarketingContactForm from './marketing-contact-form';

// ----------------------------------------------------------------------

const SUMMARY = [
    { value: 14000, label: 'Learners', color: 'warning' },
    { value: 1050, label: 'Courses', color: 'error' },
    { value: 59000, label: 'Graduates', color: 'success' },
];

const TABS = [
    { value: 'package', label: 'Package' },
    { value: 'envelope', label: 'Envelope' },
    { value: 'ltl_freight', label: 'LTL (Freight)' },
];

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
    const theme = useTheme();

    const mdUp = useResponsive('up', 'md');

    const videoOpen = useBoolean();

    const tabs = useTabs('package');

    const renderTabs = (
        <CustomTabs
            value={tabs.value}
            onChange={tabs.onChange}
            variant="fullWidth"
            slotProps={{ tab: { px: 0 } }}
            sx={{
                fontWeight: 400,
                borderRadius: 1,
                marginTop: 4,
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

    return (
        <>
            <Box
                sx={{
                    ...bgGradient({
                        color: alpha(theme.palette.background.default, 0.9),
                        imgUrl: '/assets/background/overlay_1.jpg',
                    }),
                    overflow: 'hidden',
                }}
            >
                <Container
                    sx={{
                        py: 15,
                        display: { sm: 'flex', md: 'flex' },
                        alignItems: { md: 'center', },
                        height: { md: `100vh` },
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid xs={12} md={5} lg={5}>
                            <Stack
                                spacing={5}
                                sx={{
                                    textAlign: { xs: 'center', md: 'unset' },
                                }}
                            >
                                <Stack sx={{ }}>
                                    <Typography variant="h1" sx={{ color: 'primary.main' }}>
                                        Mescolis
                                    </Typography>
                                    <Typography variant="h3" >
                                        World-Wide Shipping Service
                                    </Typography>
                                    {renderTabs}
                                    {renderFilters}
                                </Stack>
                            </Stack>
                        </Grid>

                        {mdUp && (
                            <Grid xs={12} md={7} lg={7}>
                                <ElearningHeroIllustration />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>

            <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
        </>
    );
}
