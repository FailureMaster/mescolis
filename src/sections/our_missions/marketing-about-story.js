import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingCaseStudyList from './marketing-case-study-list';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {

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
