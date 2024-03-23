interface Point {
    readonly x: number;
    readonly y: number;
}
interface LikableItem {
    likes?: number;
}
class DescribableItem {
    constructor(public description: string){

    }
}
class PointOfInterest extends DescribableItem implements Point, LikableItem  {
    constructor(public x: number, public y: number, description: string, public likes?:number) {
        super(description);
    }
}

// CHECK
let p:Point = new PointOfInterest(1, 2, 'home');    // ok
p.description;                                      // nok (point has no description)
let p2:PointOfInterest = <PointOfInterest>p;        // ok
p2.description;                                     // ok
let p3:Point = { x: 3, y: 4};                       // ok (duck-typing)
let p4: any = p3;                                   // ok
p4.description = 'hi';                              // ok (any can set anything)