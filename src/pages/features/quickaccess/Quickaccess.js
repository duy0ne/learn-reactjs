import React, { useEffect, useState } from 'react';
import Form from './form/Form';
import List from './list/List';
import Pagination from './pagination/Pagination';
import PostList from './postList/PostList';
import queryString from 'query-string';
import Clock from './clock/Clock';
import useClock from '../../../hook/clock/useClock';
import BoxColor from './boxColor/BoxColor';
import { useLocation, useNavigate } from 'react-router-dom';

Quickaccess.propTypes = {

};


function Quickaccess(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const listData = [{ id: 1, name: 'khanh duy' }, { id: 2, name: 'hoang thuong' }, { id: 3, name: 'khanh an' }];
  const [list, setList] = useState(listData);
  const [datas, setDatas] = useState([]);
  const [lable, setLable] = useState(0);
  const [val, setVal] = useState(true);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50
  })

  const [filter, setFilter] = useState(() => {
    const params = queryString.parse(location.search);
    const filter = {
      _page: params._page ? params._page : 1,
      _limit: params._limit ? params._limit : 10,
      _totalRows: params._totalRows ? params._totalRows : 50,
      title_like: params.title_like ? params.title_like : ''
    }

    return filter;
  });


  const [isShowClock, setIsShowClock] = useState(true);

  useEffect(() => {
    console.log('useEffect1');
    const getData = async () => {
      const paramsString = queryString.stringify({ ...filter });
      const url = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

      const dataRes = await fetch(url);
      const dataJSON = await dataRes.json();

      setDatas(dataJSON.data);
      setPagination(dataJSON.pagination);

      return () => {
        console.log('test clean up1!')
      }
    }
    getData();
  }, [filter]);

  useEffect(() => {
    const params = queryString.parse(location.search);
    const filter = {
      _page: params._page ? params._page : 1,
      _limit: params._limit ? params._limit : 10,
      _totalRows: params._totalRows ? params._totalRows : 50,
      title_like: params.title_like ? params.title_like : ''
    }

    setFilter(filter);
  }, [location.search])


  useEffect(() => {
    console.log('useEffect2')
    setLable((lable) => lable + 1)

    return () => {
      console.log('test clean up2!')
    }
  }, [val]);

  const handleDelItem = (item1) => {
    const idx = list.findIndex((item2) => item2.id === item1.id);
    if (idx < 0) return;
    const newList = [...listData];
    newList.splice(idx, 1);
    setList(newList);
  }

  const handleOnSubmit = (val) => {
    const queryParams = {
      ...filter,
      _page: 0,
      title_like: val
    }
    navigate(`${location.pathname}?${queryString.stringify(queryParams)}`);
  }

  const handleOnClick = () => {
    setVal(!val);
  }

  const handleChangePage = (page) => {
    console.log('page', page);
    const queryParams = {
      ...filter, _page: page
    }
    navigate(`${location.pathname}?${queryString.stringify(queryParams)}`);
  }

  const handeHideClock = () => {
    setIsShowClock(!isShowClock);
  }

  const { timeString } = useClock('');

  return (
    <div>
      <h1>Quickaccess</h1>
      <h1>{lable}</h1>
      <button onClick={handleOnClick}>Change</button>
      {isShowClock ? <Clock></Clock> : ''}
      <span>{timeString}</span>
      <button onClick={handeHideClock}>Hide Clock</button>
      <Form onSubmit={handleOnSubmit}></Form>
      <PostList datas={datas}></PostList>
      <Pagination pagination={pagination} onHandleChangePage={handleChangePage}></Pagination>
      <List datas={list} onDelItem={handleDelItem}></List>
      <BoxColor></BoxColor>
    </div>
  );
}

export default Quickaccess;