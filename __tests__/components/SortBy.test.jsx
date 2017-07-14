import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SortBy from '../../src/components/SortBy';
import NewsStore from '../../src/stores/NewsStore';

describe('SortBy', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SortBy />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('NewsStore', () => {
    it('should call getNewsSources on entering Articles Page', () => {
      const newsStoreSpy = jest.spyOn(NewsStore, 'getNewsSources');
      expect(newsStoreSpy).toBeCalled();
    });
  });

  it('calls componentWillMount() lifecycle method', () => {
    const componentWillMountSpy = jest
    .spyOn(SortBy.prototype, 'componentWillMount');
    const wrapper = mount(<SortBy />);
    expect(componentWillMountSpy).toHaveBeenCalled();
    expect(componentWillMountSpy).toHaveBeenCalledTimes(1);
  });
});
