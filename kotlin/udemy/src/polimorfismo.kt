//cria uma interface que implemeta a função
interface Funcionario{
    fun calculaBonus()
}


class Gerente: Funcionario{
    // a função é implementada dentro da classe
    override fun calculaBonus() {
       println("bonus é igual a 500")
    }

}

class Tecnico:  Funcionario{
    override fun calculaBonus() {
        println("bonus é igual a 200")
    }

}

fun main(){
    val f1: Funcionario = Gerente()
    val f2: Funcionario = Tecnico()

    calculo(f1)
    calculo(f2)
}

fun calculo(funcionario: Funcionario){
    funcionario.calculaBonus()
}

