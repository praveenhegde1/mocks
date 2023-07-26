const DataService = require('../src/dataService');

describe('DataService', function() {
    it('should fetch fake data', function(done) {
      // Arrange
      const fakeDataService = {
        fetchData: function() {
          return Promise.resolve('Fake data');
        }
      };
  
      // Inject the fake data service
      const dataService = new DataService();
      dataService.fetchData = fakeDataService.fetchData;
  
      // Act
      dataService.fetchData().then(result => {
        // Assert
        expect(result).toBe('Fake data');
        done();
      });
    });
  });
  