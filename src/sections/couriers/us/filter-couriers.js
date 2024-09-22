import { useTranslation } from 'src/contexts/TranslationContext';

import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function FilterLocation() {
    const { trans } = useTranslation();

    return (
        <RHFTextField
            name="courier_name"
            label={trans('p_couriers_search_placeholder')}
        />
    );
}
