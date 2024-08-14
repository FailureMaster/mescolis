import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'google',
  'facebook',
  'tripadvisor',
  'airbnb',
  'dropbox',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'vimeo',
];

const BRANDS_COMPANY = [
  'canada-purolator.svg',
  'canada-post.svg',
  'canada-gls.svg',
  'canada-fedex.svg',
  'canada-uber.svg',
  'canada-loomis.svg',
  'canada-dhl.png',
  'canada-nationex.png',
  'canada-canpar.svg',
  'canada-ups.svg',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_COMPANY.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/brands/${brand}`,
}));


// ----------------------------------------------------------------------

export const _faqs = [
  'What is MesColis?',
  'What Can I Ship with MesColis?',
  'Where can I Ship?',
  'Can I Ship Dangerous Goods through MesColis?',
  'What is Dimensional Weight?',
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: [
    'MesColis is a reliable shipping service for various types of packages.',
    'With MesColis, you can ship a wide range of items, excluding restricted goods.',
    'You can ship to various locations, both domestically and internationally.',
    'MesColis does not allow the shipment of dangerous goods due to safety regulations.',
    'Dimensional weight is a pricing method based on the package size rather than its actual weight.',
  ][index],
}));

export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach.',
}));
