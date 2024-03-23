function switchPairValues(pair:[any, any] = [null, null]) : [any, any] {
    return [pair[1], pair[0]];
}

// Zeilen 6-11 sind Structural Typing Beispiele, Typen der Argumente werden aus den Literalen abgeleitet und dann mit dem strukturierten Typ des Funktionsparameters verglichen
console.log(switchPairValues([7, 3]));      // ok
console.log(switchPairValues([7]));         // nok, [number] is not assignable to [any, any]
console.log(switchPairValues({0:7, 1:3}));  // nok, {0: number, 1: number} is not assignable to [any, any]
console.log(switchPairValues("73"));        // nok, string is not assignable to [any, any]
console.log(switchPairValues(7));           // nok, number is not assignable to [any, any]
console.log(switchPairValues(undefined));   // ok
console.log(switchPairValues(null));        // nok, null is not assignable to [any, any]