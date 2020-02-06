import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {deletePost} from "../store/actioncreators/postActions";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {signUp} from "../store/actioncreators/accountAction";
import {withRouter} from "react-router";

const styles =theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends Component{
  state = {
    name: '',
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
    showPassword: false,
  };

  handleChange = (prop) => (e) => {
    this.setState({
      [prop]: e.target.value
    });
  };

  signUp = (e) => {
    if (this.state.password !== this.state.repeatPassword) {
      alert("پسورد ها متفاوت اند")
    }
    else {
      this.props.signUp(this.state.name, this.state.userName, this.state.email, this.state.password);
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.message !== prevProps.message) {
      console.log("component did update")
      console.log(prevProps)
      console.log(this.props)
      if (this.props.message.result) {
        alert("با موفقیت ثبت نام شدید");
        this.props.history.push("sign-in")
      }
      else alert(this.props.result.error)
    }
  }

  render() {
    const {classes} = this.props;
    const {name,
      userName,
      email,
      password,
      repeatPassword,
      showPassword} = this.state
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ثبت نام
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="نام کاربری"
                      autoFocus
                      value={name}
                      onChange={this.handleChange("name")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="شناسه کاربری"
                      autoFocus
                      value={userName}
                      onChange={this.handleChange("userName")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="آدرس ایمیل"
                      name="email"
                      autoComplete="email"
                      value={email}
                      onChange={this.handleChange("email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="گذرواژه"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={this.handleChange("password")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="تکرار گذرواژه"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={repeatPassword}
                      onChange={this.handleChange("repeatPassword")}
                  />
                </Grid>
              </Grid>
              <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.signUp}
              >
                ثبت نام
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    حساب کاربری دارید؟ وارد شوید
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    message: state.account.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (name, userName, email, password) => dispatch(signUp(name, userName, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(SignUp)));
