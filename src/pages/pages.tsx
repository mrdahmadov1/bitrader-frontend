import MainLayout from '../layouts/mainLayout';
import { ComponentType, Suspense, lazy } from 'react';
import LoadingSpinner from '@/components/shared/loadingSpinner';

const withLayout = (Component: ComponentType) => {
  return () => (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Component />
      </Suspense>
    </MainLayout>
  );
};

const Home = lazy(() => import('./main/home'));
const Register = lazy(() => import('./auth/register'));
const Login = lazy(() => import('./auth/login'));
const ResetPassword = lazy(() => import('./auth/resetPassword'));
const About = lazy(() => import('./main/about'));
const Services = lazy(() => import('./main/services'));
const ServiceDetails = lazy(() => import('./main/serviceDetails'));
const Price = lazy(() => import('./main/price'));
const Team = lazy(() => import('./main/team'));
const TeamDetails = lazy(() => import('./main/teamDetails'));
const Blogs = lazy(() => import('./main/blogs'));
const BlogDetails = lazy(() => import('./main/blogDetails'));
const Contact = lazy(() => import('./main/contact'));
const NotFound = lazy(() => import('./notFound'));

const pagesData = [
  {
    path: '',
    element: withLayout(Home)(),
    title: 'Home',
  },
  {
    path: 'register',
    element: withLayout(Register)(),
    title: 'Sign Up',
  },
  {
    path: 'login',
    element: withLayout(Login)(),
    title: 'Sign In',
  },
  {
    path: 'reset-password',
    element: withLayout(ResetPassword)(),
    title: 'Reset Password',
  },
  {
    path: 'services',
    title: 'Services',
    children: [
      {
        path: '',
        element: withLayout(Services)(),
        title: 'All Services',
      },
      {
        path: ':id',
        element: withLayout(ServiceDetails)(),
        title: 'Service',
      },
    ],
  },
  {
    path: 'about',
    title: 'About',
    children: [
      {
        path: '',
        element: withLayout(About)(),
        title: 'About Us',
      },
      {
        path: 'price',
        element: withLayout(Price)(),
        title: 'Price',
      },
      {
        path: 'team',
        title: 'Teams',
        children: [
          {
            path: '',
            element: withLayout(Team)(),
            title: 'All Team',
          },
          {
            path: ':id',
            element: withLayout(TeamDetails)(),
            title: 'Member',
          },
        ],
      },
    ],
  },
  {
    path: 'blogs',
    title: 'Blogs',
    children: [
      {
        path: '',
        element: withLayout(Blogs)(),
        title: 'All Blogs',
      },
      {
        path: ':id',
        element: withLayout(BlogDetails)(),
        title: 'Blog',
      },
    ],
  },
  {
    path: 'contact',
    element: withLayout(Contact)(),
    title: 'contact',
  },
  {
    path: '*',
    element: <NotFound />,
    title: '404',
  },
];

export default pagesData;
