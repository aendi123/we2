import { expect } from 'chai';
import { Stack } from '../src/stack.js';

describe("Stack", function() {
    describe("An empty Stack", function() {
        beforeEach(function() {
            this.stack = new Stack();
        });

        it("it is empty", function() {
            expect(this.stack.isEmpty()).to.be.true;
        });

        it("it remains empty after push() with no args", function() {
            this.stack.push();
            expect(this.stack.isEmpty()).to.be.true;
        });

        it("it is not empty after push() with arg = undefined", function() {
            this.stack.push(undefined);
            expect(this.stack.isEmpty()).to.be.false;
        });

        it("it is not empty after one push of an empty string", function() {
            this.stack.push("");
            expect(this.stack.isEmpty()).to.be.false;
        });

        it("it returns undefined as first return value on pop", function() {
            let result = this.stack.pop();
            expect(result[0]).to.be.undefined;
        });

        it("it returns itself as second return value on pop", function() {
            let result = this.stack.pop();
            expect(result[1]).to.equal(this.stack);
        });

        it("it is empty after push then pop", function() {
            this.stack.push("test");
            this.stack.pop();
            expect(this.stack.isEmpty()).to.be.true;
        });

        it("it can push two elements and pop the second one first, then the first one", function() {
            this.stack.push("first");
            this.stack.push("second");
            let firstPop = this.stack.pop();
            let secondPop = this.stack.pop();
            expect(firstPop[0]).to.equal("second");
            expect(secondPop[0]).to.equal("first");
        });
    });


    describe("A Stack with a single pushed element '1'", function() {
        beforeEach(function() {
            this.stack = new Stack();
            this.stack.push('1');
        });

        it("it is not empty", function() {
            expect(this.stack.isEmpty()).to.be.false;
        });

        it("it returns the pushed element on pop as first return value", function() {
            let result = this.stack.pop();
            expect(result[0]).to.equal('1');
        });

        it("it returns the pushed element on pop as first return value even if a push has been called with no args before", function() {
            this.stack.push();
            let result = this.stack.pop();
            expect(result[0]).to.equal('1');
        });

        it("it can contain the same element twice", function() {
            this.stack.push('1');
            let firstPop = this.stack.pop();
            let secondPop = this.stack.pop();
            expect(firstPop[0]).to.equal('1');
            expect(secondPop[0]).to.equal('1');
        });
    });
});