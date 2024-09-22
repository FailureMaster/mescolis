import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { _mock } from 'src/_mock';
import { textGradient } from 'src/theme/styles';
import { useTranslation } from 'src/contexts/TranslationContext';

import Image from 'src/components/image';

import TravelFilters from './travel-filters';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

// ----------------------------------------------------------------------

export default function TravelAbout() {
    const { trans } = useTranslation();

    const smUp = useResponsive('up', 'sm');

    return (
        <Container
            sx={{
                overflow: 'hidden',
                pt: 5,
            }}
        >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" sx={{ mb: 3 }}>
                    {trans('p_couriers_world_title_1')}
                    <Box
                        component="span"
                        sx={{
                            ...textGradient(
                                `90deg, #078DEE 20%, #FFA03F 100%`
                            ),
                        }}
                    >
                        {trans('p_couriers_world_title_2')}
                    </Box>
                </Typography>
                <Typography variant="h4" sx={{ mx: 'auto', color: 'text.secondary' }}>
                    {trans('p_couriers_description')}
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {(smUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
                    <Grid key={img} xs={12} sm={3} md={index === 0 ? 6 : 2}>
                        <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2, width: 1 }} />
                    </Grid>
                ))}
            </Grid>

            <TravelFilters
                sx={{
                    mt: 5,
                    mb: 3
                }}
            />
        </Container>
    );
}
