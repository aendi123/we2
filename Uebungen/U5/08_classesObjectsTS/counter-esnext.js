export default class Counter {
    #doors;
    _wood;
    _basePrice;
    static WOOD_FACTORS = { 'oak': 80, 'pine': 20, 'beech': 50, 'maple': 60, 'walnut': 90, 'cherry': 100 };
    static DOOR_FACTOR = 2;
    static MIN_DOOR_COUNT = 2;
    static MAX_DOOR_COUNT = 7;
    constructor({ doors = 2, wood = 'oak', basePrice = 40 } = {}) {
        this.#doors = doors;
        this._wood = wood;
        this._basePrice = basePrice;
    }
    set wood(newWood) {
        if (Counter.WOOD_FACTORS[newWood]) {
            this._wood = newWood;
        }
        else {
            throw "Counters not avaiable with wood=" + newWood;
        }
    }
    get wood() {
        return this._wood;
    }
    set doors(newDoorCount) {
        if (newDoorCount >= Counter.MIN_DOOR_COUNT && newDoorCount <= Counter.MAX_DOOR_COUNT) {
            this.#doors = newDoorCount;
        }
        else {
            throw `Counter can only have between ${Counter.MIN_DOOR_COUNT} and ${Counter.MAX_DOOR_COUNT} not supported ${newDoorCount}`;
        }
    }
    get doors() {
        return this.#doors;
    }
    get price() {
        let priceFactor = Counter.WOOD_FACTORS[this._wood] * Counter.DOOR_FACTOR * this.#doors / 100;
        return priceFactor * this._basePrice;
    }
}
