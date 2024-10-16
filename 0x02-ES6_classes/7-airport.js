export default class Airport {
  constructor(name, code) {
    // Type checking for name
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    // Type checking for code
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    // Assigning to underscore attributes
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = code;
  }
  // Overriding toString to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
