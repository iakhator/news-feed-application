import * as NewsActions from '../../src/actions/NewsActions';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';


const articles = [
  {"author": null, 
    "description": "The type of panels reportedly used on the London apartment complex where at least 30 people died in a fire this week should not be used in high-rise buildings, a brochure from manufacturer shows.", 
    "publishedAt": "2017-06-17T10:43:22Z", 
    "title": "Manufacturer issued warning over panels reportedly used on London tower", 
    "url": "http://www.abc.net.au/news/2017-06-17/8627790", 
    "urlToImage": "http://www.abc.net.au/news/image/8627822-1x1-700x700.jpg"
  }, 
  {"author": null, 
    "description": "Seven US Navy sailors remain missing in the Pacific Ocean after their US destroyer collided with a container ship off the coast of Japan.", 
    "publishedAt": "2017-06-17T11:55:54Z", 
    "title": "Sailors missing after US destroyer smashes into merchant ship off Japan", 
    "url": "http://www.abc.net.au/news/2017-06-17/us-navy-ship-collides-with-merchant-ship-off-japan/8627298", 
    "urlToImage": "http://www.abc.net.au/news/image/8627894-1x1-700x700.jpg"
  }, 
  {"author": null, 
    "description": "At least one Afghan soldier is killed and several American soldiers wounded in an incident at the Camp Shaheen military base in northern Afghanistan.", 
    "publishedAt": "2017-06-17T14:16:36Z", 
    "title": "Afghan soldier killed, several US soldiers wounded in incident at Army base", 
    "url": "http://www.abc.net.au/news/2017-06-17/us-soldiers-wounded-afghan-soldier-killed-at-camp-shaheen/8627922", "urlToImage": "http://www.abc.net.au/news/image/3882848-1x1-700x700.jpg"
  }, 
  {"author": null, 
    "description": "Desperate family and friend of missing Grenfell Tower residents are appealing for help online.", "publishedAt": "2017-06-17T02:25:14Z", 
    "title": "London fire families appeal for help in desperate hunt for missing loved ones", 
    "url": "http://www.abc.net.au/news/2017-06-17/desperate-grenfell-families-take-to-social-media/8627390", 
    "urlToImage": "http://www.abc.net.au/news/image/8627562-1x1-700x700.jpg"
  },
]



describe('News API Actions', () => {

  let spyOnDispatcher;
    beforeEach(() => {
     jest.mock('axios');
     jest.mock('../../.env');
     spyOnDispatcher = jest.spyOn(AppDispatcher, 'dispatch');
    });

    afterEach(() => {
     spyOnDispatcher.mockReset();
    });

  describe('Test for getSources function', () => {

    it('should have a getSources function', () => {
      expect(NewsActions.getSources).toBeDefined();
    });

    it('should dispatch an action', () => 
      NewsActions.getSources()
        .then(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_SOURCES');
          expect(dispatcherCall.sources).toBeInstanceOf(Object);
        }).catch(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_SOURCES_ERROR');
        })
    );
  });
  
  describe('Test for getArticles function', () => {

    it('should have a getArticles function', () => {
      expect(NewsActions.getArticles).toBeDefined();
    }); 
    
    it('should dispatch an action', () => 
      NewsActions.getArticles('abc-news-au', 'top')
        .then(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_ARTICLES');
          expect(dispatcherCall.articles).toBeInstanceOf(Object);
        }).catch(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_ARTICLES_ERROR');
        })
    );
  });
});
