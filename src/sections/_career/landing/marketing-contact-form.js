import * as Yup from 'yup';
import { useState, useCallback } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import { filledInputClasses } from '@mui/material/FilledInput';

import { fCurrency } from 'src/utils/format-number';

import { _tags } from 'src/_mock';

import FormProvider, { RHFSlider, RHFTextField } from 'src/components/hook-form';

import FilterKeyword from '../filters/filter-keyword';
import FilterOrigin from '../filters/filter-origin';
import FilterDestination from '../filters/filter-destination';

// ----------------------------------------------------------------------

export default function MarketingContactForm() {
    const MarketingContactSchema = Yup.object().shape({
        services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
        email: Yup.string().required('Email is required').email('That is not an email'),
        compnany: Yup.string().required('Compnany is required'),
        website: Yup.string().required('Website is required'),
    });

    const defaultValues = {
        services: [],
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        compnany: '',
        website: '',
        budget: [2000, 10000],
        message: '',
    };

    const [filters, setFilters] = useState({
        filterKeyword: null,
        filterLocation: null,
        filterLocation2: null,
    });

    const handleChangeKeyword = useCallback(
        (newValue) => {
            setFilters({
                ...filters,
                filterKeyword: newValue,
            });
        },
        [filters]
    );

    const handleChangeLocation = useCallback(
        (newValue) => {
            setFilters({
                ...filters,
                filterLocation: newValue,
            });
        },
        [filters]
    );

    const handleChangeLocation2 = useCallback(
        (newValue) => {
            setFilters({
                ...filters,
                filterLocation2: newValue,
            });
        },
        [filters]
    );

    const methods = useForm({
        resolver: yupResolver(MarketingContactSchema),
        defaultValues,
    });

    const {
        reset,
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            console.log('DATA', data);
        } catch (error) {
            console.error(error);
        }
    });

    const getSelected = (selectedItems, item) =>
        selectedItems.includes(item)
            ? selectedItems.filter((value) => value !== item)
            : [...selectedItems, item];

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>

            <Stack alignItems="flex-start">

                <Stack
                    spacing={{ xs: 2.5, md: 2 }}
                    direction={{ xs: 'row', md: 'row' }}
                    sx={{ width: 1, marginTop: 2 }}
                >
                    <FilterOrigin
                        filterLocation={filters.filterLocation}
                        onChangeLocation={handleChangeLocation}
                        sx={{
                            flex: 0.65,
                        }}
                    />
                    <RHFTextField
                        name="origin_postal_code"
                        label="Postal Code"
                        sx={{ flex: 0.35 }}
                    />
                </Stack>

                <Stack
                    spacing={{ xs: 2.5, md: 2 }}
                    direction={{ xs: 'row', md: 'row' }}
                    sx={{ width: 1, marginTop: 2 }}
                >
                    <FilterDestination
                        filterLocation2={filters.filterLocation2}
                        onChangeLocation={handleChangeLocation2}
                        sx={{
                            flex: 0.65,
                        }}
                    />
                    <RHFTextField name="destination_postal_code" label="Postal Code" sx={{ flex: 0.35 }} />
                </Stack>

                <Stack
                    spacing={{ xs: 2.5, md: 2 }}
                    direction={{ xs: 'row', md: 'row' }}
                    sx={{ width: 1, marginTop: 2 }}
                >
                    <RHFTextField name="dimension_width" label="Width" />
                    <RHFTextField name="dimension_length" label="Length" />
                    <RHFTextField name="dimension_height" label="Height" />

                    <RHFTextField name="weight" label="Weight" />
                </Stack>


            </Stack>

            <LoadingButton
                size="medium"
                color="inherit"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ mt: 3, mb: 1 }}
            >
                Get Quote
            </LoadingButton>
        </FormProvider>
    );
}
