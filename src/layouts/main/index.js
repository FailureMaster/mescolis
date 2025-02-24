import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Header from './header';
import Footer from './footer';
import FooterInfo from '../footer-info';
import { HEADER } from '../config-layout';
import { TranslationProvider } from '../../contexts/TranslationContext';

// ----------------------------------------------------------------------

export default function MainLayout({
    children,
    headerOnDark = false,
    disabledSpacing = false,
    sx,
    ...other
}) {
    return (
        <TranslationProvider>
            <Box
                sx={{
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    ...sx,
                }}
                {...other}
            >
                <Header headerOnDark={headerOnDark} />

                <Box component="main" sx={{ flexGrow: 1 }}>
                    {!(disabledSpacing || headerOnDark) && (
                        <Box
                            sx={{
                                height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
                            }}
                        />
                    )}

                    {children}
                </Box>

                <FooterInfo />
                <Footer />
            </Box>
        </TranslationProvider>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node,
    disabledSpacing: PropTypes.bool,
    headerOnDark: PropTypes.bool,
    sx: PropTypes.object,
};
