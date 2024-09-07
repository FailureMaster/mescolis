import { memo } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavDesktop({ data, slotProps, sx, ...other }) {
    return (
        <Stack
            component="nav"
            direction="row"
            id="nav-basic-desktop"
            spacing={5}
            sx={{
                ...sx,
            }}
            {...other}>
            {data.map((list) => (
                <NavList key={list.title} data={list} depth={1} slotProps={slotProps} />
            ))}
        </Stack>
    );
}

NavDesktop.propTypes = {
    data: PropTypes.array,
    slotProps: PropTypes.object,
    sx: PropTypes.object,
};

export default memo(NavDesktop);

