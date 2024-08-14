import { filledInputClasses } from '@mui/material/FilledInput';

import { countries } from 'src/assets/data';

import CountrySelect from 'src/components/country-select';

import FormProvider, { RHFSlider, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function FilterLocation() {
    return (
        <RHFTextField
            name="courier_name"
            label="Search by courier name"
        />
    );
}
