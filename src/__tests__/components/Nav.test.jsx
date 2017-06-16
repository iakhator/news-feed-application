import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { shallow, mount , render } from 'enzyme';
import sinon from 'sinon';
import Nav from '../../components/header/Nav';

describe('Nav', () => {
<<<<<<< HEAD
  // let nav;
  // let authenticate;
  // let spy;

  // beforeEach(() => {
  //   spy = jest.fn();
  //   authenticate = jest.fn();
  //   nav = mount(<BrowserRouter><Nav authenticate={authenticate} /></BrowserRouter>);
  // });
=======
  const props = {
    isAuthenticated: true
  }
  const container = shallow(<Nav {...props}/>);
>>>>>>> news-tests

  it('renders without crashing', () => {
    shallow(<Nav />);
  });

<<<<<<< HEAD
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
=======
  it('logOut should be defined', () => {
      expect(container.instance().logOut).toBeDefined();
		});

  it('update isAuthenticated state', () => {
    expect(container.state().isAuthenticated).toBe(true);
  });
>>>>>>> news-tests
});