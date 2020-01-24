import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

<<<<<<< HEAD
<<<<<<< HEAD
class Main extends Component {
    render() {
        return (
          <div className='Main'>
              <Tabs/>
              <Route path='/home/following' component={Posts} />
              <Route path='/home/newest' component={Posts} />
              <Route path='/home/hottest' component={Posts} />
              <Route path='/home/participated' component={Posts} />
          </div>
        );
    }
}

export default withRouter(Main);
=======
const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

=======
const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
    console.log(props, "main props")

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

>>>>>>> parent of 41877e1... style folder added,
Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
<<<<<<< HEAD
>>>>>>> parent of 939b5b7... package marked added and used in blog.
=======
>>>>>>> parent of 41877e1... style folder added,
