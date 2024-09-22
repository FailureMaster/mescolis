import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function CareerJobDetailsHero({ job }) {
    const theme = useTheme();

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
                        { name: 'FAQS' },
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
                    textAlign='center'
                >
                    <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white', mx: 'auto' }}>
                        <Typography variant="h3" component="h1">
                            FAQS
                        </Typography>

                    </Stack>


                </Stack>


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
