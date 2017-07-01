import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Headline from '../../src/components/Headline';

describe('NewsHeadline', () => {
  const props = {
    newsArticle: [],
    sourceId: 'cnn'.toUpperCase(),
    sortBy: 'top'.toUpperCase()
  };

  const container = shallow(<Headline {...props} />);

  it('renders correctly', () => {
    const tree = renderer.create(
      <Headline {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Headline {...props} />);
  });

  it('check for classes length', () => {
    const wrapper = mount(<Headline {...props} />);
    expect(wrapper.find('.sort-header').length).toBe(1);
    expect(wrapper.find('.article-title').length).toBe(1);
  });

  it('Should render <div /> tags', () => {
    expect(container.find('div').toExist);
  });
});
