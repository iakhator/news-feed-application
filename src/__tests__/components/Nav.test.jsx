import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
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
      const logOut = jest.spyOn('Nav', logOut)
      expect(container.instance().logOut).toBeDefined();
		});

  it('update isAuthenticated state', () => {
    expect(container.state().isAuthenticated).toBe(true);
    });
})
