import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '20px',
  position: 'relative',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%)',
  boxShadow: `inset 0px -4px 6px rgba(0, 0, 0, 0.48)`,
}));

// ----------------------------------------------------------------------

function Icon({ content, color, sx, ...other }) {
  return (
    <Box
      sx={{
        p: '2.5px',
        borderRadius: '20px',
        // background: `linear-gradient(to bottom, ${alpha(color, 0.24)} -8%, ${alpha(
        //   color,
        //   0
        // )} 120%)`,
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          bgcolor: color,
          borderRadius: '20px',
          boxShadow: (theme) => `0px 24px 48px ${alpha(theme.palette.common.black, 0.4)}`,
        }}
      >
        <StyledContent sx={{ bgcolor: color }}>
          {/* <StyledShape01 sx={{ bgcolor: color }} /> */}
          {/* <StyledShape02 /> */}
          {content}
        </StyledContent>
      </Box>
    </Box>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  content: PropTypes.node,
  sx: PropTypes.object,
};

export default memo(Icon);
