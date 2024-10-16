import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor to assign sqft
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors; // floors is specific to the subclass
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    console.log(`Evacuate slowly the ${this._floors} floors`);
  }
}
