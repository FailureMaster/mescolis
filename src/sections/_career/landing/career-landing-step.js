import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

const STEPS = [
    {
        title: 'Shipping Packages',
        description: 'Ship envelopes, packs, or packages using top-rated carrier services, including options for ground, second-day, and next-day delivery.',
        icon: '/assets/home/shipping_package.svg',
    },
    {
        title: 'LTL Freight',
        description: 'Provides Less-Than-Truckload (LTL) Freight for larger items on pallets, letting you compare and select from trusted North American freight carriers.',
        icon: '/assets/home/ltl_freight.svg',
    },
    {
        title: 'International Shipping',
        description: 'Ship domestically, to the United States, or globally with services to over 220 countries and territories using your preferred carriers.',
        icon: '/assets/home/international_shipping_package.svg',
    },
];

// ----------------------------------------------------------------------

export default function CareerLandingStep() {
    return (
        <Box
            sx={{
                textAlign: 'center',
                pt: { xs: 10, md: 15 },
                pb: { xs: 2, md: 4 },
            }}
        >
            <Container>
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    No. 1 Shipping Company in The World
                </Typography>

                <Typography variant="h2" sx={{ my: 3 }}>
                    Whats in Mescolis
                </Typography>

                <Typography sx={{ color: 'text.secondary', maxWidth: 480, mx: 'auto' }}>
                    Mescolis user-friendly tools make it easy to process and manage shipments, leaving you free to take care of your business.
                    Get rates, print labels, ship, track and manage shipments, all in one place.
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        my: { xs: 8, md: 10 },
                        gap: { xs: 8, md: 5 },
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                    }}
                >
                    {STEPS.map((value, index) => (
                        <div key={value.title}>
                            <Image
                                src={value.icon}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    mx: 'auto',
                                    color: 'primary.main',
                                }}
                            />


                            <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                                {value.title}
                            </Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {value.description}
                            </Typography>
                        </div>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}
