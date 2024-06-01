import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    // eslint-disable-next-line no-underscore-dangle
    this._floors = floors;
  }

  get floors() {
    // eslint-disable-next-line no-underscore-dangle
    return this._floors;
  }

  set floors(newFloors) {
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = newFloors;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    // eslint-disable-next-line no-underscore-dangle
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
