import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

function Logo({ single = false, isScrolled = false, sx }) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const logoSrc = isScrolled
    ? '/assets/logo/mescolis_black_logo.png'
    : '/assets/logo/mescolis_white_logo.png';

  const singleLogoSrc = isScrolled
    ? '/assets/logo/mescolis_black_logo_single.png'
    : '/assets/logo/mescolis_white_logo_single.png';

  const singleLogo = (
    <Box
      component="img"
      src={single ? singleLogoSrc : logoSrc}
      sx={{
        width: 80,
        // height: 40,
        cursor: 'pointer',
        ...sx,
      }}
    />
  );

  const fullLogo = (
    <Box
      component="img"
      src={single ? singleLogoSrc : logoSrc}
      sx={{
        width: '180px!important',
        // height: 65,
        cursor: 'pointer',
        ...sx,
      }}
    />
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          // width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
  isScrolled: PropTypes.bool,
};

export default memo(Logo);
