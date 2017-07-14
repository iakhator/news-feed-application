import React from 'react';
import { shallow, mount } from 'enzyme';
import NewsFeeds from '../../src/components/NewsFeeds';
import * as NewsActions from '../../src/actions/NewsActions';
import NewsStore from '../../src/stores/NewsStore';

describe('NewsFeeds', () => {
  const container = shallow(<NewsFeeds />);

  it('should render without crashing', () => {
    mount(<NewsFeeds />);
  });

  it('Should have a state for search string', () => {
    expect(container.state().search).toBe('');
  });

  it('Should have a `container` div', () => {
    expect(container.find('.container')).toBeTruthy();
  });

  it('should ', () => {
    expect(container.state().isAuthenticated).toBe(false);
  });

  it('should call onSearch method', () => {
    const onSearch = jest.fn();
    onSearch.call();
    const search = mount(<NewsFeeds onSearch={onSearch} />);
    const input = search.find('input');
    input.simulate('change', { target: { value: onSearch } });
    expect(onSearch).toBeCalledWith();
  });


  it('should call NewsStore', () => {
    const newsStoreSpy = jest.spyOn(NewsStore, 'on');
    mount(<NewsFeeds />);
    expect(newsStoreSpy).toHaveBeenCalled();
  });


  it('should trigger NewsAction', () => {
    const newsActionSpy = jest.spyOn(NewsActions, 'getSources');
    mount(<NewsFeeds />);
    expect(newsActionSpy).toBeCalledWith();
  });

  describe('#getSources', () => {
    it('should exist', () => {
      expect(container.instance().getNewsSources).toBeDefined();
    });
  });

  describe('#onSearch', () => {
    it('should exist', () => {
      expect(container.instance().onSearch).toBeDefined();
    });
  });

  describe('#onRecieveChange', () => {
    it('should exist', () => {
      expect(container.instance().onRecieveChange).toBeDefined();
    });
  });
});
