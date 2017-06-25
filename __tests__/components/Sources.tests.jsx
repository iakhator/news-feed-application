import React from 'react';
import { shallow, mount } from 'enzyme';
import Sources from '../../src/components/Sources';

const props = {
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
  search: '',
}

describe('Sources', () => {

  it('renders without crashing', () => {
    shallow(<Sources {...props}/>);
  });

  
});