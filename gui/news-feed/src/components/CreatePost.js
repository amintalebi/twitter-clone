import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePost } from "../store/actioncreators/postActions";
import {
    Card,
    CardActionArea,
    CardActions,
    CardHeader,
    CardMedia,
    Avatar,
    Typography,
    CardContent,
    IconButton,
    Box, InputBase
} from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    root: {
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        borderRadius: 0,
    },
    avatar: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(0),
    },
    contentInput: {
        border: "none",
        width: "95%",
    },
    mediaRoot: {
        height: 0,
    },
    img: {
        height: 220,
    },
    imageInput: {
        display: "none",
    },
});

class CreatePost extends Component {
    state = {
        content: "",
        image: "",
    };

    textInputOnChangeHandler = (e) => {
        this.setState({
            content: e.target.value,
        });
    };

    loadImage = (e) => {
        let reader = new FileReader();
        console.log(this.state)
        reader.onload = () => {
            this.setState({
                image: reader.result,
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    render() {
        const { classes, myAccount } = this.props;
        const { content, image } = this.state;
        return (
            <Card variant="outlined" classes={{root: classes.root}}>
                <CardHeader
                    classes={{avatar: classes.avatar, title: classes.title, subheader: classes.subheader}}
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            alt={ myAccount.name }
                            src={ myAccount.icon }
                        />
                    }
                    title={
                        <InputBase
                            multiline
                            rowsMax="3"
                            className={classes.contentInput}
                            placeholder="هرچه دل تنگت می‌خواهد بگو!"
                            onInput={this.textInputOnChangeHandler}
                            value={content}
                        />
                    }
                />
                <CardMedia
                    component= {image ?  "img" : "div"}
                    classes={{root: classes.mediaRoot, img: classes.img}}
                    image={ image }
                />
                <CardActions>
                    <input
                        onChange={this.loadImage}
                        accept="image/*"
                        className={classes.imageInput}
                        id="outlined-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span" >
                            عکس
                        </Button>
                    </label>
                    <Button variant="outlined" component="span" >
                        ذخیره کردن
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        myAccount: {name: "علی", icon: "https://picsum.photos/300/300"}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMyPost: (id) => dispatch(deletePost(id)),
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CreatePost));
