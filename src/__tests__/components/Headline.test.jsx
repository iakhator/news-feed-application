import React from 'react';
import { shallow, mount , render } from 'enzyme';
import Headline from '../../components/Headline';

describe('NewsHeadline', () => {
  const props = {
    newsArticle: []
  }
  const container = mount(<Headline {...props}/>);
  it('renders without crashing', () => {
    mount(<Headline newsArticle={props.newsArticle}/>);
  });
});