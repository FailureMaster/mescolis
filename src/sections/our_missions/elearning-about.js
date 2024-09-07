import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import { he } from 'date-fns/locale';

// ----------------------------------------------------------------------

const SUMMARY = [
    {
        name: 'Learners',
        number: 14000,
        description:
            'At MesColis, we share a common vision of our future. Since our beginning in 2008, we have developed a culture based on integrity and core values. Our culture empowers our team to continuously question everything, especially our processes and our results.',
    },
    {
        name: 'Courses',
        number: 1050,
        description:
            'We ask the question “Is it the right thing to Do”… for our customers, team members, community and shareholders. We believe it’s possible to satisfy all stakeholders, but only when we function as a team and when we are never satisfied with the status quo.',
    },
    {
        name: 'Graduates',
        number: 52000,
        description:
            'Our success depends on finding and keeping talent and empowering them with the tools to “Thrive & Strive.” This approach has been responsible for all of our greatest success stories, like our Heroic Support Team. When our team and our customers succeed, our business continues to grow and expand.',
    },
    {
        name: 'Graduates',
        number: 52000,
        description:
            'Our growth provides the return our shareholders expect and deserve and allows us the ability to give back to the communities where we live.',
    },
];

// ----------------------------------------------------------------------

export default function ElearningAbout() {

    return (
        <Container
            sx={{
                overflow: 'hidden',
                py: 10,
            }}
        >
            <Grid
                container
                spacing={{ xs: 2, md: 8 }}
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >

                <Grid>
                    <Typography variant="h3" sx={{ mb: 3 }}>
                        Our Mission
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        Ship Smarter with MesColis. Express Discount Courier Shipping. No monthly fees, no volume commitments. With MesColis, members have instant access to compare over 250+ services from the top couriers in North America while receiving deep discounts. Putting the user experience first, with a focus on ease-of-use and Heroic Support™️, MesColis is intent on becoming the next global leader in online shipping for businesses of all sizes.
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        The all-in-one platform for shipping – MesColis allows you to ship packages, envelopes, and LTL (Freight) while generating the appropriate documentation for you. Whether shipping domestically or internationally, MesColis will provide your label and customs documentation.
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 4 }}>
                        MesColis for eCommerce helps small businesses provide accurate real time rates to their customers at checkout based on what’s in their cart – so they never overpay or undercharge for shipping! Pair that with deep discount, ability to add handling fees, batch shipping multiple orders with one click, and branded tracking.
                    </Typography>
                </Grid>
            </Grid>

            <Grid
                container
                columnSpacing={{ xs: 0, md: 3 }}
                rowSpacing={{ xs: 5, md: 0 }}
                justifyContent="space-between"
            >
                <Grid
                    xs={12}
                    sm={3}
                    md={2}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Image
                        src="/assets/our-missions/great_place_work.png"
                        alt="Logo CCA"
                        sx={{
                            height: { xs: 200, md: 200 },
                        }}
                    />
                </Grid>

                <Grid xs={12} sm={9} md={10}>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                        MesColis is a Great Place to Work®
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        MesColis is certified as a Great Place to Work® after a thorough, independent analysis conducted by Great Place to Work Institute® Canada.
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        This certification is based on direct feedback from employees, provided as part of an extensive and anonymous survey about their workplace experience.
                    </Typography>
                </Grid>
            </Grid>



        </Container>
    );
}
