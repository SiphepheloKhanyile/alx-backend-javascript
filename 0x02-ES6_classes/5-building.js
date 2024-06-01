class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = sqft;

    // Check if the current instance has the evacuationWarningMessage method
    this.evacuationWarningMessage();
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  set sqft(newSqft) {
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = newSqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
