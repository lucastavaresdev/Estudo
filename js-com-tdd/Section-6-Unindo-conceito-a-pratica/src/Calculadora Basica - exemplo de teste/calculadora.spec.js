var expect = require('chai').expect;
var calc = require("../main.js")

describe('Calc', function() {
    describe('teste basicos', function() {

        it('existe a lib calculadora ', function() {
            expect(calc).to.exist
        })
        it('existe o metodo soma', function() {
            expect(calc.sum).to.exist
        })
        it('existe o metodo sub', function() {
            expect(calc.sub).to.exist
        })
        it('existe o metodo mult', function() {
            expect(calc.mult).to.exist
        })
        it('existe o metodo div', function() {
            expect(calc.div).to.exist
        })

    })

    describe('soma', function() {
        it('tem que retornar 4 quando colocar 2 + 2', function() {
            expect(calc.sum(2, 2)).to.be.equal(4)
        })
    })

    describe('sub', function() {
        it('tem que retornar 4 quando colocar 6 - 2', function() {
            expect(calc.sub(6, 2)).to.be.equal(4)
        })
        it('tem que retornar -4 quando colocar 6 - 10', function() {
            expect(calc.sub(6, 10)).to.be.equal(-4)
        })
    })

    describe('mult', function() {
        it('tem que retornar 4 quando colocar 2 * 2', function() {
            expect(calc.mult(2, 2)).to.be.equal(4)
        })
    })

    describe('div', function() {
        it('tem que retornar 2 quando colocar 4 / 2', function() {
            expect(calc.div(4, 2)).to.be.equal(2)
        })

        it('divisão com zero! "Não é possivel divisao por zero"', function() {
            expect(calc.div(4, 0)).to.be.equal("Não é possivel divisao por zero")
        })

    })


})