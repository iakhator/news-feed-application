import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsFeeds from '../../src/components/NewsFeeds';
import * as NewsActions from '../../src/actions/NewsActions';
import NewsStore from '../../src/stores/NewsStore';

describe('NewsFeeds', () => {
  const container = shallow(<NewsFeeds />);

  it('renders without crashing', () => {
    mount(<NewsFeeds />);
  });

  it('Should have an initial state for search string', () => {
    expect(container.state().search).toBe('');
  });

  it('Should have a div that renders the JSX on the DOM', () => {
    expect(container.find('.container')).toBeTruthy();
  });

  it('it initializes with an array for newsFeeds', () => {
    expect(container.state().isAuthenticated).toBe(false);
  });

  it('should check for methods', () => {
    expect(container.instance().getNewsSources).toBeDefined();
    expect(container.instance().onSearch).toBeDefined();
    expect(container.instance().onRecieveChange).toBeDefined();
  });

  it('input search', () => {
    const onSearch = jest.fn();
    onSearch.call();
    const search = mount(<NewsFeeds onSearch={onSearch} />);
    const input = search.find('input');
    input.simulate('change', { target: { value: '' } });
    expect(onSearch).toBeCalledWith();
  });

  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = jest.spyOn(NewsFeeds.prototype, 'componentDidMount');
    const newsStoreSpy = jest.spyOn(NewsStore, 'on');
    const newsActionSpy = jest.spyOn(NewsActions, 'getSources');
    mount(<NewsFeeds />);
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(newsActionSpy).toBeCalledWith();
    expect(newsStoreSpy).toHaveBeenCalled();
  });
});
