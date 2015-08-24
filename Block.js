var Block = function(arr) {
  arr = arr ? arr : [2,2,2];
  this.width = arr[0];
  this.length = arr[1];
  this.height = arr[2];
};

Block.prototype.getWidth = function () {
  return this.width;
};

Block.prototype.getLength = function () {
  return this.length;
};

Block.prototype.getHeight = function () {
  return this.height;
};

Block.prototype.getVolume = function () {
  return this.width * this.length * this.height;
};

Block.prototype.getSurfaceArea = function () {
  return 2 * (this.width * this.height) + 2 * (this.height * this.length) + 2 * (this.width * this.length);
};

module.exports = Block;
