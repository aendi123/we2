const b: boolean = false;
enum Decision {yes, no} // attention: enum value represeted as numbers by default (optional knowledge)
const y:Decision = Decision.no;
type DecisionType = "yes" | "no";
const z: DecisionType = "no";
declare let m: number;

// functions

function prod2Function(n1: number, n2?: number) {
  console.log('n1', n1, 'n2', n2);
  if (n2 === undefined) {
    return n1;
  }else{
    return n1*n2;
  }
}

function prodFunction(...rest:number[]) {
  console.log('rest', rest);
  return rest.reduce( prod2Function, 1);
}

function numberApplicator (
    numArray: number[],
    numFun: (prevRes: number, current: number) => number) : number {

  return numArray.reduce(numFun);
}


// CHECK

console.log('log1', prod2Function(2));          // ok: "n1 2 n2 undefined"
console.log('log2', prod2Function(2, 3));       // ok: "n1 2 n2 3"
//console.log('log3', prod2Function(2, 3, 7));    // nok, too many arguments

//console.log('log4', prod2Function(b, 3));       // nok, first argument must be a number but is a boolean
console.log('log5', prod2Function(y, 3));       // ok "n1 1 n2 3"
//console.log('log6', prod2Function(z, 3));       // nok, first argument must be a number but is a string
//console.log('log7', prod2Function(m, 3));       // nok, m is not defined

console.log('log8', prodFunction(2, 3, 7));     // ok "rest [2, 3, 7] n1 1 n2 2 n1 2 n2 3 n1 6 n2 7 log8 42"
//console.log('log9', prodFunction(2, 3, b));     // nok, only numbers allow but b is a boolean

console.log('log10', 'numberApplicator', numberApplicator([1, 2, 3, 4], prod2Function)); // ok "log10 numberApplicator 24"