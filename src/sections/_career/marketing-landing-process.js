import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { textGradient } from 'src/theme/styles';
import { useTranslation } from 'src/contexts/TranslationContext';

import Image from 'src/components/image';


// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

export default function MarketingLandingProcess() {
    const { trans } = useTranslation();

    const SERVICES = [
        {
            name: trans('home_process_step_1'),
            description: trans('home_process_step_1_description'),
            icon: '/assets/icons/steps/step1.svg',
        },
        {
            name: trans('home_process_step_2'),
            description: trans('home_process_step_2_description'),
            icon: '/assets/icons/steps/step2.svg',
        },
        {
            name: trans('home_process_step_3'),
            description: trans('home_process_step_3_description'),
            icon: '/assets/icons/steps/step3.svg',
        },
        {
            name: trans('home_process_step_4'),
            description: trans('home_process_step_4_description'),
            icon: '/assets/icons/steps/step4.svg',
        },
    ];

    // ----------------------------------------------------------------------

    return (
        <Container
            sx={{
                py: { xs: 5, md: 10 },
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    maxWidth: 480,
                    mb: { xs: 8, md: 5 },
                    mx: { xs: 'auto', md: 'unset' },
                    textAlign: { xs: 'center', md: 'unset' },
                }}
            >
                <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {trans('home_process_subtitle')}
                </Typography>
                <Typography variant="h2" sx={{ mb: 3 }}>
                    {trans('home_process_title')}
                    <Box
                        component="span"
                        sx={{
                            ...textGradient(
                                `90deg, #078DEE 20%, #FFA03F 100%`
                            ),
                        }}
                    >
                        {trans('home_process_title_highlight')}
                    </Box>
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    {trans('home_process_description')}
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
    const { name, icon, description } = service;

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
                }}
            />

            <Typography variant="h5" sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
                {name}
            </Typography>
            {description}
        </Card>
    );
}

ServiceItem.propTypes = {
    index: PropTypes.number,
    service: PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        description: PropTypes.string,
    }),
};
