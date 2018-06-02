class FormAdicionarAlunoController{
    constructor(model , view){
        this.model = model;
        this.view = view;
    }
    limpar(){
        let inputs = this.view.$selector.querySelectorAll('input')
        Array.prototype.forEach.call(inputs, input => input.value = ' ');
        inputs[0].focus();
    }
}
