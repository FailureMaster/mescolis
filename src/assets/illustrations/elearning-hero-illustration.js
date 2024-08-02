import { memo } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';

import Icon from './pattern/icon';
import Label from './pattern/label';
import Shape from './pattern/shape';
import Pattern01 from './pattern/pattern-01';
import Pattern02 from './pattern/pattern-02';

// ----------------------------------------------------------------------

const stylesIcon = {
    width: 40,
    height: 40,
    // color: 'common.black',
};

// ----------------------------------------------------------------------

const varUp = {
    animate: { y: [-8, 8, -8], x: [-4, 4, -4] },
    transition: { duration: 8, repeat: Infinity },
};

const varDown = {
    animate: { y: [8, -8, 8], x: [4, -4, 4] },
    transition: { duration: 8, repeat: Infinity },
};

const varLeft = {
    animate: { x: [8, -8, 8], y: [4, -4, 4] },
    transition: { duration: 7, repeat: Infinity },
};

const varRight = {
    animate: { x: [8, -8, 8], y: [4, -4, 4] },
    transition: { duration: 7, repeat: Infinity },
};

// ----------------------------------------------------------------------

function ElearningHeroIllustration({ sx, ...other }) {
    const theme = useTheme();

    const GREEN = theme.palette.success.main;

    const YELLOW = theme.palette.warning.main;

    const BLUE = '#355EC9';

    const PURPLE = '#9B3AB1';

    const styleIconContent = {
        fontSize: 22,
        color: 'common.black',
        fontWeight: 'fontWeightBold',
    };

    return (
        <Box
            sx={{
                width: 670,
                height: 670,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
                ...sx,
            }}
            {...other}
        >
            <Box sx={{ position: 'absolute', right: 18, bottom: 28, zIndex: 8 }}>
                <Image
                    visibleByDefault
                    disabledEffect
                    alt="teacher"
                    src="/assets/images/course/mescolis_hero.png"
                    sx={{ width: 546, height: 650 }}
                />
            </Box>

            <Box
                {...varDown}
                component={m.div}
                sx={{ position: 'absolute', left: 115, bottom: 115, zIndex: 8 }}
            >
                <Image
                    visibleByDefault
                    disabledEffect
                    alt="book icon"
                    src="/assets/home/express_shipping.svg"
                    sx={{ width: '100%', height: 52 }}
                />
            </Box>

            <Box
                {...varRight}
                component={m.div}
                sx={{ position: 'absolute', left: 18, top: 220, zIndex: 8 }}
            >
                <Image
                    visibleByDefault
                    disabledEffect
                    alt="pencil icon"
                    src="/assets/home/overnight_shipping.svg"
                    sx={{ width: '100%', height: 77 }}
                />
            </Box>

            <Box
                {...varUp}
                component={m.div}
                sx={{ zIndex: 9, left: 120, bottom: 248, position: 'absolute' }}
            >
                <Image
                    visibleByDefault
                    disabledEffect
                    alt="python"
                    src="/assets/home/international_shipping.svg"
                    sx={{ width: '100%', height: 56 }}
                />
            </Box>

            {/* Icon */}

            {/* <Box
                {...varLeft}
                component={m.div}
                sx={{ top: 88, right: 72, zIndex: 8, position: 'absolute' }}
            >
                <m.div >
                    <Icon
                        color={YELLOW}
                        content={<SvgColor src="/assets/home/asset_1.svg" sx={{ ...stylesIcon,  }} />}
                    />
                </m.div>
                
            </Box> */}

            <Box
                {...varLeft}
                component={m.div}
                sx={{ top: 88, right: 72, zIndex: 8, position: 'absolute' }}
            >
                <Icon
                    color={GREEN}
                    content={<SvgColor src="/assets/home/asset_1.svg" sx={{ ...stylesIcon, color: 'common.white' }} />}
                    sx={{ transform: 'scale(1.2) rotate(15deg)' }}
                />
            </Box>

            <Box {...varRight} component={m.div} sx={{ zIndex: 8, bottom: 160, position: 'absolute' }}>
                <Icon
                    color={YELLOW}
                    content={<SvgColor src="/assets/home/asset_2.svg" sx={{ ...stylesIcon, color: 'common.white' }} />}
                    sx={{ transform: 'translateX(40px) scale(1.2) rotate(-15deg)' }}
                />
            </Box>

            <Box {...varUp} component={m.div} sx={{ zIndex: 8, right: 90, position: 'absolute' }}>
                <Icon
                    color={PURPLE}
                    content={<SvgColor src="/assets/home/asset_3.svg" sx={{ ...stylesIcon, color: 'common.black' }} />}
                    sx={{ transform: 'scale(1.2) translateY(20px) rotate(15deg)' }}
                />
            </Box>

            <Box {...varDown} component={m.div} sx={{ zIndex: 8, position: 'absolute' }}>
                <Icon
                    color={BLUE}
                    content={<SvgColor src="/assets/home/asset_4.svg" sx={{ ...stylesIcon, color: 'common.black' }} />}
                    sx={{
                        transform: 'scale(1.2) translate(-135px, -75px) rotate(15deg)',
                    }}
                />
            </Box>

            <Pattern01 sx={{ left: 0, top: 0 }} />
            <Pattern02 sx={{ top: 0, left: 0, opacity: 0.24, transform: 'scale(1.2)' }} />
            <Shape sx={{ position: 'absolute', right: 32, bottom: 32 }} />
        </Box>
    );
}

ElearningHeroIllustration.propTypes = {
    sx: PropTypes.object,
};

export default memo(ElearningHeroIllustration);
