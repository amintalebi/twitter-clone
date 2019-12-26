import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}));

const sections = [
  { title: 'دنبال شده‌ها', url: '#' },
  { title: 'تازه‌ترین‌ها', url: '#' },
  { title: 'داغ‌ترین‌ها', url: '#' },
  { title: 'شرکت‌ کرده‌ها', url: '#' },
];

const mainFeaturedPost = {
  title: 'عنوان پست منتخب اصلی',
  description:
    "توضیحی مختصر از پست منتخب اصلی",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'ادامه...',
};

const featuredPosts = [
  {
    title: 'پست منتخب',
    date: '۵ دی',
    description:
      'توضیحی مختصر درباره‌ی پست منتخب',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'عنوان پست',
    date: '۹ دی',
    description:
      'توضیح مختصر درباره‌ی پست',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'درباره‌ی سایت',
  description:
    'سایتی برای دنبال کردن اخبار و به اشتراک گذاری آن‌ها',
  archives: [
    { title: 'آذر ۹۸', url: '#' },
    { title: 'آبان ۹۸', url: '#' },
    { title: 'مهر ۹۸', url: '#' },
    { title: 'شهریور ۹۸', url: '#' },
    { title: 'مرداد ۹۸', url: '#' },
    { title: 'تیر ۹۸', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="خبر" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="لیست‌ پست‌ها" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="اخبار" description="ساخته شده با عشق در دانشگاه صنعتی شریف" />
    </React.Fragment>
  );
}