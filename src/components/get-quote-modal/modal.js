import PropTypes from 'prop-types';
import { m, AnimatePresence } from 'framer-motion';

import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { useTabs } from 'src/hooks/use-tabs';

import { useTranslation } from 'src/contexts/TranslationContext';

import { CustomTabs } from 'src/components/custom-tabs';

import getVariant from './get-variant';
import GetQuoteModalForm from './get-quote-modal-form';

// ----------------------------------------------------------------------

const GetQuoteModal = ({ isOpen, onClose }) => {
    const { trans } = useTranslation();

    const tabs = useTabs('package');

    // ----------------------------------------------------------------------

    const FORM_TABS = [
        { value: 'package', label: trans('get_a_quote_modal_tab_1') },
        { value: 'envelope', label: trans('get_a_quote_modal_tab_2') },
        { value: 'ltl_freight', label: trans('get_a_quote_modal_tab_3') },
    ];

    // ----------------------------------------------------------------------

    const renderTabs = (
        <CustomTabs
            value={tabs.value}
            onChange={tabs.onChange}
            variant="fullWidth"
            slotProps={{ tab: { px: 0 } }}
            sx={{
                fontWeight: 400,
                borderRadius: 1,
                marginBottom: 2,
                '& .Mui-selected': {
                    color: 'white',
                },
            }}
        >
            {FORM_TABS.map((tab) => (
                <Tab key={tab.value} value={tab.value} label={tab.label} sx={{ fontWeight: 400 }} />
            ))}
        </CustomTabs>
    );



    return (
        <AnimatePresence>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={isOpen}
                onClose={onClose}
                PaperComponent={(props) => (
                    <m.div {...getVariant('fadeIn')}>
                        <Paper {...props} />
                    </m.div>
                )}
            >
                <DialogTitle>{trans('get_a_quote_modal_title')}</DialogTitle>

                <DialogContent>
                    {renderTabs}
                    <GetQuoteModalForm />
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>
                        {trans('get_a_quote_modal_form_cancel_button')}
                    </Button>
                    <Button variant="contained" onClick={onClose} autoFocus>
                        {trans('get_a_quote_modal_form_get_quote_button')}
                    </Button>
                </DialogActions>
            </Dialog>
        </AnimatePresence>
    );
};

GetQuoteModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default GetQuoteModal;