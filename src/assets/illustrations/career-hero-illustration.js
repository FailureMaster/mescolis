import { memo } from 'react';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { useHoverParallax } from 'src/hooks/use-hover-parallax';

import Image from 'src/components/image';
import { useTranslation } from 'src/contexts/TranslationContext';

import SvgColor from 'src/components/svg-color';


import Icon from './pattern/icon';
import Label from './pattern/label';
import Character from './pattern/character';
import Pattern02 from './pattern/pattern-02';
import Pattern01 from './pattern/pattern-01';

// ----------------------------------------------------------------------

const stylesIcon = {
    width: 40,
    height: 40,
    color: 'common.black',
};

// ----------------------------------------------------------------------

function CareerHeroIllustration({ sx, ...other }) {
    const { trans } = useTranslation();
    
    const theme = useTheme();

    const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

    const BLUE = theme.palette.info.main;

    const GREEN = theme.palette.success.main;

    const YELLOW = theme.palette.warning.main;
    

    return (
        <Box
            component={m.div}
            onMouseMove={onMouseMoveHandler}
            onMouseLeave={onMouseLeaveHandler}
            sx={{
                width: 564,
                height: 564,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center',
                ...sx,
            }}
            {...other}
        >
            <>
                <Character front sx={{ position: 'absolute', bottom: 16, zIndex: 10, width: 300 }} />
                {/* Standard Shipping */}
                <Box
                    sx={{
                        top: 170,
                        zIndex: 9,
                        position: 'absolute',
                        transform: 'translateX(-125px) rotate(-15deg)',
                    }}
                >
                    <m.div style={{ y: offsetY(-50) }}>
                        <Label
                            text={trans('home_hero_right_standard')}
                            icon={
                                <Image
                                    alt="Standard Shipping"
                                    src="/assets/home/standard_shipping.svg"
                                    sx={{ width: 50 }}
                                />
                            }
                        />
                    </m.div>
                </Box>
                <Character sx={{ position: 'absolute', bottom: 16, zIndex: 8, width: 300 }} />
            </>

            {/* Express Shipping */}
            <Box
                sx={{
                    position: 'absolute',
                    transform: 'translate(175px, 90px) rotate(15deg)',
                }}
            >
                <m.div style={{ x: offsetX(80), y: offsetY(80) }}>
                    <Label
                        text={trans('home_hero_right_express')}
                        icon={
                            <Image
                                alt="Express Shipping"
                                src="/assets/home/express_shipping.svg"
                                sx={{ width: 68 }}
                            />
                        }
                    />
                </m.div>
            </Box>

            {/* Overnight Shipping */}
            <Box
                sx={{
                    position: 'absolute',
                    transform: 'translate(170px, -110px) rotate(15deg)',
                }}
            >
                <m.div style={{ y: offsetY(80) }}>
                    <Label
                        text={trans('home_hero_right_overnight')}
                        icon={
                            <Image
                                alt="Overnight Shipping"
                                src="/assets/home/overnight_shipping.svg"
                                sx={{ width: 48, height: 48 }}
                            />
                        }
                    />
                </m.div>
            </Box>

            {/* International */}
            <Box
                sx={{
                    zIndex: 10,
                    bottom: 160,
                    position: 'absolute',
                    transform: 'translateX(-110px)',
                }}
            >
                <m.div style={{ y: offsetY(-60) }}>
                    <Label
                        text={trans('home_hero_right_international')}
                        icon={
                            <Image
                                alt="International Shipping"
                                src="/assets/home/international_shipping.svg"
                                sx={{ width: 65 }}
                            />
                        }
                    />
                </m.div>
            </Box>

            {/* Icon */}
            <Box sx={{ position: 'absolute', top: 16, transform: 'translateX(20px)' }}>
                <m.div style={{ x: offsetX(50), y: offsetY(50) }}>
                    <Icon
                        color={YELLOW}
                        content={<SvgColor src="/assets/home/asset_1.svg" sx={{ ...stylesIcon }} />}
                    />
                </m.div>
            </Box>

            {/* Icon */}
            <Box sx={{ position: 'absolute', bottom: 16, transform: 'translateX(40px)' }}>
                <m.div style={{ x: offsetX(-60), y: offsetY(60) }}>
                    <Icon
                        color={GREEN}
                        content={
                            <SvgColor src="/assets/home/asset_2.svg" sx={{ ...stylesIcon }} />
                        }
                    />
                </m.div>
            </Box>

            {/* Icon */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 220,
                    transform: 'translateX(-220px)',
                }}
            >
                <m.div style={{ x: offsetX(70), y: offsetY(70) }}>
                    <Icon
                        color={BLUE}
                        content={
                            <SvgColor src="/assets/home/asset_3.svg" sx={{ ...stylesIcon }} />
                        }
                    />
                </m.div>
            </Box>

            <Pattern01 />

            <Pattern02 />
        </Box>
    );
}

CareerHeroIllustration.propTypes = {
    sx: PropTypes.object,
};

export default memo(CareerHeroIllustration);
