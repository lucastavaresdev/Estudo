describe('Main', function () {

  //roda uma vez antes do bloco
  before(function () {
    console.log(' before');
  });


  //roda uma vez depois do ploco
  after(() => {
    console.log('after');
  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  //roda torodas as vezes depois do bloco
  afterEach(() => {
    console.log('afterEach');
  });


  it('test1', function () {
    console.log('teste 1');
  });
  it('test2', function () {
    console.log('teste 2');
  });
});
/*
before
beforeEach
teste 1
    √ test1
afterEach
beforeEach
teste 2
    √ test2
afterEach
after
*/
