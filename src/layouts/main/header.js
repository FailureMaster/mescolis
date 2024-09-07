import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import { SignInButton } from 'src/components/sign-in-button';
import { NavBasicDesktop } from 'src/components/nav-basic';
import Iconify from 'src/components/iconify';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';



// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
    const theme = useTheme();

    const offset = useOffSetTop();

    const mdUp = useResponsive('up', 'md');

    const renderContent = (
        <>
            <Box sx={{ lineHeight: 0, position: 'relative' }}>
                <Logo />
            </Box>

            <>
                <Stack
                    flexGrow={1}
                    alignItems="end"
                    sx={{
                        // height: 1,
                        display: { xs: 'none', md: 'flex' },
                        mr: 4,
                    }}
                >
                    <NavBasicDesktop
                        slotProps={{
                            rootItem: {
                                '& .icon': { display: 'none' },
                            },
                        }}
                        data={[
                            {
                                title: 'How It Works',
                                icon: <Iconify icon="solar:home-2-bold-duotone" />,
                                path: '/how-it-works',
                            },
                            { title: 'Our Mission', path: '/our-mission' },
                            // { title: 'Our Partners', path: '/our-partners' },
                            {
                                title: 'Couriers',
                                path: '/couriers',
                                icon: <Iconify icon="solar:file-bold-duotone" />,
                                children: [
                                    { title: 'Canada', path: '/couriers/ca' },
                                    { title: 'United States', path: '/couriers/us' },
                                    { title: 'Rest of the World', path: '/couriers/rest-of-the-world' },
                                ],
                            },
                            { title: 'FAQ', path: '/faq' },
                            // {
                            //     title: 'Resources',
                            //     path: '#',
                            //     icon: <Iconify icon="solar:file-bold-duotone" />,
                            //     children: [
                            //         { title: 'Support', path: '#' },
                            //         { title: 'Developers', path: '#' },
                            //         { title: 'Blog', path: '#' },
                            //     ],
                            // },

                        ]}
                    />
                    {/* <NavDesktop
                        slotProps={{
                            rootItem: {
                                '& .icon': { display: 'none' },
                            },
                        }}
                        data={navConfig}
                    /> */}
                </Stack>

                <Box sx={{ flexGrow: { xs: 1, md: 'unset' } }} />
            </>

            <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">

                <Button
                    href=''
                    variant="outlined"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                    }}
                >
                    Sign in
                </Button>

                <Button
                    variant="contained"
                    color="inherit"
                    href=''
                    target="_blank"
                    rel="noopener"
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                    }}
                >
                    Sign Up
                </Button>
            </Stack>

            {!mdUp &&
                <NavMobile
                    data={[
                        {
                            title: 'How It Works',
                            icon: <Iconify icon="solar:home-2-bold-duotone" />,
                            path: '#',
                        },
                        {
                            title: 'Our Partners',
                            path: '#',
                            icon: <Iconify icon="solar:file-bold-duotone" />,
                        },
                        {
                            title: 'Couriers',
                            path: '#',
                            icon: <Iconify icon="solar:file-bold-duotone" />,
                            children: [
                                { title: 'Canada', path: '#' },
                                { title: 'United States', path: '#' },
                                { title: 'Rest of the World', path: '#' },
                            ],
                        },
                        {
                            title: 'Resources',
                            path: '#',
                            icon: <Iconify icon="solar:file-bold-duotone" />,
                            children: [
                                { title: 'Support', path: '#' },
                                { title: 'Developers', path: '#' },
                                { title: 'Blog', path: '#' },
                            ],
                        },

                    ]}
                />
            }
        </>
    );

    return (
        <AppBar>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE,
                        md: HEADER.H_DESKTOP,
                    },
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(headerOnDark && {
                        color: 'common.white',
                    }),
                    ...(offset && {
                        ...bgBlur({ color: theme.palette.background.default }),
                        color: 'text.primary',
                        height: {
                            md: HEADER.H_DESKTOP - 16,
                        },
                    }),
                }}
            >
                <Container
                    sx={{
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {renderContent}
                </Container>
            </Toolbar>

            {offset && <HeaderShadow />}
        </AppBar>
    );
}

Header.propTypes = {
    headerOnDark: PropTypes.bool,
};
