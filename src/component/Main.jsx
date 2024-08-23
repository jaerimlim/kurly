import React, { Component } from 'react';
import Slide from '../product/Slide';
import Bestitem from '../product/Bestitem';
import Recommand from '../product/Recommand';
import Banner from '../product/Banner';
import Oneday from '../product/Oneday';


class Main extends Component {
  render() {
    return (
      <>
        <Slide />
        <Bestitem />
        <Recommand />
        <Banner />
        <Oneday />
      </>
    );
  }
}

export default Main;