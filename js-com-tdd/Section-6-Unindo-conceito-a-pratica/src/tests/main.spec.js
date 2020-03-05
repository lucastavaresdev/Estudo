import {
    expect
} from "chai";
import FizzBuzz from '../main'

describe('Fizzbuzz', () => {

    it('Se o numero for divisivel por 3 retorna "Fizz"', () => {
        expect(FizzBuzz(3)).to.be.equal('Fizz');
        expect(FizzBuzz(6)).to.be.equal('Fizz');
    })
    it('Se o numero for divisivel por 5 retorna "Buzz"', () => {
        expect(FizzBuzz(5)).to.be.equal('Buzz');
        expect(FizzBuzz(10)).to.be.equal('Buzz');
    })
    it('Se o numero for divisivel por 3 e por 5 retorna "FizzBuzz"', () => {
        expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    })
})