import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost } from '../redux/postsReducer';
import Post from './Post';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    let { getPosts, posts, userId } = this.props;
    if (!posts.length) {
      getPosts(userId);
    }
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addPost = () => {
    let { title, content } = this.state;
    this.setState({ title: '', content: '' });
    this.props.savePost(title, content);
  };

  render() {
    let { title, content } = this.state;
    let { posts } = this.props;
    return (
      <div>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
        <div>
          <input
            type="text"
            value={title}
            name="title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={content}
            name="content"
            onChange={this.handleChange}
          />
          <button onClick={this.addPost}>Add Post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user.id,
    ...state.posts
  };
}

export default connect(
  mapStateToProps,
  { getPosts, savePost }
)(Posts);
