var Block = require('./../Block')
var block = new Block([2,4,6]);

describe('Block Object', function() {
  describe('getWidth()', function() {
    it('should return the block\'s width', function() {
      expect(block.getWidth()).toEqual(2);
    });
  });

  describe('getHeight()', function() {
    it('should return the block\'s height', function() {
      expect(block.getHeight()).toEqual(6);
    });
  });

  describe('getLength()', function() {
    it('should return the block\'s length', function() {
      expect(block.getLength()).toEqual(4);
    });
  });

  describe('getVolume()', function() {
    it('should return the block\'s volume', function() {
      expect(block.getVolume()).toEqual(48);
    });
  });

  describe('getSurfaceArea()', function() {
    it('should return the block\'s surface area', function() {
      expect(block.getSurfaceArea()).toEqual(88);
    });
  });
});
