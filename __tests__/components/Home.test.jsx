import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../../src/components/home/Home';

const props = {
  isAuthenticated: false,
};

describe('<Home />', () => {
  const container = shallow(<Home {...props} />);

  it('renders without crashing', () => {
    mount(<Home {...props} />);
  });

  it('Should set a state', () => {
    expect(container.state().isAuthenticated).toBe(false);
  });

  it('should have a login method', () => {
    container.instance().login();
  });

  it('Should make sure <div /> tags exist', () => {
    expect(container.find('div').toExist);
  });

  it('Should have a class home-page', () => {
    expect(container.is('.home-page')).toBe(true);
  });

  it('should render to static text', () => {
    expect(render(<Home />).text())
    .toEqual('News Flash News Flash, Get the latest news around the globe here Login With Google');
  });
});
