import Button from '@mui/material/Button';

import { RouterLink } from 'src/routes/components';

// import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

export function SignInButton({ ...other }) {
  return (
    <Button
      component={RouterLink}
      href=''
      variant="outlined"

      {...other}
    >
      Sign in
    </Button>
  );
}
