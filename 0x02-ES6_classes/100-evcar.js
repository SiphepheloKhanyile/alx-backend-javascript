import Car from './10-car';

class EVCar {
  constructor(brand, motor, color, range) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return new Car();
  }
}

export default EVCar;
