// describe descreve o que o teste faz
// context que recebe dois tipos de parametros
// It roda os nossos testes

describe('Main', function () {
  describe('metodo A', function () {
    context('case 1', function () {
      it("deveria somar 2 + 2 e retornar 4", function(){
         //o que quer que aconteça
         //   entrada dados /   metodo soma(2+2)
         // retorno 4 == true se não 3 == false

         throw new Error("just on error")
      })
    })
    context('case 2', function () {

    })
  })

  describe('metodo B', function () {

  })

})
