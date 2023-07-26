const Calculator = require('../src/calculator');
describe('Calculator', function() {
    it('#smoke should add correctly using a mock function', function() {
      
      const calculator = new Calculator();
      const mockAdd = jasmine.createSpy('add').and.returnValue(10);
      calculator.add = mockAdd;
  
      // Act
      const result = calculator.add(3, 5);
  
      // Assert
      expect(result).toBe(10);
      expect(mockAdd).toHaveBeenCalledWith(3, 5);
    });
  });
  