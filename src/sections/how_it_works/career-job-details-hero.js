import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Paper from '@mui/material/Paper';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import getVariant from './get-variant';

import { CustomTabs } from 'src/components/custom-tabs';
import { useTabs } from 'src/hooks/use-tabs';

import MarketingContactForm from './marketing-contact-form';

// ----------------------------------------------------------------------

const TABS = [
    { value: 'package', label: 'Package' },
    { value: 'envelope', label: 'Envelope' },
    { value: 'ltl_freight', label: 'LTL (Freight)' },
];

export default function CareerJobDetailsHero({ job }) {
    const theme = useTheme();
    const tabs = useTabs('package');

    const [favorite, setFavorite] = useState(job.favorited);

    const handleChangeFavorite = useCallback((event) => {
        setFavorite(event.target.checked);
    }, []);


    const [open, setOpen] = useState(false); // State to control the modal

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const renderTabs = (
        <CustomTabs
            value={tabs.value}
            onChange={tabs.onChange}
            variant="fullWidth"
            slotProps={{ tab: { px: 0 } }}
            sx={{
                fontWeight: 400,
                borderRadius: 1,
                marginBottom: 2,
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
                    color: alpha(theme.palette.grey[900], 0.8),
                    imgUrl: '/assets/background/overlay_2.jpg',
                }),
                pt: 5,
                pb: 10,
            }}
        >
            <Container>
                <CustomBreadcrumbs
                    links={[
                        { name: 'Home', href: '/' },
                        { name: 'How it Works' },
                    ]}
                    sx={{
                        mb: { xs: 5, md: 8 },
                        '& a': {
                            color: 'common.white',
                        },
                    }}
                />

                <Stack
                    spacing={5}
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent={{ md: 'space-between' }}
                >
                    <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
                        <Typography variant="h3" component="h1">
                            {job.slug}
                        </Typography>

                    </Stack>

                    <Stack
                        spacing={2}
                        direction="row"
                        alignItems="flex-start"
                        sx={{ width: 1, maxWidth: 340 }}
                    >
                        <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
                            <Button fullWidth variant="contained" size="large" color="primary"
                                onClick={handleClickOpen}
                            >
                                Try it out. Get a quote.
                            </Button>
                        </Stack>
                    </Stack>

                </Stack>
            </Container>

             {/* Modal Implementation */}
             <AnimatePresence>
                {open && (
                    <Dialog
                        fullWidth
                        maxWidth="xs"
                        open={open}
                        onClose={handleClose}
                        PaperComponent={(props) => (
                            <m.div {...getVariant('fadeIn')}>
                                <Paper {...props}>{props.children}</Paper>
                            </m.div>
                        )}
                    >
                        <DialogTitle>{`Express Courier Shipping`}</DialogTitle>

                        <DialogContent>
                            {renderTabs}
                            <MarketingContactForm />
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button variant="contained" onClick={handleClose} autoFocus>
                                Get Quote
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </AnimatePresence>
        </Box>
    );
}

CareerJobDetailsHero.propTypes = {
    job: PropTypes.shape({
        slug: PropTypes.string,
        favorited: PropTypes.bool,
        category: PropTypes.string,
        location: PropTypes.string,
        totalViews: PropTypes.number,
        deadline: PropTypes.instanceOf(Date),
    }),
};
