import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/header/NavBar';


describe('NavBar', () => {
  const props = {
    isAuthenticated: true
  };

  it('should render without crashing', () => {
    shallow(<NavBar />);
  });

  it('should have a logOut method', () => {
    const container = shallow(<NavBar {...props} />);
    container.instance().logOut();
  });

  it('should update isAuthenticated state', () => {
    const container = shallow(<NavBar {...props} />);
    expect(container.state().isAuthenticated).toBe(true);
  });
});
