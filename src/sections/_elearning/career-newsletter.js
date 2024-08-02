import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

export default function CareerNewsletter() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                ...bgGradient({
                    color: `${alpha(theme.palette.grey[900], 0.88)}`,
                    imgUrl: '/assets/images/career/career_newsletter.jpg',
                }),
                py: 15,
            }}
        >
            <Container>
                <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
                    <Typography variant="h3">Rest Assured with Mecolis’s Premier Customer Care</Typography>

                    <Typography>
                        We prioritize your business needs unlike any single carrier can. Mecolis was established with a strong commitment to exceptional customer care. Our renowned Heroic Support™ team is available via phone or email whenever you need assistance with your Mecolis account.
                    </Typography>

                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        sx={{
                            height: 54,
                        }}
                    >
                        Contact Us Now
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
