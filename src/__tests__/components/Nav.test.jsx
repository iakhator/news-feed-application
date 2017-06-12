import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { shallow, mount , render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Nav from '../../components/header/Nav';

describe('Nav', () => {
  it('Should have a function to logout', () => {
    const container = shallow(<BrowserRouter><Nav /></BrowserRouter>);
    container.instance().logOut;
  });
});