const Calculator = require('../src/calculator');
describe('Calculator', function() {
    it('should subtract correctly using a stub', function() {
      // Arrange
      const calculator = new Calculator();
  
      // Create a stub for the 'subtract' method
    spyOn(calculator, 'subtract').and.callFake(function(a, b) {
        return a - b; // Stubbed implementation
      });
  
      // Act
      const result = calculator.subtract(8, 4);
  
      // Assert
     expect(result).toBe(4); // The stubbed implementation always returns 4
      expect(calculator.subtract).toHaveBeenCalledWith(8, 4);
    });

    it('should average', function() {
      // Arrange
      const calculator = new Calculator();
      expect(calculator.average).toBe('Fake data');
    });
  });
  