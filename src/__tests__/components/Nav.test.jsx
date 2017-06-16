import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { shallow, mount , render } from 'enzyme';
import sinon from 'sinon';
import Nav from '../../components/header/Nav';

describe('Nav', () => {
  const props = {
    isAuthenticated: true
  }
  const container = shallow(<Nav {...props}/>);


  it('renders without crashing', () => {
    shallow(<Nav />);
  });


  it('logOut should be defined', () => {
      expect(container.instance().logOut).toBeDefined();
		});

  it('update isAuthenticated state', () => {
    expect(container.state().isAuthenticated).toBe(true);
  });
});