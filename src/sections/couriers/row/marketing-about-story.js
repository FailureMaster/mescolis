import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import { height, width } from '@mui/system';

import MarketingCaseStudyList from './marketing-case-study-list';

// ----------------------------------------------------------------------

const TIMELINES = [
    {
        year: 'Step 1',
        title: 'Register for a free account',
        description:
            '',
    },
    {
        year: 'Step 2',
        title: 'Next, fill in your shipment details and click “Get Rates”',
        description:
            'Use the Quick Quote module on your MesColis Dashboard to enter the Ship-To address Our intelligent system quickly populates the address when you start typing',
    },
    {
        year: 'Step 3',
        title: 'MesColis goes out and finds the best rates from a multitude of trusted couriers',
        description:
            'Whether you’re looking for the least expensive, fastest, or something in between, MesColis has you covered',
    },
    {
        year: 'Step 4',
        title: 'Get your shipment moving!',
        description:
            'Choose how to get your shipment to the courier by scheduling a pick up or choosing from authorized drop off locations',
    },
    {
        year: 'Step 5',
        title: 'Print your label and put it on the box.',
        description:
            'Thats it!',
    },
];

const COLORS = ['primary', 'secondary', 'warning', 'success', 'primary'];

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
    const mdUp = useResponsive('up', 'md');

    return (
        <Box
            sx={{
                bgcolor: 'common.white',
                py: { xs: 10, md: 15 },
            }}
        >
            <Container>
                <Stack
                    spacing={3}
                    sx={{
                        mx: 'auto',
                        textAlign: 'center',
                        mb: { xs: 2, md: 4 },
                    }}
                >

                    <Typography sx={{ color: 'text.secondary' }}>
                        Mescolis offers a complete solution for associations interested in extending our shipping service to their membership base. Adding a well-designed, beneficial service program can provide added incentive for association membership, helping drive new members and boost member retention.
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                        Learn how you can add value to your membership
                    </Typography>

                    <Typography>
                        <Button
                            color="primary"
                            size="medium"
                            variant="contained"
                            sx={{ flexShrink: 0, mt: 2 }}
                        >
                            Contact Us Today
                        </Button>
                    </Typography>

                    {/* <Typography sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                        Our Trusted Partners
                    </Typography> */}

                    <Typography variant="h4">Our Trusted Partners</Typography>
                </Stack>

                <MarketingCaseStudyList />
            </Container>
        </Box>
    );
}
