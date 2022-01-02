import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  datas: PropTypes.array
};

function PostList(props) {
  const { datas } = props;
  return (
    <div>
      <ul>
        {datas.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default PostList;