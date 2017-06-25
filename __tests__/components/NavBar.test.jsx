import React from 'react';
import { shallow, mount , render } from 'enzyme';
import NavBar from '../../src/components/header/NavBar';

describe('NavBar', () => {
  const props = {
    isAuthenticated: true
  }

  it('renders without crashing', () => {
    shallow(<NavBar />);
  });


  it('logOut should be defined', () => {
    const logOut = jest.fn()
    logOut();
    expect(logOut).toBeDefined();
  });

  it('logOut', () => {
    const spy = jest.spyOn(NavBar.prototype, 'logOut');
    const container = shallow(<NavBar {...props}/>);
    container.instance().logOut();
    expect(spy).toHaveBeenCalled();
  });

  it('update isAuthenticated state', () => {
    const container = shallow(<NavBar {...props}/>);
    expect(container.state().isAuthenticated).toBe(true);
  });
})
