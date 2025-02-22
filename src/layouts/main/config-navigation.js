import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    subheader: 'Marketing',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: 'Landing', path: paths.marketing.root },
      { title: 'Services', path: paths.marketing.services },
      { title: 'Case Studies', path: paths.marketing.caseStudies },
      { title: 'Case Study', path: paths.marketing.caseStudy },
      { title: 'Blog Posts', path: paths.marketing.posts },
      { title: 'Blog Post', path: paths.marketing.post },
      { title: 'About', path: paths.marketing.about },
      { title: 'Contact', path: paths.marketing.contact },
    ],
  },
  {
    order: '6',
    subheader: 'Travel',
    cover: '/assets/images/menu/menu_travel.jpg',
    items: [
      { title: 'Landing', path: paths.travel.root },
      { title: 'Tours', path: paths.travel.tours },
      { title: 'Tour', path: paths.travel.tour },
      { title: 'Checkout', path: paths.travel.checkout },
      { title: 'Order Completed', path: paths.travel.orderCompleted },
      { title: 'Blog Posts', path: paths.travel.posts },
      { title: 'Blog Post', path: paths.travel.post },
      { title: 'About', path: paths.travel.about },
      { title: 'Contact', path: paths.travel.contact },
    ],
  },
  {
    order: '2',
    subheader: 'Career',
    cover: '/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Landing', path: paths.career.root },
      { title: 'Jobs', path: paths.career.jobs },
      { title: 'Job', path: paths.career.job },
      { title: 'Blog Posts', path: paths.career.posts },
      { title: 'Blog Post', path: paths.career.post },
      { title: 'About', path: paths.career.about },
      { title: 'Contact', path: paths.career.contact },
    ],
  },
  {
    order: '5',
    subheader: 'E-learning',
    cover: '/assets/images/menu/menu_elearning.jpg',
    items: [
      { title: 'Landing', path: paths.eLearning.root },
      { title: 'Courses', path: paths.eLearning.courses },
      { title: 'Course', path: paths.eLearning.course },
      { title: 'Blog Posts', path: paths.eLearning.posts },
      { title: 'Blog Post', path: paths.eLearning.post },
      { title: 'About', path: paths.eLearning.about },
      { title: 'Contact', path: paths.eLearning.contact },
    ],
  },
  {
    isNew: true,
    order: '3',
    subheader: 'E-commerce',
    cover: '/assets/images/menu/menu_ecommerce.jpg',
    items: [
      { title: 'Landing', path: paths.eCommerce.root },
      { title: 'Products', path: paths.eCommerce.products },
      { title: 'Product', path: paths.eCommerce.product },
      { title: 'Cart', path: paths.eCommerce.cart },
      { title: 'Checkout', path: paths.eCommerce.checkout },
      { title: 'Order Completed', path: paths.eCommerce.orderCompleted },
      { title: 'Wishlist', path: paths.eCommerce.wishlist },
      { title: 'Compare', path: paths.eCommerce.compare },
      { title: 'Account Personal', path: paths.eCommerce.account.personal },
      { title: 'Account Wishlist', path: paths.eCommerce.account.wishlist },
      { title: 'Account Vouchers', path: paths.eCommerce.account.vouchers },
      { title: 'Account Orders', path: paths.eCommerce.account.orders },
      { title: 'Account Payment', path: paths.eCommerce.account.payment },
    ],
  },
  {
    order: '4',
    subheader: 'Common',
    items: [
      { title: 'Login Cover', path: paths.loginCover },
      { title: 'Login Illustration', path: paths.loginIllustration },
      { title: 'Login Background', path: paths.loginBackground },
      { title: 'Register Cover', path: paths.registerCover },
      { title: 'Register Illustration', path: paths.registerIllustration },
      { title: 'Register Background', path: paths.registerBackground },
      { title: 'Forgot Password', path: paths.forgotPassword },
      { title: 'Verify Code', path: paths.verify },
      { title: '404 Error', path: paths.page404 },
      { title: '500 Error', path: paths.page500 },
      { title: 'Maintenance', path: paths.maintenance },
      { title: 'ComingSoon', path: paths.comingsoon },
      { title: 'Pricing 01', path: paths.pricing01 },
      { title: 'Pricing 02', path: paths.pricing02 },
      { title: 'Payment', path: paths.payment },
      { title: 'Support', path: paths.support },
    ],
  },
];

// export const navConfig = [
//   { title: 'Home', path: '/' },
//   { title: 'Components', path: 'paths.components.root' },
//   {
//     title: 'Pages',
//     path: paths.pages,
//     children: [pageLinks[0], pageLinks[1], pageLinks[2], pageLinks[3], pageLinks[4], pageLinks[5]],
//   },
//   { title: 'Docs', path: paths.docs },
// ];

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'How It Works',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '#',
  },
  { title: 'Our Partners', path: '#' },
  {
    title: 'Couriers',
    path: '#',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      { title: 'Canada', path: '#' },
      { title: 'United States', path: '#' },
      { title: 'Rest of the World', path: '#' },
    ],
  },
  {
    title: 'Resources',
    path: '#',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      { title: 'Support', path: '#' },
      { title: 'Developers', path: '#' },
      { title: 'Blog', path: '#' },
    ],
  },
];