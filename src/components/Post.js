import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../redux/postsReducer';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: props.title,
      newContent: props.content,
      editing: false
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  flipEdit = () => this.setState({ editing: !this.state.editing });

  save = () => {
    let { id, editPost } = this.props;
    let { newTitle, newContent } = this.state;
    editPost(id, newTitle, newContent);
  };

  delete = () => {
    let { id, deletePost } = this.props;
    deletePost(id);
  };

  componentDidUpdate(prevProps) {
    let { title, content } = prevProps;
    if (title !== this.props.title || content !== this.props.content) {
      this.setState({
        newTitle: title,
        newContent: content,
        editing: false
      });
    }
  }

  render() {
    let { title, content } = this.props;
    let { newTitle, newContent, editing } = this.state;

    return (
      <div className="post-container">
        {editing ? (
          <div>
            <input
              value={newTitle}
              onChange={this.handleChange}
              name="newTitle"
            />
            <input
              value={newContent}
              onChange={this.handleChange}
              name="newContent"
            />
            <div>
              <button onClick={this.save}>Save</button>
              <button onClick={this.flipEdit}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <h4>{title}</h4>
            <p>{content}</p>
            <div>
              <button onClick={this.flipEdit}>Edit</button>
              <button onClick={this.delete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost, editPost }
)(Post);
