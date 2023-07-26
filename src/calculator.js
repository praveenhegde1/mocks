const DataService = require('../src/dataService');
class Calculator {
  
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
   return a - b;
  }

  average(){
    const dataService = new DataService();
   return( dataService.fetchData().then(result => {
      // Assert
      //expect(result).toBe('Fake data');
      done();
    }));
  }
}

module.exports = Calculator;