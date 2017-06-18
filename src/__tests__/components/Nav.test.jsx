import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
import Nav from '../../components/header/Nav';

describe('Nav', () => {
  const props = {
    isAuthenticated: true
  }

  it('renders without crashing', () => {
    shallow(<Nav />);
  });


  it('logOut should be defined', () => {
    const logOut = jest.fn()
    logOut();
    expect(logOut).toBeDefined();
  });

  it('logOut', () => {
    const spy = jest.spyOn(Nav.prototype, 'logOut');
    const container = shallow(<Nav {...props}/>);
    container.instance().logOut();
    expect(spy).toHaveBeenCalled();
  });

  it('update isAuthenticated state', () => {
    const container = shallow(<Nav {...props}/>);
    expect(container.state().isAuthenticated).toBe(true);
  });
})
