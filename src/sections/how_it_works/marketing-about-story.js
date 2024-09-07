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
                        maxWidth: 580,
                        mx: 'auto',
                        textAlign: 'center',
                        mb: { xs: 8, md: 10 },
                    }}
                >
                    {/* <Typography variant="h2">Our Story</Typography> */}

                    <Typography sx={{ color: 'text.secondary' }}>
                        Mescolis easy to use discount shipping calculator tools make processing and managing shipments a breeze,
                        leaving you free to take care of your business.
                    </Typography>

                </Stack>

                <Timeline position={mdUp ? 'alternate' : 'right'}>
                    {TIMELINES.map((value, index) => (
                        <TimelineItem
                            key={value.title}
                            sx={{
                                '&:before': {
                                    ...(!mdUp && { display: 'none' }),
                                },
                            }}
                        >
                            {mdUp && (
                                <TimelineOppositeContent color="text.secondary">
                                    {value.year === 'Step 3' && (
                                        <Image
                                            alt="vision"
                                            src="/assets/working_process/step3-best-rates.svg"
                                            sx={{ width: '100%' }}
                                        />
                                    )}
                                    {value.year === 'Step 5' && (
                                        <Image
                                            alt="vision"
                                            src="/assets/working_process/step5-print-your-label.svg"
                                            sx={{ width: '100%' }}
                                        />
                                    )}
                                    {value.year !== 'Step 3' && value.year !== 'Step 5' && (
                                        <></>
                                    )}
                                </TimelineOppositeContent>
                            )}

                            <TimelineSeparator>
                                <TimelineDot color={COLORS[index]} />
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>

                                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                                    {value.year}
                                </Typography>

                                <Typography variant="h2" sx={{ mt: 0.5, mb: 1 }}>
                                    {value.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        maxWidth: { md: 420 },
                                        ...(index % 2 && {
                                            ml: 'auto',
                                        }),
                                    }}
                                >
                                    {value.year === 'Step 1' && (
                                        <Button
                                            color="primary"
                                            size="medium"
                                            variant="contained"
                                            sx={{ flexShrink: 0 }}
                                        >
                                            Register Now
                                        </Button>
                                    )}
                                    {value.year === 'Step 5' && (
                                        <Typography variant="h3" sx={{ color: '#068CED' }}>
                                            {value.description}
                                        </Typography>
                                    )}
                                    {value.year !== 'Step 1' && value.year !== 'Step 5' && (
                                        <>
                                            {value.description}
                                        </>
                                    )}
                                </Typography>

                                {!mdUp && (
                                    <Typography>
                                        {value.year === 'Step 2' && (
                                            <Image
                                                alt="vision"
                                                src="/assets/working_process/step3-best-rates.svg"
                                                sx={{ width: '100%' }}
                                            />
                                        )}
                                        {value.year === 'Step 4' && (
                                            <Image
                                                alt="vision"
                                                src="/assets/working_process/step5-print-your-label.svg"
                                                sx={{ width: '100%' }}
                                            />
                                        )}
                                        {value.year !== 'Step 2' && value.year !== 'Step 4' && (
                                            <></>
                                        )}
                                    </Typography>
                                )}

                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
}
