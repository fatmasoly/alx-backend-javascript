export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  getcode() {
    return this._code;
  }

  setcode(newCode) {
    this._code = newCode;
  }

  getname() {
    return this._name;
  }

  setname(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
