import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
import Home from '../../components/home/Home';

const props = {
  isAuthenticated: false,
}

describe('Home', () => {

  const container = shallow(<Home {...props} />);
  
  it('renders without crashing', () => {
    mount(<Home {...props}/>);
  });

  it('Should have an initial isAuthenticated state', () => {
    expect(container.state().isAuthenticated).toBe(false);
  });

  it('Should have a function to login', () => {
    container.instance().login();
  });

  it('Should render <div /> tags', () => {
    expect(container.find('div').toExist);
  });

  it('Should be selectable by class page-header', () => {
    expect(container.is('.home-page')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Home />).find('.home-page').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Home />).text()).toEqual('News Flash News Flash, Get the latest news around the globe here Login With Google');
  });

});