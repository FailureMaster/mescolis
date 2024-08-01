import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import Image from 'src/components/image';


// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SERVICES = [
    {
        name: 'Warehouse',
        icon: '/assets/icons/steps/step1.svg',
    },
    {
        name: 'Unloading',
        icon: '/assets/icons/steps/step2.svg',
    },
    {
        name: 'Packing',
        icon: '/assets/icons/steps/step3.svg',
    },
    {
        name: 'Delivery',
        icon: '/assets/icons/steps/step4.svg',
    },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
    return (
        <Container
            sx={{
                py: { xs: 5, md: 10 },
            }}
        >
            <Stack
                spacing={3}
                sx={{
                    maxWidth: 480,
                    mb: { xs: 8, md: 5 },
                    mx: { xs: 'auto', md: 'unset' },
                    textAlign: { xs: 'center', md: 'unset' },
                }}
            >
                <Typography variant="h2">Working Process</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                    Thanks to Mescolis simple yet powerful interface, you’ll find you can process shipments in as little as one minute with the most trusted couriers.
                </Typography>
            </Stack>

            <Box
                sx={{
                    gap: 4,
                    display: 'grid',
                    alignItems: 'flex-end',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)',
                    },
                }}
            >
                {SERVICES.map((service, index) => (
                    <ServiceItem key={service.name} service={service} index={index} />
                ))}
            </Box>
        </Container>
    );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
    const { name, icon } = service;

    return (
        <Card
            sx={{
                p: 2,
                color: (theme) => theme.palette[COLORS[index]].darker,
                bgcolor: (theme) => theme.palette[COLORS[index]].light,
                boxShadow: (theme) => `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
                ...(index === 1 && {
                    mb: { md: 2.5 },
                }),
                ...(index === 2 && {
                    mb: { md: 5 },
                }),
                ...(index === 3 && {
                    mb: { md: 7.5 },
                }),
            }}
        >
            <Image
                src={icon}
                sx={{
                    width: 100,
                    // height: 70,
                    // opacity: 0.48,
                }}
            />

            <Typography variant="h5" sx={{ mt: 3, textAlign: 'right' }}>
                {name}
            </Typography>
        </Card>
    );
}

ServiceItem.propTypes = {
    index: PropTypes.number,
    service: PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
};
