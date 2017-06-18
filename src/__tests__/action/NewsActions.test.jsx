import NewsActions from '../../actions/NewsActions';
import AppDispatcher from '../../dispatcher/AppDispatcher';


const articles = [
  {"author": null, "description": "The type of panels reportedly used on the London apartment complex where at least 30 people died in a fire this week should not be used in high-rise buildings, a brochure from manufacturer shows.", "publishedAt": "2017-06-17T10:43:22Z", "title": "Manufacturer issued warning over panels reportedly used on London tower", "url": "http://www.abc.net.au/news/2017-06-17/8627790", "urlToImage": "http://www.abc.net.au/news/image/8627822-1x1-700x700.jpg"}, {"author": null, "description": "Seven US Navy sailors remain missing in the Pacific Ocean after their US destroyer collided with a container ship off the coast of Japan.", "publishedAt": "2017-06-17T11:55:54Z", "title": "Sailors missing after US destroyer smashes into merchant ship off Japan", "url": "http://www.abc.net.au/news/2017-06-17/us-navy-ship-collides-with-merchant-ship-off-japan/8627298", "urlToImage": "http://www.abc.net.au/news/image/8627894-1x1-700x700.jpg"}, {"author": null, "description": "At least one Afghan soldier is killed and several American soldiers wounded in an incident at the Camp Shaheen military base in northern Afghanistan.", "publishedAt": "2017-06-17T14:16:36Z", "title": "Afghan soldier killed, several US soldiers wounded in incident at Army base", "url": "http://www.abc.net.au/news/2017-06-17/us-soldiers-wounded-afghan-soldier-killed-at-camp-shaheen/8627922", "urlToImage": "http://www.abc.net.au/news/image/3882848-1x1-700x700.jpg"}, {"author": null, "description": "Desperate family and friend of missing Grenfell Tower residents are appealing for help online.", "publishedAt": "2017-06-17T02:25:14Z", "title": "London fire families appeal for help in desperate hunt for missing loved ones", "url": "http://www.abc.net.au/news/2017-06-17/desperate-grenfell-families-take-to-social-media/8627390", "urlToImage": "http://www.abc.net.au/news/image/8627562-1x1-700x700.jpg"}, {"author": "http://www.abc.net.au/news/7825398", "description": "An Australian farmer invents a device which kills viable weed seeds by 95 per cent, reducing the need for herbicides.", "publishedAt": "2017-06-16T20:14:23Z", "title": "Australian farmer's weed-destroying invention draws world interest", "url": "http://www.abc.net.au/news/2017-06-17/australian-farmers-invention-draws-world-interest/8619826", "urlToImage": "http://www.abc.net.au/news/image/8620674-1x1-700x700.jpg"}, {"author": null, "description": "Comedian Wil Anderson is arrested after reports of a disruptive passenger on a flight from Sydney to Wagga Wagga.", "publishedAt": "2017-06-17T14:33:57Z", "title": "Wil Anderson arrested after 'misunderstanding' on aeroplane", "url": "http://www.abc.net.au/news/2017-06-17/wil-anderson-arrested-after-incident-on-aeroplane/8627834", "urlToImage": "http://www.abc.net.au/news/image/8358550-1x1-700x700.jpg"}, {"author": null, "description": "A bull rider from NSW is in a serious but improving condition after a bull threw him off and stomped on his chest at a US rodeo.", "publishedAt": "2017-06-17T06:24:43Z", "title": "Aussie bull rider suffers serious injuries after US rodeo horror", "url": "http://www.abc.net.au/news/2017-06-17/tamworth-bull-rider-has-chest-crushed-at-rodeo/8627552", "urlToImage": "http://www.abc.net.au/news/image/8627590-1x1-700x700.jpg"}, {"author": null, "description": "The ABC is called on to give veteran broadcaster Red Symons a very severe disciplining after he asked a colleague if she was yellow in an interview.", "publishedAt": "2017-06-17T13:45:07Z", "title": "Indigenous MP takes aim at Red Symons amid interview racism row", "url": "http://www.abc.net.au/news/2017-06-17/red-symons-deserves-disciplining-over-racist-abc-broadcast-mp/8627444", "urlToImage": "http://www.abc.net.au/news/image/8627478-1x1-700x700.jpg"}, {"author": null, "description": "A 20-year-old Massachusetts woman is found guilty of involuntary manslaughter for urging her boyfriend to take his own life.", "publishedAt": "2017-06-17T01:55:30Z", "title": "Girlfriend who sent suicide texts found guilty of manslaughter", "url": "http://www.abc.net.au/news/2017-06-17/woman-guilty-of-urging-boyfriend-to-suicide/8627350", "urlToImage": "http://www.abc.net.au/news/image/8627376-1x1-700x700.jpg"}, {"author": "http://www.abc.net.au/news/louisa-rebgetz/166998", "description": "As koalas struggle with habitat loss, they face more attacks by livestock, wildlife experts say.", "publishedAt": "2017-06-17T05:33:54Z", "title": "Koalas being trampled by livestock amid habitat loss, wildlife experts say", "url": "http://www.abc.net.au/news/2017-06-17/livestock-attacks-koalas-more-common-wildlife-experts-say/8625762", "urlToImage": "http://www.abc.net.au/news/image/8625314-1x1-700x700.jpg"}
]



describe('News API Actions', () => {

  let spyOnDispatcher;
    beforeEach(() => {
     jest.mock('axios');
     spyOnDispatcher = jest.spyOn(AppDispatcher, 'dispatch');
    });

    afterEach(() => {
     spyOnDispatcher.mockReset();
    });

  describe('Test for recieveSources function', () => {

    it('should have a recieveSources function', () => {
      expect(NewsActions.recieveSources).toBeDefined();
    });

    it('should dispatch an action', () => 
      NewsActions.recieveSources()
        .then(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_SOURCES');
          expect(dispatcherCall.sources).toBeInstanceOf(Object);
        })
    );
  });
  
  describe('Test for getArticle function', () => {

    it('should have a getArticle function', () => {
      expect(NewsActions.getArticle).toBeDefined();
    }); 
    
    it('should dispatch an action', () => 
      NewsActions.getArticle('abc-news-au', 'top')
        .then(() => {
          const dispatcherCall = spyOnDispatcher.mock.calls[0][0];
          expect(spyOnDispatcher).toHaveBeenCalled();
          expect(dispatcherCall.type).toEqual('RECIEVE_ARTICLE');
          expect(dispatcherCall.article).toBeInstanceOf(Object);
          //expect(dispatcherCall.article).toEqual(articles);
        })
    );

    
  });
  
});