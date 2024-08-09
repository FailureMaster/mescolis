import { defaultFont } from 'src/theme/core/typography';

// ----------------------------------------------------------------------

export const STORAGE_KEY = 'app-settings';

export const defaultSettings = {
  colorScheme: 'light',
  direction: 'ltr',
  contrast: 'default',
  navLayout: 'vertical',
  primaryColor: 'blue', // original is default. Change to other color as primary color
  navColor: 'integrate',
  compactLayout: true,
  fontFamily: defaultFont,
};
