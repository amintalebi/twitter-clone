import React, { Component } from "react";
import { withRouter, Switch } from "react-router";
import Posts from "./Posts";
import Tabs from "./Tabs";
import { Route } from "react-router-dom";

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

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
>>>>>>> parent of 939b5b7... package marked added and used in blog.
