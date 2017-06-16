import React from 'react';
import sinon from 'sinon';
import { shallow, mount , render } from 'enzyme';
import NewsFeeds from '../../components/NewsFeeds';
import NewsActions from '../../actions/NewsActions';
import NewsStore from '../../stores/NewsStore';

describe('NewsFeeds', () => {

  const props = {
    search: '',
    newsSource: [
      {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
      "small": "",
      "medium": "",
      "large": ""
      },
      "sortBysAvailable": [
      "top"
      ]
    }
    ],
    isAuthenticated: false
  }


  const container = shallow(<NewsFeeds {...props}/>);
  
  it('renders without crashing', () => {
    mount(<NewsFeeds/>);
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

  it('should check the length of the Source stateless component', () => {
        container.setState({newsSource: props.newsSource});
        const NewsSource = container.find('Source');
        expect(NewsSource.length).toBe(1);
  });

  it('should check for methods', () => {
    expect(container.instance().recieveSources).toBeDefined();
    expect(container.instance().onSearch).toBeDefined();
    expect(container.instance().onRecieveChange).toBeDefined();
  });


  it('update isAuthenticated state', () => {
    expect(container.state().isAuthenticated).toBe(false);
    expect(container.state().search).toBe('');
    expect(container.state().newsSource).toBe(props.newsSource);
  });
  
  it('input search', () => {
    const onSearch = jest.fn();
    onSearch.call()
    const search = mount(<NewsFeeds onSearch={onSearch} {...props}/>);
    const input = search.find('input');
    input.simulate('change', { target: { value: ''} });
    expect(onSearch).toBeCalledWith();
  });

  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = jest.spyOn(NewsFeeds.prototype, 'componentDidMount');
    const newsStoreSpy = jest.spyOn(NewsStore, 'on');
    const newsActionSpy = jest.spyOn(NewsActions, 'recieveSources');
    const container = mount(<NewsFeeds {...props}/>);
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(newsActionSpy).toBeCalledWith();
    expect(newsStoreSpy).toHaveBeenCalled();
  });
});