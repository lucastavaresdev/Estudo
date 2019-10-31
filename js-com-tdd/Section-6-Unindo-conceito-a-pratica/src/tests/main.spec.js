/*
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

*/

/* ------------------------------------------------- */
/* ---------------- Hooks ---------------------- */
/* ------------------------------------------------- */
// describe('MainHooks', function () {

//   //Roda uma vez antes do bloco
//   before(function(){
//     console.log("before");
//   })
//   //Roda uma vez depois do bloco
//   after(function(){
//     console.log("after");
//   })
//   //Roda todas as vezes antes de cada bloco
//   beforeEach(function(){
//     console.log("beforeEach");
//   })

//   //Roda todas as vezes depois de cada bloco
//   afterEach(function(){
//     console.log("afterEach");
//   })


//   it("teste1", function(){
//     console.log("teste1");
//   })
//   it("teste2", function(){
//     console.log("teste2");
//   })
// })


describe('MainHooks', function () {

  var arr;
  //Roda uma vez antes do bloco
  before(function () {

  })
  //Roda uma vez depois do bloco
  after(function () {

  })
  //Roda todas as vezes antes de cada bloco
  beforeEach(function () {
     arr = [1,2,3]
  })

  //Roda todas as vezes depois de cada bloco
  afterEach(function () {

  })



  it("deve retornar a quantidade de itens do arrey apos adicionar um valor", function () {
    arr.push(4)
    console.log(arr.length) // 4
  })

  it("Quando usar o metodo pop o array deve dinuir em um valor", function () {
    arr.pop()
    console.log(arr.length)
  })

  it("O ultimo valor foi 3", function () {
    console.log(arr.pop() === 3) //true
  })

})
