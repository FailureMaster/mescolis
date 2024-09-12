import { memo } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { useHoverParallax } from 'src/hooks/use-hover-parallax';

import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';

import Icon from './icon2';
import Label from './label';
import Shape from './shape';
import Dot from './dots';
import Circle from './circle';

// ----------------------------------------------------------------------

const stylesIcon = {
    width: 40,
    height: 40,
    color: 'common.black',
};

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

const animateDown = (duration = 30) => ({
    animate: { rotate: [360, 0] },
    transition: { duration, repeat: Infinity, ease: 'linear' },
});

const animateUp = (duration = 60) => ({
    animate: { rotate: [0, 360] },
    transition: { duration, repeat: Infinity, ease: 'linear' },
});

const getRandom = (min, max) => Math.random() * (max - min) + min;

// Define the glowing animation
const animateGlow = () => ({
    animate: {
        backgroundPosition: ['0% 0%', '100% 0%', '0% 100%', '100% 100%', '0% 0%'],
        scale: [1, getRandom(1.1, 1.3), 1],
        boxShadow: [
            '0 0 0px rgba(255, 255, 255, 0)',
            '0 0 20px rgba(255, 255, 255, 0.8)',
            '0 0 0px rgba(255, 255, 255, 0)',
        ],
        filter: [
            'brightness(1)',
            `brightness(${getRandom(1.2, 1.6)})`,
            'brightness(1)',
        ],
    },
    transition: {
        duration: getRandom(1.5, 3),
        repeat: Infinity,
        ease: 'easeInOut',
        backgroundPosition: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
        },
    },
});

// Define button styles
const buttonStyles = {
    color: '#FFFFFF',
    background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 0,
    borderRadius: '20px',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    backgroundSize: '400%',
    animation: 'glow-container 5s linear infinite',
    transition: 'opacity 0.3s ease-in-out',
    overflow: 'hidden',
};

// Define the keyframes for the glow animation
const keyframes = `
    @keyframes glow-container {
        0% { background-position: 0% 0%; }
        50% { background-position: 100% 0%; }
        100% { background-position: 0% 0%; }
    }
`;


function Pattern02({ sx, ...other }) {

    const theme = useTheme();

    const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

    const WHITE = '#FFFFFF';

    const GREEN = theme.palette.success.main;

    const YELLOW = theme.palette.warning.main;

    const BLUE = '#355EC9';

    const PURPLE = '#9B3AB1';

    const styleIconContent = {
        fontSize: 16,
        color: 'common.black',
        fontWeight: 'fontWeightBold',
    };

    return (
        <Box
            sx={{
                width: 1,
                height: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                ...sx,
            }}
            {...other}
        >
            <Circle hide component={m.div}>
                <Box sx={{ position: 'absolute', top: 16, transform: 'translateX(20px)' }}>
                    {/* Apply the grow animation here */}
                    <m.div style={{ x: offsetX(50), y: offsetY(50), borderRadius: '20px', ...buttonStyles }} {...animateGlow()}>
                        <Icon
                            color={WHITE}
                            content={
                                <>
                                    <Typography sx={{ ...styleIconContent }}>68%</Typography>
                                </>
                            }
                        />
                    </m.div>
                </Box>
            </Circle>

            <Circle hide component={m.div} {...animateUp(80)}>
                <Dot size={16} color="secondary" sx={{ top: 80, left: 42 }} />
            </Circle>

            <Circle hide component={m.div}>
                <Box sx={{ position: 'absolute', top: 380, left: 35, transform: 'translateX(20px)' }}>
                    {/* Apply the grow animation here */}
                    <m.div style={{ x: offsetX(50), y: offsetY(50), borderRadius: '20px', ...buttonStyles }} {...animateGlow()}>
                        <Icon
                            color={WHITE}
                            content={
                                <>
                                    <Typography sx={{ ...styleIconContent }}>64%</Typography>
                                </>
                            }
                        />
                    </m.div>
                </Box>
            </Circle>

            <Circle hide component={m.div} {...animateUp(100)}>
                <Dot size={14} color="success" sx={{ top: 22, left: 112 }} />
            </Circle>


            <Circle hide component={m.div}>
                <Box sx={{ position: 'absolute', top: 380, left: 350, transform: 'translateX(20px)' }}>
                    {/* Apply the grow animation here */}
                    <m.div style={{ x: offsetX(50), y: offsetY(50), borderRadius: '20px', ...buttonStyles }} {...animateGlow()}>
                        <Icon
                            color={WHITE}
                            content={
                                <>
                                    <Typography sx={{ ...styleIconContent }}>62%</Typography>
                                </>
                            }
                     
                        />
                    </m.div>
                </Box>
            </Circle>

            <Circle component={m.div} {...animateDown(120)}>
                <Dot size={12} color="warning" sx={{ top: 54, right: 70 }} />
            </Circle>

            <Circle component={m.div}>
                <Box sx={{ position: 'absolute', top: 190, left: 410, transform: 'translateX(20px)' }}>
                    {/* Apply the grow animation here */}
                    <m.div style={{ x: offsetX(50), y: offsetY(50), borderRadius: '20px', ...buttonStyles  }} {...animateGlow()}>
                        <Icon
                            color={WHITE}
                            content={
                                <>
                                    <Typography sx={{ ...styleIconContent }}>70%</Typography>
                                </>
                            }
                        />
                    </m.div>
                </Box>
            </Circle>
        </Box>
    );
}

Pattern02.propTypes = {
    sx: PropTypes.object,
};

export default memo(Pattern02);
