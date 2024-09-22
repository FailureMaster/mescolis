import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Iconify from 'src/components/iconify';

import FormProvider from 'src/components/hook-form';
import FilterCouriers from './filter-couriers';
import FilterCarriers from './filter-carriers';

// ----------------------------------------------------------------------

export default function TravelFilters({ sx, ...other }) {
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

    const methods = useForm({
        resolver: yupResolver(MarketingContactSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
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

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>

            <Stack
                spacing={2.5}
                alignItems={{ md: 'center' }}
                direction={{ xs: 'column', md: 'row' }}
                sx={{ py: 3, borderRadius: 2, ...sx }}
                {...other}
            >
                <FilterCouriers />

                <FilterCarriers />

                <Button
                    size="large"
                    color="secondary"
                    variant="contained"
                    sx={{
                        px: 0,
                        flexShrink: 0,
                        minWidth: { xs: 1, md: 48 },
                    }}
                >
                    <Iconify icon="carbon:search" />
                </Button>

            </Stack>
        </FormProvider >
    );
}

TravelFilters.propTypes = {
    sx: PropTypes.object,
};
