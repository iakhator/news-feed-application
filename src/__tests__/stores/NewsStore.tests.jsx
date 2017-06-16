import NewsStore from '../../stores/NewsStore';
import AppDispatcher from '../../dispatcher/AppDispatcher';

jest.mock('../../dispatcher/AppDispatcher');
const mockDispatcher = AppDispatcher.register.mock.calls[0][0];

const sourcesAction = {
      type: 'RECIEVE_SOURCES',
      sources: [
        {
          id: "al-jazeera-english",
          name: "Al Jazeera English",
          description: "News, analysis from the Middle East and worldwide." 
           
        },
        {
          id: "ars-technica",
          name: "Ars Technica",
          description: "The PC enthusiast's resource.",
           
        }
      ]  
}



describe('NewsSources Store', () => {

  it('should register a callback with the dispatcher', () => {
    expect(mockDispatcher.length).toBe(1);
  
  });

  it('should be initialized as an empty array', () => {
      expect(NewsStore.getSources()).toEqual([]);
  });

it('should register all sources', () => {
      mockDispatcher(sourcesAction);
      let result = (NewsStore.getSources());
      expect(result[0].id).toBe("al-jazeera-english");
      expect(result[0].name).toBe("Al Jazeera English");
      expect(result[0].description).toBe("News, analysis from the Middle East and worldwide."); 

      expect(result[1].id).toBe("ars-technica");
      expect(result[1].name).toBe("Ars Technica");
      expect(result[1].description).toBe("The PC enthusiast's resource.");
    }); 

});