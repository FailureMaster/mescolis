import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';
import { useTranslation } from 'src/contexts/TranslationContext';
import { textGradient } from 'src/theme/styles';
// ----------------------------------------------------------------------

export default function CareerLandingStep() {
    const { trans } = useTranslation();

    const STEPS = [
        {
            title: trans('home_about_services_title_1'),
            description: trans('home_about_services_description_1'),
            icon: '/assets/home/shipping_package.svg',
        },
        {
            title: trans('home_about_services_title_2'),
            description: trans('home_about_services_description_2'),
            icon: '/assets/home/ltl_freight.svg',
        },
        {
            title: trans('home_about_services_title_3'),
            description: trans('home_about_services_description_3'),
            icon: '/assets/home/international_shipping_package.svg',
        },
    ];

    // ----------------------------------------------------------------------

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
                   {trans('home_about_subtitle')}
                </Typography>

                <Typography variant="h2" sx={{ my: 3 }}>
                    {trans('home_about_title_1')}
                    <Box
                        component="span"
                        sx={{
                            ...textGradient(
                                `90deg, #078DEE 20%, #FFA03F 100%`
                            ),
                        }}
                    >
                        MesColis
                    </Box>
                    {trans('home_about_title_2')}
                </Typography>

                <Typography sx={{ color: 'text.secondary', maxWidth: 550, mx: 'auto' }}>
                    {trans('home_about_description')}
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
