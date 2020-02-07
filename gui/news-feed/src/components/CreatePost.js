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
    Box,
    InputBase,
    Divider,
} from "@material-ui/core";
import  { withStyles } from "@material-ui/core";
import {AddPhotoAlternateRounded, FormatBoldRounded, FormatItalicRounded, MenuRounded} from "@material-ui/icons";
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
    cardAction: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imageInput: {
        display: "none",
    },
    saveButton: {
        borderRadius: 100,
        color: "white",
        backgroundColor: theme.palette.primary.main,
        height: 35,
        padding: theme.spacing(0, 2),
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    iconButton: {
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        },
        boxSizing: "border-box",
        width: 35,
        height: 35,
        marginLeft: theme.spacing(1),
    },
});

class CreatePost extends Component {
    state = {
        content: this.props.default ? this.props.default.content : "",
        image: this.props.default ? this.props.default.media.src : "",
    };

    textInputOnChangeHandler = (e) => {
        this.setState({
            content: e.target.value,
        });
    };

    loadImageButton = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            this.setState({
                image: reader.result,
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    removeImage = (e) => {
        this.setState({
            image: "",
        });
    };

    render() {
        const { classes, myAccount, channelID } = this.props;
        const { content, image, bold, italic } = this.state;
        return (
            <Card variant="outlined" classes={{root: classes.root}}>
                <CardHeader
                    classes={{avatar: classes.avatar}}
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            alt={ myAccount.name }
                            src={ myAccount.icon }
                        />
                    }
                />
                <CardContent>
                    <InputBase
                        multiline
                        rowsMax="3"
                        className={classes.contentInput}
                        placeholder="هرچه دل تنگت می‌خواهد بگو!"
                        onInput={this.textInputOnChangeHandler}
                        value={content}
                    />
                </CardContent>
                <CardMedia
                    component= {image ?  "img" : "div"}
                    classes={{root: classes.mediaRoot, img: classes.img}}
                    image={ image }
                />
                <CardActions className={classes.cardAction}>
                    <Box>
                        <Button component="span" color="primary" className={classes.saveButton}>
                            ذخیره کردن
                        </Button>
                    </Box>
                    <Box>
                        <input
                            onChange={this.loadImageButton}
                            accept="image/*"
                            className={classes.imageInput}
                            id="outlined-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="outlined-button-file">
                            <IconButton
                                color="primary"
                                component="span"
                                className={classes.iconButton}
                            >
                                <AddPhotoAlternateRounded fontSize="medium"/>
                            </IconButton>
                        </label>
                        {
                            image ? (
                                <Button color="primary" className={classes.saveButton} onClick={this.removeImage}>
                                    حذف عکس
                                </Button>
                            ) : null
                        }
                    </Box>

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
