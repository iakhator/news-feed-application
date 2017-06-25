import React from 'react';
import { shallow, mount , render } from 'enzyme';
import Headline from '../../src/components/Headline';

describe('NewsHeadline', () => {
  const props = {
    newsArticle: [],
    sourceId: 'cnn'.toUpperCase(),
    sortBy: 'top'.toUpperCase()
  }

  const container = mount(<Headline {...props}/>);
  it('renders without crashing', () => {
    shallow(<Headline {...props}/>);
  });
  
});