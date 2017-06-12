import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { shallow, mount , render } from 'enzyme';
import sinon from 'sinon';
import Nav from '../../components/header/Nav';

describe('Nav', () => {
  // let nav;
  // let authenticate;
  // let spy;

  // beforeEach(() => {
  //   spy = jest.fn();
  //   authenticate = jest.fn();
  //   nav = mount(<BrowserRouter><Nav authenticate={authenticate} /></BrowserRouter>);
  // });

  it('renders without crashing', () => {
    mount(<BrowserRouter><Nav /></BrowserRouter>);
  });

  it('Should check the length og "nav" tag', () => {
    const container = mount(<BrowserRouter><Nav /></BrowserRouter>);
    expect(container.find('nav').length).toEqual(1);
  });

  // it('Nav requires authenticate prop', () => {
  //   expect(nav.props().authenticate).toBeDefined();
  // });

  // it('clone should call handleCloneClick when clicked', () => {
  //   sinon.spy(Nav.prototype, 'logOut');
  //   const container = mount(<BrowserRouter><Nav/></BrowserRouter>);
  //   container.find('a').last().simulate('click');
  //   expect(spy).toHaveBeenCalled()
  // });
});