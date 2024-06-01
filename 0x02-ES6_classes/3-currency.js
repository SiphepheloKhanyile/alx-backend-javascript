class Currency {
  constructor(code, name) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  set code(newCode) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = newCode;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(newName) {
    // eslint-disable-next-line no-underscore-dangle
    this._name = newName;
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
