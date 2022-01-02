import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
  datas: PropTypes.array,
  onDelItem: PropTypes.func
};

function List(props) {
  const { datas, onDelItem } = props;

  const handleDelItem = (item) => {
    if (onDelItem) {
      onDelItem(item);
    }
  }

  return (
    <div>
      <ul>
        {datas.map((item) =>
          <li
            key={item.id}
            onClick={() => handleDelItem(item)}>
            {item.name}
          </li>)}
      </ul>
    </div>
  );
}

export default List;