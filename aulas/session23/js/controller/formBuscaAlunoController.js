class FormBuscaAlunoController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    buscaAluno(callback){
        var nome = this.view.$selector.querySelectorAll('input').value;
        var filtrados = this.model.buscarAlunos(nome);
        
        if(filtrados && typeof callback === 'function'){
            callback(filtrados);
        }
    }
    
}