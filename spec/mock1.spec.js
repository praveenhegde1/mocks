const Calculator = require('../src/calculator');
describe('Calculator', function() {
    it('should subtract correctly using a mock object', function() {
      // Arrange
      const calculator = new Calculator();
      const mockSubtract = {
        subtract: jasmine.createSpy().and.returnValue(4)
      };
      spyOn(calculator, 'subtract').and.callFake(mockSubtract.subtract);
  
      // Act
      const result = calculator.subtract(8, 4);
  
      // Assert
      expect(result).toBe(4);
      expect(mockSubtract.subtract).toHaveBeenCalledWith(8, 4);
    });
  });
  