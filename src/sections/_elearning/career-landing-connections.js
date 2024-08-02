import { useRef } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { varHover, varTranHover } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
    {
        name: 'Describe Your Shipment',
        icon: '/assets/icons/service/number-1.png',
        content: 'Our smart address lookup tool makes entering addresses easy. Just start typing, and we’ll automatically complete the rest of the address for you.',
        path: '#',
    },
    {
        name: 'Compare & Select Rates',
        icon: '/assets/icons/service/number-2.png',
        content: 'See the rates available from trusted couriers for your specific shipment details. Mecolis provides all the information you need to make an informed selection.',
        path: '#',
    },
    {
        name: 'Select Pickup or Drop Off',
        icon: '/assets/icons/service/number-3.png',
        content: 'Easily schedule pickups during processing. Intelligent scheduling means greater accuracy. Manage your pickups with My Pickups.',
        path: '#',
    },
    {
        name: 'Describe Your Shipment',
        icon: '/assets/icons/service/number-4.png',
        content: 'Mecolis automatically generates the label and commercial invoice you need to attach to your shipment.',
        path: '#',
    },
];

// ----------------------------------------------------------------------

export default function CareerLandingConnections() {

    const mdUp = useResponsive('up', 'md');

    return (


        <Container
            sx={{
                py: { xs: 5, md: 10 },
                position: 'relative'
            }}
        >
            {mdUp && (
                <SvgColor
                    src="/assets/illustrations/illustration_map.svg"
                    sx={{
                        top: 80,
                        right: -64,
                        width: 780,
                        height: 646,
                        opacity: 0.64,
                        position: 'absolute',
                        color: 'text.disabled',
                    }}
                />
            )}

            <Stack
                spacing={3}
                sx={{
                    maxWidth: 700,
                    mb: { xs: 8, md: 5 },
                    mx: { xs: 'auto', md: 'unset' },
                    textAlign: { xs: 'center', md: 'unset' },
                }}
            >
                <Typography variant="h3">Ship Packages and Envelopes in Just One Minute</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                Thanks to Mecolis’s simple yet powerful interface, you’ll find you can process shipments in as little as one minute with the most trusted couriers.
                </Typography>
            </Stack>

            <Box
                sx={{
                    gap: 4,
                    display: 'grid',
                    alignItems: 'center',
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
    const { name, icon, content, path } = service;

    return (
        <Card
            sx={{
                px: 4,
                py: 5,
                textAlign: 'center',
                ...(index === 1 && {
                    py: { xs: 5, md: 8 },
                }),
                ...(index === 2 && {
                    py: { xs: 5, md: 10 },
                    boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                }),
            }}
        >
            <Image
                src={icon}
                sx={{
                    width: 60,
                    height: 60,
                    mx: 'auto',
                    color: (theme) => theme.palette[COLORS[index]].main,
                }}
            />

            <Stack spacing={1} sx={{ my: 5 }}>
                <TextMaxLine variant="h6">{name}</TextMaxLine>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {content}
                </Typography>
            </Stack>

            <IconButton
                component={RouterLink}
                href={path}
                color={
                    (index === 0 && 'primary') ||
                    (index === 1 && 'secondary') ||
                    (index === 2 && 'success') ||
                    'warning'
                }
            >
                <Iconify icon="carbon:direction-straight-right" />
            </IconButton>
        </Card>
    );
}

ServiceItem.propTypes = {
    index: PropTypes.number,
    service: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
        content: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
};
