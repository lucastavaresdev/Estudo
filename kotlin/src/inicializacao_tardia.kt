//inicia a variavel tardia apenas depois da logica

class Pessoa{
    lateinit var nome: String;

    fun geradordeNome(){
        nome = "teste"
    }
}

fun main() {
    val p = Pessoa()
    p.geradordeNome()
}