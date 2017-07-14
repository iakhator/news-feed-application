import React from 'react';
import { mount } from 'enzyme';
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
  };

  it('renders without crashing', () => {
    mount(<NewsHeadline {...props} />);
  });

  it('should call newsAction with parameter', () => {
    const newsHeadline = jest.fn();
    const newsActionSpy = jest.spyOn(NewsActions, 'getArticles');
    const container = mount(
      <NewsHeadline {...props} onChange={newsHeadline} />);
    expect(newsActionSpy)
    .toBeCalledWith(props.match.params.sourceId, props.match.params.sortBy);
  });

  it('should call articleStore', () => {
    const newsHeadline = jest.fn();
    const articleStoreSpy = jest.spyOn(ArticlesStore, 'on');
    const container = mount(<NewsHeadline
      {...props} onChange={newsHeadline}
      />);
    expect(articleStoreSpy).toHaveBeenCalled();
  });
});
