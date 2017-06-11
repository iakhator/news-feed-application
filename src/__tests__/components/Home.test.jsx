import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Home from '../../components/home/Home';

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home/>, div);
  });

  it('Should have an initial isAuthenticated state', () => {
    const home = TestUtils.renderIntoDocument(<Home/>);
    expect(home.state.isAuthenticated).toBe(false);
  });

  it('Should have a function to login', () => {
    const home = shallow(<Home />);
    home.instance().login;
  });

});