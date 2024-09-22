import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import { _mock } from 'src/_mock';

import Button, { buttonClasses } from '@mui/material/Button';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------


const StyledButton = styled(Button)(({ theme }) => ({
    flexShrink: 0,
    padding: '5px 12px',
    // color: theme.palette.common.white,
    // border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
    // background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
    [`& .${buttonClasses.startIcon}`]: {
        marginLeft: 0,
    },
}));

// ----------------------------------------------------------------------

export default function TravelAbout() {

    return (
        <Container
            sx={{
                overflow: 'hidden',
                py: 5,
            }}
        >

            <Grid
                container
                spacing={{ xs: 5, md: 3 }}
                justifyContent="space-between"
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Grid xs={12} md={6} lg={5}>
                    <Box
                        sx={{
                            mb: 2,
                            width: 24,
                            height: 3,
                            borderRadius: 3,
                            bgcolor: 'primary.main',
                            mx: { xs: 'auto', md: 0 },
                        }}
                    />

                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                        Get the Best For Your Shipments
                    </Typography>

                    <Typography variant="h3" sx={{ my: 2 }} >
                        Small Business Discount Shipping Solutions
                    </Typography>

                    <AppStoreButton />


                </Grid>

                <Grid xs={12} md={6} lg={6}>
                    <Typography variant="h4" paragraph>
                        Canadian Federation of Independent Business (CFIB) is Canada’s champion of small business.
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        With the Canadian Federation of Independent Business and Mescolis, you can save time and money on discount shipping – and earn Aeroplan® Points on every dollar you spend.
                        <br />
                        <br />
                        Plus, members get access to more exclusive savings, expert advice on business issues, and a strong voice at all levels of government.
                    </Typography>

                    <Button
                        size="large"
                        color="inherit"
                        endIcon={<Iconify icon="carbon:chevron-right" />}
                        sx={{ my: 3 }}
                    >
                        Get in Touch
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

function AppStoreButton({ ...other }) {
    return (
        <Stack direction="row" flexWrap="wrap" spacing={2} {...other}
            sx={{
                my: 5,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <StyledButton >
                <Image
                    src='/assets/images/travel/home-cfib-en.svg'
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '200px',
                        mx: 'auto',
                        color: 'primary.main',
                    }}
                />
            </StyledButton>

            <StyledButton >
                <Image
                    src='/assets/images/travel/aeroplan.svg'
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: '200px',
                        mx: 'auto',
                        color: 'primary.main',
                    }}
                />
            </StyledButton>
        </Stack >
    );
}
