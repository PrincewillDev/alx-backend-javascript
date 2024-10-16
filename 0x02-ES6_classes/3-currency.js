export default class Currency {
  /**
   * Constructor for Currency
   * @param {string} code - Currency code
   * @param {string} name - Name of the currency
   */
  constructor(code, name) {
    // if (typeof code !== 'string') {
    //   throw new TypeError('Code must be a string');
    // }
    // if (typeof name !== 'string') {
    //   throw new TypeError('Name must be a string');
    // }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    // if (code !== 'string') {
    //   throw new TypeError('Code must be a string');
    // }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    // if (typeof name !== 'string') {
    //   throw new TypeError('Name must be a string');
    // }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
