import { forwardRef } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Box from '@mui/material/Box';
import { iconifyClasses } from './classes';

// ----------------------------------------------------------------------

export const FlagIcon = forwardRef(({ code, className, sx, ...other }, ref) => {
  const baseStyles = {
    width: 26,
    height: 20,
    flexShrink: 0,
    overflow: 'hidden',
    borderRadius: '5px',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    bgcolor: 'background.neutral',
  };

  if (!code) {
    return null;
  }

  return (
    <Box
      ref={ref}
      component="span"
      className={iconifyClasses.flag.concat(className ? ` ${className}` : '')}
      sx={{ ...baseStyles, ...sx }}
      {...other}
    >
      <Box
        component="img"
        loading="lazy"
        alt={code}
        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code?.toUpperCase()}.svg`}
        sx={{
          width: 1,
          height: 1,
          maxWidth: 'unset',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
});

// Add PropTypes validation
FlagIcon.propTypes = {
  code: PropTypes.string.isRequired,
  className: PropTypes.string,
  sx: PropTypes.object,
};

FlagIcon.defaultProps = {
  className: '',
  sx: {},
};
