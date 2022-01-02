import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onHandleChangePage: PropTypes.func
};

function Pagination(props) {
  const { pagination, onHandleChangePage } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);

  const handleChangePage = (newPage) => {
    if (onHandleChangePage) {
      if (_page >= 1 && _page <= totalPage) {
        onHandleChangePage(newPage);
      }
    }
  }

  return (
    <div>
      <button onClick={() => handleChangePage(_page - 1)} disabled={_page <= 1}>Previous</button>
      <button onClick={() => handleChangePage(_page + 1)} disabled={_page >= totalPage}>Next</button>
    </div>
  );
}

export default Pagination;