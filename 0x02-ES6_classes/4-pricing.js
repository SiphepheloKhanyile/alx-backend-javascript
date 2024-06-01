// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  set amount(newAmount) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = newAmount;
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  set currency(newCurrency) {
    // eslint-disable-next-line no-underscore-dangle
    this._code = newCurrency;
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
