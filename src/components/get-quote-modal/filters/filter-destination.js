import PropTypes from 'prop-types';

import { countries } from 'src/assets/data';
import { useTranslation } from 'src/contexts/TranslationContext';

import CountrySelect from 'src/components/country-select';

// ----------------------------------------------------------------------

export default function FilterLocation({ filterLocation, onChangeLocation, sx }) {
  const { trans } = useTranslation();
  return (
    <CountrySelect
      fullWidth
      hiddenLabel
      placeholder={trans('get_a_quote_modal_form_destination')}
      value={filterLocation}
      onChange={(event, newValue) => onChangeLocation(newValue)}
      options={countries.map((option) => option.label)}
      getOptionLabel={(option) => option}
      sx={sx}
    />
  );
}

FilterLocation.propTypes = {
  filterLocation: PropTypes.string,
  onChangeLocation: PropTypes.func,
  sx: PropTypes.object,
};
