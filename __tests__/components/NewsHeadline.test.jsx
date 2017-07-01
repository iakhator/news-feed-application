import React from 'react';
import sinon from 'sinon';
import { shallow, mount , render } from 'enzyme';
import NewsHeadline from '../../src/components/NewsHeadline';
import * as NewsActions from '../../src/actions/NewsActions';
import ArticlesStore from '../../src/stores/ArticlesStore';

describe('NewsHeadline', () => {
  const props = {
    newsArticle: null,
    match: {
      params: {
        sourceId: 'cnn',
        sortBy: 'top'
      }
    }
  }

  it('renders without crashing', () => {
    mount(<NewsHeadline {...props}/>)
  });

  it('calls componentDidMount() lifecycle method', () => {
    const newsHeadline = jest.fn();
    const componentDidMountSpy = jest.spyOn(NewsHeadline.prototype, 'componentDidMount');
    const articleStoreSpy = jest.spyOn(ArticlesStore, 'on');
    const  newsActionSpy = jest.spyOn(NewsActions, 'getArticles');
    const container = mount(<NewsHeadline {...props} onChange={newsHeadline}/>);
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(newsActionSpy).toBeCalledWith(props.match.params.sourceId, props.match.params.sortBy);
    expect(articleStoreSpy).toHaveBeenCalled();
  });
});