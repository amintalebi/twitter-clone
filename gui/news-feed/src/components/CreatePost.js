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
import {
    AddPhotoAlternateRounded,
    FormatBoldRounded,
    FormatItalicRounded,
    MenuRounded,
    VideoCallRounded
} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import ReactPlayer from "react-player";
import Swal from "sweetalert2";
import {Editor, EditorState, RichUtils} from 'draft-js';


const styles = theme => ({
    root: {
        borderStyle: "solid",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: theme.palette.tertiary.main,
        borderRadius: 0,
        width: "100%",

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
    editor: {
        border: '1px solid gray',
        minHeight: '6em'
    },
});

class CreatePost extends Component {
    state = {
        content: this.props.default && this.props.default.content ? this.props.default.content : "",
        image: this.props.default && this.props.default.media ? this.props.default.media.src : "",
        video: this.props.default && this.props.default.media ? this.props.default.media.src : "",
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
                video: "",
                image: reader.result,
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    removeImage = (e) => {
        this.setState({
            image: "",
            video: "",
        });
    };

    readVideoUrl = async (e) => {
        const { value: url } = await Swal.fire({
            input: 'url',
            inputPlaceholder: 'Enter the URL'
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
            this.setState({
                video: url,
                image: "",
            })
        }
    };


    render() {
        const { classes, myAccount, channelID } = this.props;
        const { content, image, video } = this.state;

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
                {
                    image ? (
                        <CardMedia
                            component= "img"
                            classes={{root: classes.mediaRoot, img: classes.img}}
                            image={ image }
                        />
                    ) : null
                }
                {
                    !image && video ? (
                        <CardMedia>
                            <ReactPlayer
                                url={video}
                                width='100%'
                                height='220px'
                            />
                        </CardMedia>
                    ) : null
                }
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
                            id={"outlined-button-file" + this._reactInternalFiber._debugID }
                            multiple
                            type="file"
                        />
                        <label htmlFor={"outlined-button-file" + this._reactInternalFiber._debugID}>
                            <IconButton
                                color="primary"
                                component="span"
                                className={classes.iconButton}
                            >
                                <AddPhotoAlternateRounded fontSize="medium"/>
                            </IconButton>
                        </label>
                        <IconButton
                            onClick={this.readVideoUrl}
                            color="primary"
                            component="span"
                            className={classes.iconButton}
                        >
                            <VideoCallRounded fontSize="medium"/>
                        </IconButton>
                        {
                            image || video ? (
                                <Button color="primary" className={classes.saveButton} onClick={this.removeImage}>
                                    حذف مدیا
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

