import React from 'react';
import ConcreateMediator from '../ConcreateMediator';
import Content from './content/Content';
import Header from './header/Header';

Survey.propTypes = {

};

const mediator = new ConcreateMediator();

function Survey() {

  const handleSubmit = () => {

  }

  return (
    <div>
      <Header></Header>
      <Content onSubmit={handleSubmit} mediator={mediator}></Content>
    </div>
  );
}

export default Survey;