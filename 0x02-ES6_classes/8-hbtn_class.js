export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }

    if (typeof location !== 'string') {
      throw new TypeError('location must be a number');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }
  set size(size) {
    this._size = size;
  }
  get location() {
    return this._location;
  }
  set location(location) {
    this._location = location;
  }
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } else if (hint === 'string') {
      return this._location;
    } else {
      return this._size;
    }
  }
}
