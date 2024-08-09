import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerLandingForRecruiters() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              Sleep Easy With Mescolis Best-In-Class Customer Care
            </Typography>

            <Typography variant="h2">Best Support Team </Typography>

            <Typography sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              We take care of your business like no single carrier can. Mescolis was founded with great customer care as its core focus.
              <br />
              <br />
              Our legendary Heroic Support team is there for you by phone or email, whenever you need help with your Mescolis account.
              <br />
              <br />
              Consider us your loyal advocate. No need to call the carrier, we’ll work with them on your behalf, whatever the issue may be.
            </Typography>

          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image alt="support" src="/assets/illustrations/illustration_support.svg" sx={{
                width: 450,

                display: 'block',
                margin: 'auto',
              }} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
