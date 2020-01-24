import React from 'react';
import { connect } from "react-redux";
import { deletePost } from "../store/actioncreators/postActions";

function Posts(props) {
    const posts = props.posts;
    const postList = posts.map((post) => {
        return posts.length > 0 ? (
            <div className="card" key={ post.id }>
                <div className="card-image">
                    <img src="../store/images/1.jpg" alt="an image" />
                    <a href="#" className="halfway-fab btn-floating pink pulse">
                        <i className="material-icons">favorite</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title">{ post.title }</span>
                    <p>{ post.content }</p>
                </div>
                <div className="card-action">
                    <a href="#">More Detais</a>
                    <a href="#">View Ingredients</a>
                    <a href="#" onClick={() => props.deletePost(post.id)}>Delete Post</a>
                </div>
            </div>
        ) : (
            <p>no post yet</p>
        )
    });

    return (
        <div className="card">
            { postList }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
