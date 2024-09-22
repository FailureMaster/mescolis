import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import { RHFSelect } from 'src/components/hook-form';

import { useTranslation } from 'src/contexts/TranslationContext';

// ----------------------------------------------------------------------

export default function FilterLocation() {
    const { trans } = useTranslation();

    return (
        <RHFSelect name="carriers_name" label={trans('p_couriers_select_placeholder')}>
            <MenuItem value="All Carriers">
                {trans('p_couriers_select_option_1')}
            </MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem value="LTL Freight">
                {trans('p_couriers_select_option_2')}
            </MenuItem>
            <MenuItem value="Canada">
                {trans('p_couriers_select_option_3')}
            </MenuItem>
            <MenuItem value="United States">
                {trans('p_couriers_select_option_4')}
            </MenuItem>
            <MenuItem value="Rest of the world">
                {trans('p_couriers_select_option_5')}
            </MenuItem>
        </RHFSelect>
    );
}
