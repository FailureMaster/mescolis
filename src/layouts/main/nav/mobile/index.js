import { useEffect } from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useTranslation } from 'src/contexts/TranslationContext';

import { NavBasicMobile } from 'src/components/nav-basic';
import NavList from './nav-list';
import { NAV } from '../../../config-layout';


// ----------------------------------------------------------------------

export default function NavMobile({ data }) {
    const pathname = usePathname();

    const mobileOpen = useBoolean();

    const { trans } = useTranslation();

    useEffect(() => {
        if (mobileOpen.value) {
            mobileOpen.onFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
                <Iconify icon="carbon:menu" />
            </IconButton>

            <Drawer
                open={mobileOpen.value}
                onClose={mobileOpen.onFalse}
                PaperProps={{
                    sx: {
                        pb: 5,
                        width: NAV.W_VERTICAL,
                    },
                }}
            >
                <Scrollbar>
                    <Logo sx={{ mx: 1, my: 1 }} />

                    <NavBasicMobile data={data} />

                    <Stack spacing={1.5} sx={{ p: 3 }}>

                        <Button
                            href='https://mesdash.wise-choice.net/'
                            variant="outlined"
                            rel="noopener"
                        >
                            {trans('sign_in')}
                        </Button>

                        <Button
                            fullWidth
                            variant="contained"
                            color="inherit"
                            href='https://mesdash.wise-choice.net/auth/jwt/sign-up/'
                            rel="noopener"
                        >
                            {trans('sign_up')}
                        </Button>


                    </Stack>
                </Scrollbar>
            </Drawer>
        </>
    );
}

NavMobile.propTypes = {
    data: PropTypes.array,
};
