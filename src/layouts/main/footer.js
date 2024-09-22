import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Button, { buttonClasses } from '@mui/material/Button';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { useTranslation } from 'src/contexts/TranslationContext';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _socials } from 'src/_mock';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { pageLinks, navConfig } from './config-navigation';

// ----------------------------------------------------------------------

const StyledAppStoreButton = styled(Button)(({ theme }) => ({
    flexShrink: 0,
    padding: '5px 12px',
    color: theme.palette.common.white,
    border: `solid 1px ${alpha(theme.palette.common.black, 0.24)}`,
    background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.common.black} 100%)`,
    [`& .${buttonClasses.startIcon}`]: {
        marginLeft: 0,
    },
}));

// ----------------------------------------------------------------------

export default function Footer() {
    const { trans } = useTranslation(); // Access language here

    const mdUp = useResponsive('up', 'md');

    const pathname = usePathname();

    const mobileList = navConfig.find((i) => i.title === 'Pages')?.children || [];

    const desktopList = pageLinks.sort((listA, listB) => Number(listA.order) - Number(listB.order));

    const renderLists = mdUp ? desktopList : mobileList;

    const isHome = pathname === '/';

    const simpleFooter = (
        <Container sx={{ py: 8, textAlign: 'center' }}>
            <Logo single />

            <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>
                © 2023. All rights reserved
            </Typography>
        </Container>
    );

    const mainFooter = (
        <>
            <Divider />

            <Container
                sx={{
                    overflow: 'hidden',
                    py: { xs: 8, md: 10 },
                }}
            >
                <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
                    <Grid xs={12} md={3}>
                        <Stack spacing={{ xs: 3, md: 5 }}>
                            <Stack alignItems="flex-start" spacing={3}>
                                <Logo />

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {trans('footer_about')}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Grid>

                    <Grid xs={12} md={3}>
                        <Stack spacing={2}>
                            <Typography variant="h6">{trans('footer_social_title')}</Typography>
                            <Stack direction="row" alignItems="center">
                                {_socials.map((social) => (
                                    <IconButton key={social.value} color="primary">
                                        <Iconify icon={social.icon} />
                                    </IconButton>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={3}>
                        <Stack spacing={1} alignItems="flex-start">
                            <Typography variant="h6">{trans('footer_quick_links_title')}</Typography>

                            <Link href="/" variant="body2" sx={{ color: 'text.primary' }}>
                                {trans('footer_quick_links_1')}
                            </Link>

                            <Link href="/how-it-works" variant="body2" sx={{ color: 'text.primary' }}>
                               {trans('footer_quick_links_2')}
                            </Link>

                            <Link href="/our-mission" variant="body2" sx={{ color: 'text.primary' }}>
                                {trans('footer_quick_links_3')}
                            </Link>

                            <Link href="/couriers" variant="body2" sx={{ color: 'text.primary' }}>
                                {trans('footer_quick_links_4')}
                            </Link>

                            <Link href='/faq' variant="body2" sx={{ color: 'text.primary' }}>
                                {trans('footer_quick_links_5')}
                            </Link>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={3}>
                        <Stack spacing={2}>
                            <Stack spacing={1}>
                                <Typography variant="h6">{trans('footer_newsletter_title')}</Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                    {trans('footer_newsletter_description')}
                                </Typography>
                            </Stack>

                            <TextField
                                fullWidth
                                hiddenLabel
                                placeholder={trans('footer_button_placeholder')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button variant="contained" color="inherit" size="large" sx={{ mr: -1.25 }}>
                                                {trans('footer_button')}
                                            </Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>

            <Divider />

            <Container>
                <Stack
                    spacing={2.5}
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="center"
                    sx={{ py: 3, textAlign: 'center' }}
                >
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        MesColis © 2024. {trans('footer_all_rights_reserved')}
                    </Typography>

                    {/* <Stack direction="row" spacing={3} justifyContent="center">
                        <Link variant="caption" sx={{ color: 'text.secondary' }}>
                            Help Center
                        </Link>

                        <Link variant="caption" sx={{ color: 'text.secondary' }}>
                            Terms of Service
                        </Link>
                    </Stack> */}
                </Stack>
            </Container>
        </>
    );

    return <footer>{mainFooter}</footer>;
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }) {
    const pathname = usePathname();

    return (
        <Stack spacing={1.5} alignItems="flex-start">
            <Typography variant="subtitle2">{list.subheader}</Typography>

            {list.items?.map((link) => {
                const active = pathname === link.path || pathname === `${link.path}/`;

                return (
                    <Link
                        component={RouterLink}
                        key={link.title}
                        href={link.path}
                        variant="caption"
                        sx={{
                            color: 'text.secondary',
                            '&:hover': {
                                color: 'text.primary',
                            },
                            ...(active && {
                                color: 'text.primary',
                                fontWeight: 'fontWeightSemiBold',
                            }),
                        }}
                    >
                        {link.title}
                    </Link>
                );
            })}
        </Stack>
    );
}

ListDesktop.propTypes = {
    list: PropTypes.shape({
        items: PropTypes.array,
        subheader: PropTypes.string,
    }),
};

// ----------------------------------------------------------------------

export function ListMobile({ list }) {
    const pathname = usePathname();

    const listExpand = useBoolean();

    return (
        <Stack spacing={1.5} alignItems="flex-start">
            <Typography
                variant="subtitle2"
                onClick={listExpand.onToggle}
                sx={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                }}
            >
                {list.subheader}
                <Iconify
                    width={16}
                    icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
                    sx={{ ml: 0.5 }}
                />
            </Typography>

            <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
                <Stack spacing={1.5} alignItems="flex-start">
                    {list.items?.map((link) => (
                        <Link
                            component={RouterLink}
                            key={link.title}
                            href={link.path}
                            variant="caption"
                            sx={{
                                color: 'text.secondary',
                                '&:hover': {
                                    color: 'text.primary',
                                },
                                ...(pathname === `${link.path}/` && {
                                    color: 'text.primary',
                                    fontWeight: 'fontWeightSemiBold',
                                }),
                            }}
                        >
                            {link.title}
                        </Link>
                    ))}
                </Stack>
            </Collapse>
        </Stack>
    );
}

ListMobile.propTypes = {
    list: PropTypes.shape({
        items: PropTypes.array,
        subheader: PropTypes.string,
    }),
};

