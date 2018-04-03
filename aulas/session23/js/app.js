var alunos = ["lucas", "joyce", "teste"];

alunos = alunos.map( aluno => new Aluno(aluno));


alunos[0].adicionarNotas(5,2,3,8);
alunos[1].adicionarNotas(5,7,10,8);
alunos[2].adicionarNotas(2,3,5,6);

var listaAlunos = new ListaAlunos(alunos);
console.log(listaAlunos);

var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);

var listaAlunosController = new ListaAlunosController(listaAlunos , listaAlunosView);


blg.$("#form-adiciona form").addEventListener('submit', function(e){
    e.preventDefault();
    
    var nome = blg.$('#nome').value;
    
    var notas = [];
    var i = 0;
    
    while(blg.$('#nota' + i)){
       notas.push(parseFloat(blg.$('#nota' + i).value));
        i++;
    }
    
    listaAlunosController.adicionarAluno(nome,notas);
    blg.$('#nome').value = '';
    blg.$('#nota1').value = '';
    blg.$('#nota2').value = '';
    blg.$('#nota3').value = '';
    blg.$('#nota4').value = '';
    blg.$('#nome').focus();
                
});