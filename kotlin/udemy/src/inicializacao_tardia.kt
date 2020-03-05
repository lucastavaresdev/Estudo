class Pessoa{
    lateinit var nome: String

    fun geradorDeNomes(){
        nome = "dasdasdas"
    }
}


fun main() {

    val p = Pessoa()
    p.geradorDeNomes()
}