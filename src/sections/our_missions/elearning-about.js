import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'src/contexts/TranslationContext';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function ElearningAbout() {
    const { trans } = useTranslation();

    return (
        <Container
            sx={{
                overflow: 'hidden',
                py: 10,
            }}
        >
            <Grid
                container
                spacing={{ xs: 2, md: 8 }}
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >

                <Grid>
                    <Typography variant="h3" sx={{ mb: 3 }}>
                       {trans('p_our_mission_about_title')}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                       {trans('p_our_mission_about_description_1')}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {trans('p_our_mission_about_description_2')}
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 4 }}>
                        {trans('p_our_mission_about_description_3')}
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                columnSpacing={{ xs: 0, md: 3 }}
                rowSpacing={{ xs: 5, md: 0 }}
                justifyContent="space-between"
            >
                <Grid
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Image
                        src="/assets/our-missions/great_place_work.png"
                        alt="Logo CCA"
                        sx={{
                            height: { xs: 200, md: 200 },
                        }}
                    />
                </Grid>

                <Grid xs={12} sm={9} md={10}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        {trans('p_our_mission_about_title_2')}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {trans('p_our_mission_about_description_4')}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        {trans('p_our_mission_about_description_5')}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
