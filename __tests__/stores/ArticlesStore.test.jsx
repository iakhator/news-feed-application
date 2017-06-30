import ArticlesStore from '../../src/stores/ArticlesStore';
import AppDispatcher from '../../src/dispatcher/AppDispatcher';

jest.mock('../../src/dispatcher/AppDispatcher');
const mockDispatcher = AppDispatcher.register.mock.calls[0][0];

const articlesAction = {
      type: 'RECIEVE_ARTICLE',
      article: [
        {
          author: "TNW Deals",
          title: "Build electronics projects",
          description: "Understanding electronics",
           
        },
        {
          author: "Rachel Kaser",
          title: "Facebook brings out a new ‘Order Food’ option",
          description: "Facebook is rolling out a new food ordering option",
           
        }
      ]  
}

describe('Articles Store', () => {

  it('initialize articles', () => {
      expect(ArticlesStore.getArticles()).toEqual([]);
  });

  it('should register a callback with the dispatcher', () => {
    expect(mockDispatcher.length).toBe(1);
  });

  it('should return all articles', () => {
      mockDispatcher(articlesAction);
      let result = (ArticlesStore.getArticles());
      expect(result[0].author).toBe("TNW Deals");
      expect(result[0].title).toBe("Build electronics projects");
      expect(result[0].description).toBe("Understanding electronics"); 

      expect(result[1].author).toBe("Rachel Kaser");
      expect(result[1].title).toBe(
        "Facebook brings out a new ‘Order Food’ option"
        );
      expect(result[1].description).toBe(
        "Facebook is rolling out a new food ordering option"
        );
    }); 

});