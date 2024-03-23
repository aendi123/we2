export default class Counter {

    #doors: number;
    private _wood: string;
    private _basePrice: number;

    public static readonly WOOD_FACTORS = {'oak': 80, 'pine': 20, 'beech': 50, 'maple': 60, 'walnut': 90, 'cherry': 100};
    public static readonly DOOR_FACTOR = 2;
    public static readonly MIN_DOOR_COUNT = 2;
    public static readonly MAX_DOOR_COUNT = 7;

    constructor({doors = 2, wood = 'oak', basePrice = 40}: {doors?: number, wood?: string, basePrice?: number} = {}) {
        this.#doors = doors;
        this._wood = wood;
        this._basePrice = basePrice;
    }

    set wood(newWood: string) {
        if (Counter.WOOD_FACTORS[newWood]) {
            this._wood = newWood;
        } else {
            throw "Counters not avaiable with wood=" + newWood;
        }
    }

    get wood() {
        return this._wood;
    }

    set doors(newDoorCount: number) {
        if (newDoorCount >= Counter.MIN_DOOR_COUNT && newDoorCount <= Counter.MAX_DOOR_COUNT) {
            this.#doors = newDoorCount;
        } else {
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