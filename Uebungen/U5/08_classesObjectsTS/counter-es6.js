var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Counter_doors;
class Counter {
    constructor({ doors = 2, wood = 'oak', basePrice = 40 } = {}) {
        _Counter_doors.set(this, void 0);
        __classPrivateFieldSet(this, _Counter_doors, doors, "f");
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
            __classPrivateFieldSet(this, _Counter_doors, newDoorCount, "f");
        }
        else {
            throw `Counter can only have between ${Counter.MIN_DOOR_COUNT} and ${Counter.MAX_DOOR_COUNT} not supported ${newDoorCount}`;
        }
    }
    get doors() {
        return __classPrivateFieldGet(this, _Counter_doors, "f");
    }
    get price() {
        let priceFactor = Counter.WOOD_FACTORS[this._wood] * Counter.DOOR_FACTOR * __classPrivateFieldGet(this, _Counter_doors, "f") / 100;
        return priceFactor * this._basePrice;
    }
}
_Counter_doors = new WeakMap();
Counter.WOOD_FACTORS = { 'oak': 80, 'pine': 20, 'beech': 50, 'maple': 60, 'walnut': 90, 'cherry': 100 };
Counter.DOOR_FACTOR = 2;
Counter.MIN_DOOR_COUNT = 2;
Counter.MAX_DOOR_COUNT = 7;
export default Counter;
