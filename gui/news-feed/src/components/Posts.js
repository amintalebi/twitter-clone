import React, { Component } from 'react';
import { connect } from "react-redux";
import { deletePost } from "../store/actioncreators/postActions";
import M from 'materialize-css';

class Posts extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            const elem = document.querySelectorAll('.materialboxed');
            const instances = M.Materialbox.init(elem, {});
        });
    }

    render() {
        const posts = this.props.posts;
        const postList = posts.map((post) => {
            return posts.length > 0 ? (
                <div className="card" key={ post.id }>
                    <div className="card-image">
                        <img className="materialboxed" width="650" src="https://source.unsplash.com/random" />
                        <a href="#" className="halfway-fab btn-floating pink pulse">
                            <i className="material-icons">favorite</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{ post.title }</span>
                        <p>{ post.content }</p>
                    </div>
                    <div className="card-action">
                        <a href="#">More Details</a>
                        <a href="#">View Ingredients</a>
                        <a href="#" onClick={() => this.props.deletePost(post.id)}>Delete Post</a>
                    </div>
                </div>
            ) : (
                <p>no post yet</p>
            )
        });
        return (
            <div className="Posts">
                { postList }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.post.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
