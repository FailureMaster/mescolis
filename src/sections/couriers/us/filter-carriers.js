import { filledInputClasses } from '@mui/material/FilledInput';

import { countries } from 'src/assets/data';

import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import CountrySelect from 'src/components/country-select';

import FormProvider, { RHFSelect, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function FilterLocation() {
    return (
        <RHFSelect name="carriers_name" label="Carriers">
            <MenuItem value="All Carriers">All Carriers</MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem value=" LTL Freight">
                LTL Freight
            </MenuItem>
            <MenuItem value="Canada">
                Canada
            </MenuItem>
            <MenuItem value="United States">
                United States
            </MenuItem>
            <MenuItem value=" Rest of the world">
                Rest of the world
            </MenuItem>
        </RHFSelect>
    );
}
