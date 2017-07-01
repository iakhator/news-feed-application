import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SortBy from '../../src/components/SortBy';
import NewsStore from '../../src/stores/NewsStore';

describe('SortBy Page', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<SortBy />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('calls componentWillMount() lifecycle method', () => {
    const componentWillMountSpy = jest
    .spyOn(SortBy.prototype, 'componentWillMount');
    const wrapper = mount(<SortBy />);
    expect(wrapper).toBeDefined();
    expect(componentWillMountSpy).toHaveBeenCalled();
    expect(componentWillMountSpy).toHaveBeenCalledTimes(1);
  });
});
