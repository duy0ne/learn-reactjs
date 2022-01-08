import React, { useRef } from 'react';
import ConcreateMediator from '../ConcreateMediator';
import Content from './content/Content';
import Header from './header/Header';

Survey.propTypes = {

};

let mediator: any;

function Survey() {
  mediator = useRef(new ConcreateMediator());

  const handleSubmit = () => {

  }

  return (
    <div>
      <Header></Header>
      <Content onSubmit={handleSubmit} mediator={mediator.current}></Content>
    </div>
  );
}

export default Survey;