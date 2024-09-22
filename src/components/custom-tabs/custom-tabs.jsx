import PropTypes from 'prop-types';

import NoSsr from '@mui/material/NoSsr';
import { tabClasses } from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

import { stylesMode } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function CustomTabs({ children, slotProps, sx, ...other }) {
  const theme = useTheme();

  return (
    <Tabs
      sx={{
        gap: 0,
        minHeight: 38,
        flexShrink: 0,
        alignItems: 'center',
        bgcolor: 'background.neutral',
        marginRight: 0,
        [`& .${tabsClasses.scroller}`]: {
          p: 1,
          marginRight: 0,
          ...slotProps?.scroller,
        },
        [`& .${tabsClasses.flexContainer}`]: {
          gap: 0,
          ...slotProps?.flexContainer,
        },
        [`& .${tabsClasses.scrollButtons}`]: {
          borderRadius: 1,
          minHeight: 'inherit',
          ...slotProps?.scrollButtons,
        },
        [`& .${tabsClasses.indicator}`]: {
          py: 1,
          height: 1,
          bgcolor: 'transparent',
          '& > span': {
            width: 1,
            height: 1,
            borderRadius: 1,
            display: 'block',
            bgcolor: '#212b36',
            boxShadow: theme.customShadows.z1,
            [stylesMode.dark]: { bgcolor: 'grey.900' },
            ...slotProps?.indicator,
          },
        },
        [`& .${tabClasses.root}`]: {
          py: 1,
          px: 0,
          zIndex: 1,
          minHeight: 'auto',
          marginRight: 0, // Remove margin here
          // ...slotProps?.tab,
          [`&.${tabClasses.selected}`]: {
            ...slotProps?.selected,
          },
        },
        ...sx,
      }}
      {...other}
      TabIndicatorProps={{
        children: (
          <NoSsr>
            <span />
          </NoSsr>
        ),
      }}
    >
      {children}
    </Tabs>
  );
}

CustomTabs.propTypes = {
  children: PropTypes.node,
  slotProps: PropTypes.shape({
    scroller: PropTypes.string,
    flexContainer: PropTypes.string,
    scrollButtons: PropTypes.string,
    indicator: PropTypes.string,
    // tab: PropTypes.string,
    selected: PropTypes.string,
  }),
  sx: PropTypes.object,
};