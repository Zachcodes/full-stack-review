import React from 'react';

function Post(props) {
  let { title, content } = props;
  return (
    <div className="post-container">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Post;
