import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
    {
        title: 'Reliable Shipping Solutions',
        description: 'Experience fast and secure shipping with our reliable delivery services, ensuring your packages arrive safely and on time.',
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
        iconColor: 'secondary',
    },

    {
        title: 'Eco-Friendly Transportation',
        description: 'Choose our eco-friendly transportation options to reduce your carbon footprint while ensuring efficient and responsible delivery.',
        iconColor: 'primary',
    },
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
                    Fast, Easy, and Free.
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
                        gap: { xs: 4, md: 8 },
                        gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                    }}
                >
                    <Stack spacing={{ xs: 4, md: 10 }}>
                        {BENEFITS.slice(0, 2).map((benefit, index) => (
                            <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
                        ))}
                    </Stack>

                    {mdUp && <Image alt="benefits" src="/assets/illustrations/smart-delivery.svg" sx={{
                        width: 450,
                        margin: 'auto',
                    }} />}

                    <Stack spacing={{ xs: 4, md: 10 }}>
                        {BENEFITS.slice(-2).map((benefit, index) => (
                            <BenefitItem key={benefit.title} benefit={benefit} index={index} />
                        ))}
                    </Stack>
                </Box>
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
            direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
            sx={{
                ...(reverse && {
                    textAlign: { md: 'right' },
                }),
                ...(index === 1 && {
                    pl: { md: 6 },
                    ...(reverse && {
                        pl: { md: 0 },
                        pr: { md: 6 },
                    }),
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
                <Typography variant="h5" sx={{ fontSize: 24 }}>{title}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 16 }}>
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
