"use strict";
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
exports.__esModule = true;
var Counter = /** @class */ (function () {
    function Counter(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.doors, doors = _c === void 0 ? 2 : _c, _d = _b.wood, wood = _d === void 0 ? 'oak' : _d, _e = _b.basePrice, basePrice = _e === void 0 ? 40 : _e;
        _Counter_doors.set(this, void 0);
        __classPrivateFieldSet(this, _Counter_doors, doors, "f");
        this._wood = wood;
        this._basePrice = basePrice;
    }
    Object.defineProperty(Counter.prototype, "wood", {
        get: function () {
            return this._wood;
        },
        set: function (newWood) {
            if (Counter.WOOD_FACTORS[newWood]) {
                this._wood = newWood;
            }
            else {
                throw "Counters not avaiable with wood=" + newWood;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "doors", {
        get: function () {
            return __classPrivateFieldGet(this, _Counter_doors, "f");
        },
        set: function (newDoorCount) {
            if (newDoorCount >= Counter.MIN_DOOR_COUNT && newDoorCount <= Counter.MAX_DOOR_COUNT) {
                __classPrivateFieldSet(this, _Counter_doors, newDoorCount, "f");
            }
            else {
                throw "Counter can only have between ".concat(Counter.MIN_DOOR_COUNT, " and ").concat(Counter.MAX_DOOR_COUNT, " not supported ").concat(newDoorCount);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Counter.prototype, "price", {
        get: function () {
            var priceFactor = Counter.WOOD_FACTORS[this._wood] * Counter.DOOR_FACTOR * __classPrivateFieldGet(this, _Counter_doors, "f") / 100;
            return priceFactor * this._basePrice;
        },
        enumerable: false,
        configurable: true
    });
    var _Counter_doors;
    _Counter_doors = new WeakMap();
    Counter.WOOD_FACTORS = { 'oak': 80, 'pine': 20, 'beech': 50, 'maple': 60, 'walnut': 90, 'cherry': 100 };
    Counter.DOOR_FACTOR = 2;
    Counter.MIN_DOOR_COUNT = 2;
    Counter.MAX_DOOR_COUNT = 7;
    return Counter;
}());
exports["default"] = Counter;
