import { expect } from 'chai';
import { sum, sub, mult, div } from '../main'


describe('Calc', () => {
    describe('teste basicos', () => {

        it('existe o metodo soma', () => {
            expect(sum).to.exist
        })
        it('existe o metodo sub', () => {
            expect(sub).to.exist
        })
        it('existe o metodo mult', () => {
            expect(mult).to.exist
        })
        it('existe o metodo div', () => {
            expect(div).to.exist
        })

    })

    describe('soma', () => {
        it('tem que retornar 4 quando colocar 2 + 2', () => {
            expect(sum(2, 2)).to.be.equal(4)
        })
    })

    describe('sub', () => {
        it('tem que retornar 4 quando colocar 6 - 2', () => {
            expect(sub(6, 2)).to.be.equal(4)
        })
        it('tem que retornar -4 quando colocar 6 - 10', () => {
            expect(sub(6, 10)).to.be.equal(-4)
        })
    })

    describe('mult', () => {
        it('tem que retornar 4 quando colocar 2 * 2', () => {
            expect(mult(2, 2)).to.be.equal(4)
        })
    })

    describe('div', () => {
        it('tem que retornar 2 quando colocar 4 / 2', () => {
            expect(div(4, 2)).to.be.equal(2)
        })

        it('divisão com zero! "Não é possivel divisao por zero"', () => {
            expect(div(4, 0)).to.be.equal("Não é possivel divisao por zero")
        })

    })


})