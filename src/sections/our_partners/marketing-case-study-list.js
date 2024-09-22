import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TabContext from '@mui/lab/TabContext';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const tabStyle = {
    borderRadius: 2,
    bgcolor: 'background.default',
    transition: 'border 0.3s',
    width: '140px',
    height: '100px',
    border: '2px solid #a5a5a5',
};

const activeTabStyle = {
    border: '2px solid #068CED',
};

// ----------------------------------------------------------------------

export default function MarketingCaseStudyList() {
    const [tab, setTab] = useState('1');

    const handleChangeTab = useCallback((event, newValue) => {
        setTab(newValue);
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Popover
                // id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                    mt: -1, // Add top margin
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
            >
                <Typography sx={{ p: 1, fontSize: '14px', fontWeight: '600' }}>Click to Read More</Typography>
            </Popover>
            <Box>
                <TabContext value={tab}>
                    <Box>
                        <Tabs
                            onChange={handleChangeTab}
                            aria-label="partner logos"
                            variant="scrollable"
                            sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none', // Remove underline indicator
                                },
                                mb: 2,
                            }}
                        >
                            <Tab
                                value="1"
                                icon={
                                    <Box sx={{}}>
                                        <Stack
                                            component={Paper}
                                            alignItems="center"
                                            justifyContent="center"
                                            variant="outlined"
                                            sx={{
                                                ...tabStyle,
                                                ...(tab === '1' ? activeTabStyle : {}), // Apply active style if selected
                                            }}
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <Image
                                                src="/assets/our-partners/logo-CCA.png"
                                                alt="Logo CCA"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Stack>
                                    </Box>
                                }
                            />
                            <Tab
                                value="2"
                                icon={
                                    <Box sx={{}}>
                                        <Stack
                                            component={Paper}
                                            alignItems="center"
                                            justifyContent="center"
                                            variant="outlined"
                                            sx={{
                                                ...tabStyle,
                                                ...(tab === '2' ? activeTabStyle : {}),
                                            }}
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <Image
                                                src="/assets/our-partners/tab-cfib-new-en.svg"
                                                alt="Logo CFIB"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Stack>
                                    </Box>
                                }
                            />
                            <Tab
                                value="3"
                                icon={
                                    <Box sx={{}}>
                                        <Stack
                                            component={Paper}
                                            alignItems="center"
                                            justifyContent="center"
                                            variant="outlined"
                                            sx={{
                                                ...tabStyle,
                                                ...(tab === '3' ? activeTabStyle : {}),
                                            }}
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <Image
                                                src="/assets/our-partners/cangift-official-benefit-supplier-2019-EN-high-res.png"
                                                alt="Logo Cangift"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Stack>
                                    </Box>
                                }
                            />
                            <Tab
                                value="4"
                                icon={
                                    <Box sx={{}}>
                                        <Stack
                                            component={Paper}
                                            alignItems="center"
                                            justifyContent="center"
                                            variant="outlined"
                                            sx={{
                                                ...tabStyle,
                                                ...(tab === '4' ? activeTabStyle : {}),
                                            }}
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <Image
                                                src="/assets/our-partners/futurpreneur-1.png"
                                                alt="Logo Futurpreneur"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Stack>
                                    </Box>
                                }
                            />
                            <Tab
                                value="5"
                                icon={
                                    <Box sx={{}}>
                                        <Stack
                                            component={Paper}
                                            alignItems="center"
                                            justifyContent="center"
                                            variant="outlined"
                                            sx={{
                                                ...tabStyle,
                                                ...(tab === '5' ? activeTabStyle : {}),
                                            }}
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <Image
                                                src="/assets/our-partners/logo-rcc.png"
                                                alt="Logo RCC"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Stack>
                                    </Box>
                                }
                            />
                            <Tab
                                value="6"
                                icon={
                                    <Box sx={{}}>
                                        <Stack
                                            component={Paper}
                                            alignItems="center"
                                            justifyContent="center"
                                            variant="outlined"
                                            sx={{
                                                ...tabStyle,
                                                ...(tab === '6' ? activeTabStyle : {}),
                                            }}
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={handlePopoverOpen}
                                            onMouseLeave={handlePopoverClose}
                                        >
                                            <Image
                                                src="/assets/our-partners/FC_logo.png"
                                                alt="Logo Founderscard"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Stack>
                                    </Box>
                                }
                            />
                        </Tabs>
                    </Box>

                    <TabPanel value="1">
                        <Grid
                            container
                            columnSpacing={{ xs: 0, md: 3 }}
                            rowSpacing={{ xs: 5, md: 0 }}
                            justifyContent="space-between"
                        >
                            <Grid
                                xs={12}
                                md={4}
                            >

                                <Image
                                    src="/assets/our-partners/logo-CCA.png"
                                    alt="Logo CCA"
                                    sx={{
                                        width: '100%',
                                    }}
                                />

                                <Button
                                    color="primary"
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 1 }}
                                >
                                    Lean more
                                </Button>
                            </Grid>

                            <Grid xs={12} md={8}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` The Calgary Construction Association is a professional association of over 850-member companies throughout the Calgary region. `}
                                    </Box>
                                    They provide members with leading-edge services and opportunities to advance the industry’s development, advocate for the industry, for professional development and to develop industry relationships. The CCA’s mission is to help members thrive now and in to the future, and to be an advocate for the construction industry. They do this through a broad variety of services including educational programming, scholarships, networking opportunities and events, government advocacy work, affinity program and BuildWorks portal.
                                    To signup to MesColis with a CCA membership click here
                                    <Link href='#'>
                                        {` Click Here `}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid
                            container
                            columnSpacing={{ xs: 0, md: 3 }}
                            rowSpacing={{ xs: 5, md: 0 }}
                            justifyContent="space-between"
                        >
                            <Grid
                                xs={12}
                                md={4}
                            >

                                <Image
                                    src="/assets/our-partners/tab-cfib-new-en.svg"
                                    alt="Logo CFIB"
                                    sx={{
                                        width: '100%',
                                    }}
                                />

                                <Button
                                    color="primary"
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 1 }}
                                >
                                    Lean more
                                </Button>
                            </Grid>

                            <Grid xs={12} md={8}>

                                <Stack
                                    spacing={2}
                                >
                                    <Typography sx={{ color: 'text.secondary', fontWeight: 'bold' }}>
                                        The Canadian Federation of Independent Business (CFIB) is the country’s champion of small business. With over 97,000 members, they’re Canada’s largest non-profit organization devoted to creating and supporting an environment where small businesses can succeed.
                                    </Typography>

                                    <Typography sx={{ color: 'text.secondary' }}>
                                        They support businesses in three key ways:
                                    </Typography>

                                  
                                    <ul style={{ color: "#637381", margin: 0 }}>
                                        <li>
                                            <Link href='https://www.cfib-fcei.ca/en/site/advocacy'>
                                                {` Advocacy `}
                                            </Link>
                                            — CFIB fights for policy change that benefits your business.
                                        </li>
                                        <li>
                                            <Link href='https://www.cfib-fcei.ca/en/tools-resources'>
                                                {` Resources `}
                                            </Link>
                                            — a team of advisors is available weekdays for 1-on-1 consultations, offering the advice and resources your business needs to succeed.</li>
                                        <li>
                                            <Link href='https://www.cfib-fcei.ca/en/member-savings'>
                                                {` Savings `}
                                            </Link>
                                            — CFIB negotiated great rates through the strength of our members, and give you access to exclusive discounts on key services to run your business.</li>
                                    </ul>
                                    

                                    <Typography sx={{ color: 'text.secondary' }}>
                                        Take advantage of the
                                        <Link href='https://www.cfib-fcei.ca/en/member-savings'>
                                            {`  MesColis Savings Program  `}
                                        </Link>
                                        today!
                                    </Typography>

                                    <Typography sx={{ color: 'text.secondary' }}>
                                        To signup to MesColis with a CFIB membership click here
                                        <Link href='https://www.cfib-fcei.ca/en/member-savings'>
                                            {`  Click Here `}
                                        </Link>
                                    </Typography>

                                </Stack>

                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="3">
                        <Grid
                            container
                            columnSpacing={{ xs: 0, md: 3 }}
                            rowSpacing={{ xs: 5, md: 0 }}
                            justifyContent="space-between"
                        >
                            <Grid
                                xs={12}
                                md={4}
                            >

                                <Image
                                    src="/assets/our-partners/cangift-official-benefit-supplier-2019-EN-high-res.png"
                                    alt="Logo Cangift"
                                    sx={{
                                        width: '100%',
                                    }}
                                />

                                <Typography sx={{ color: 'text.secondary', textAlign: 'center', pt: 2 }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` To become a Member `}
                                    </Box>
                                </Typography>

                                <Button
                                    color="primary"
                                    href='https://cangift.org/become-a-member/'
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 1 }}
                                >
                                    Apply Now
                                </Button>


                            </Grid>

                            <Grid xs={12} md={8}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` The Canadian Gift Association (CanGift) is the voice and entrepreneurial spirit of Canada’s $10 billion giftware industry. `}
                                    </Box>
                                    Since 1976, their not-for-profit association has worked hard to make their members (giftware wholesalers, distributors, manufacturers, importers and exporters) more competitive and successful by acting as a hub that brings them together with buyers (both local and international) and offering a host of services designed to help cut costs and improve efficiency.
                                    This is highlighted by their traditional bi-annual trade shows in Toronto and Edmonton which unites members together with thousands of retailers from across the country to network, discover the latest trends and develop new and existing business relationships.
                                    Our goal is to offer the benefits of the retail program along with a one-of-a-kind management system solutions for members.
                                    To signup to MesColis with a CanGift membership
                                    <Link href='#'>
                                        {` Click Here `}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="4">
                        <Grid
                            container
                            columnSpacing={{ xs: 0, md: 3 }}
                            rowSpacing={{ xs: 5, md: 0 }}
                            justifyContent="space-between"
                        >
                            <Grid
                                xs={12}
                                md={4}
                            >

                                <Image
                                    src="/assets/our-partners/futurpreneur-1.png"
                                    alt="Logo Futurpreneur"
                                    sx={{
                                        width: '100%',
                                    }}
                                />

                                <Button
                                    color="primary"
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 1 }}
                                >
                                    Lean more
                                </Button>
                            </Grid>

                            <Grid xs={12} md={8}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` Futurpreneur Canada has been fueling the entrepreneurial passions of Canada’s young enterprise for more than two decades. `}
                                    </Box>
                                    Futurpreneur Canada is the only national, non-proﬁt organization that provides ﬁnancing, mentoring and resources to aspiring business owners ages 18 to 39. To date, Futurpreneur has supported over 12,000 young entrepreneurs, and helped launch over 10,000 Canadian businesses. Our internationally recognized mentoring program hand matches young entrepreneurs with a business expert from a network of more than 3,000 volunteer mentors.

                                    To signup to MesColis with a Futurpreneur membership
                                    <Link href='#'>
                                        {` Click Here `}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="5">
                        <Grid
                            container
                            columnSpacing={{ xs: 0, md: 3 }}
                            rowSpacing={{ xs: 5, md: 0 }}
                            justifyContent="space-between"
                        >
                            <Grid
                                xs={12}
                                md={4}
                            >

                                <Image
                                    src="/assets/our-partners/logo-rcc.png"
                                    alt="Logo RCC"
                                    sx={{
                                        width: '100%',
                                    }}
                                />
                                <Button
                                    color="primary"
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 1 }}
                                >
                                    Lean more
                                </Button>
                            </Grid>

                            <Grid xs={12} md={8}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` Retail Council of Canada advocates for retailers in Canada through effective advocacy, communications and education. `}
                                    </Box>
                                    The RCC’s mission is to advance the interests of the retail industry through effective advocacy, communications and education.
                                    RCC has offices in Vancouver, Winnipeg, Toronto, Ottawa, Montreal and Halifax.
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` Become a member and benefit `}
                                    </Box>
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Be part of the strongest retail advocacy association in Canada.
                                </Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="6">
                        <Grid
                            container
                            columnSpacing={{ xs: 0, md: 3 }}
                            rowSpacing={{ xs: 5, md: 0 }}
                            justifyContent="space-between"
                        >
                            <Grid
                                xs={12}
                                md={4}
                            >
                                <Image
                                    src="/assets/our-partners/FC_logo.png"
                                    alt="Logo Founderscard"
                                    sx={{
                                        width: '100%',
                                    }}
                                />
                                <Button
                                    color="primary"
                                    fullWidth
                                    variant='contained'
                                    sx={{ mt: 1 }}
                                >
                                    Lean more
                                </Button>
                            </Grid>

                            <Grid xs={12} md={8}>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` FoundersCard is a Membership community of over 100,000 entrepreneurs and business executives who receive unprecedented benefits and networking opportunities.`}
                                    </Box>
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` Premier Business Solutions: `}
                                    </Box>
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    FoundersCard helps businesses of all sizes succeed with a valuable program of exclusive benefits and savings on computers, shipping, wireless providers, co-working spaces, and more.
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Partners include: AWS, Dell, Shopify, Slack, Lenovo, Zoom, and more…
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                                        {` Curated Lifestyle Privileges `}
                                    </Box>
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    FoundersCard offers Members-only pricing, privileges, and promotions with a wide network of leading fashion, fitness and entertainment brands.
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Partners include: MR PORTER, adidas, John Varvatos, Audi, Bang & Olufsen, Porsche Drive, Molton Brown, BMW and more
                                </Typography>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    );
}

// ----------------------------------------------------------------------
