let a: unknown = true;
let nb: number | boolean = false;
let b: boolean = false;
let n: number = 2;
const nai = [3, 7, 9];
const ni: 42 = 42;
let t: [number, boolean] = [42, false];

enum Decision {yes, no}

let y: Decision = Decision.no;
declare let m: number;

// CHECK
n = undefined;      // Problem (after strict true): undefined is not assignable to number
nb = "aaa";         // Problem: string is not assignable to number | boolean
nb = nb || b;
nb = nb || 0;
b = b || nb;        // Problem: number | boolean is not assignable to boolean
n = a;              // Problem (after changing a to unknown): unknown is not assignable to number
n = nb;             // Problem: number | boolean is not assignable to number
nai[5] = 3;         // Problem: number is not assignable to number | boolean
nai[6] = nb;        // Problem: number | boolean is not assignable to number
nai[7] = true;      // Problem: boolean is not assignable to number | boolean
t = [n, b];
t = [nb, true];     // Problem: number | boolean is not assignable to number
t = [b, b];         // Problem: boolean is not assignable to number
t = [b, a];         // Problem: boolean is not assignable to number
a = y;
t = [n, y];         // Problem: boolean is not assignable to number
t = [n, a || y];    // Problem (after changing a to unknown): boolean is not assignable to number
nb = y;
n = y;
y = n;
m = nb;
n = m;
m = b;              // Problem: boolean is not assignable to number