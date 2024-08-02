import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

export default function MarketingNewsletter({ sx, ...other }) {
    return (
        <Box sx={{ py: 8, bgcolor: 'background.neutral', ...sx }} {...other}>
            <Container>
                <Stack
                    spacing={3}
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ xs: 'column', md: 'row' }}
                >
                    <Stack
                        spacing={3}
                        alignItems="center"
                        direction={{ xs: 'column', md: 'row' }}
                        sx={{ textAlign: { xs: 'center', md: 'left' } }}
                    >
                        <Stack spacing={1}>
                            <Typography variant="h4">Create a Free Account</Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                There are no hidden fees, no application forms, and no volume commitments. Get started now and see how easy it is to save time and money on your shipping with MesColis.
                            </Typography>
                        </Stack>
                    </Stack>

                    <TextField
                        fullWidth
                        hiddenLabel
                        placeholder="Enter your email"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button
                                        size="large"
                                        variant="contained"
                                        sx={{
                                            height: 54,
                                            borderTopLeftRadius: 0,
                                            borderBottomLeftRadius: 0,
                                            bgcolor: 'primary.main',
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </InputAdornment>
                            ),
                            sx: { pr: 0 },
                        }}
                        sx={{ maxWidth: 466 }}
                    />
                </Stack>
            </Container>
        </Box>
    );
}

MarketingNewsletter.propTypes = {
    sx: PropTypes.object,
};
