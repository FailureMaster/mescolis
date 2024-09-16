import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const singleLogo = (
    <Box
      component="img"
      src="/assets/logo/mescolis-logo.png" // => Your path in public folder
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
      src="/assets/logo/mescolis-logo.png" // => Your path in public folder
      sx={{
        width: '150px !important',
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
          width: single ? 64 : 75,
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
};

export default memo(Logo);
