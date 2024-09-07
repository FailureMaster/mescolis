import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { fDate } from 'src/utils/format-time';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function CareerJobDetailsHero({ job }) {
    const theme = useTheme();

    const [favorite, setFavorite] = useState(job.favorited);

    const handleChangeFavorite = useCallback((event) => {
        setFavorite(event.target.checked);
    }, []);

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
                        { name: 'Our Missions' },
                    ]}
                    sx={{
                        mb: { xs: 5, md: 8 },
                        '& a': {
                            color: 'common.white',
                        },
                        mx: 'auto',
                    }}
                />

                <Stack
                    spacing={5}
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent={{ md: 'space-between' }}
                    textAlign='center'

                >
                    <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white', mx: 'auto' }}>
                        <Typography variant="h3" component="h1">
                            About MesColis
                        </Typography>
                        <Typography sx={{ maxWidth: { xs: '100%', md: 600 }, }}>
                            MesColis isn’t merely about providing discounted shipping rates—we’re a true partner, offering a best-in-class shipping platform packed with features and backed by our legendary Heroic Support™ team.
                        </Typography>
                    </Stack>


                </Stack>

                {/* <CustomBreadcrumbs
                    links={[
                        { name: 'Home', href: '/' },
                        { name: 'Our Missions' },
                    ]}
                    sx={{
                        mt: { xs: 3, md: 4 },
                        '& a': {
                            color: 'common.white',
                        },
                        justifyContent: 'center',
                    }}
                /> */}


                {/* <Stack
                    spacing={2}
                    direction="row"
                    alignItems="flex-center"
                    sx={{ width: 1, maxWidth: 340, pt: 4, mx: 'auto' }}
                >
                    <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
                        <Button fullWidth variant="contained" size="large" color="primary">
                            Try it out. Get a quote.
                        </Button>
                    </Stack>
                </Stack> */}
            </Container>
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
