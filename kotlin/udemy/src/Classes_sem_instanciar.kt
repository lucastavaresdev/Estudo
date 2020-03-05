class Classes_sem_instanciar() {
    companion object Bancos {
        val TABLE = "Pessoa"

        fun ligar() {
            println("Ligando")
        }
    }
}

object Vendas {
    val TABLE = "VENDA"
}

fun main() {
    println(Classes_sem_instanciar.TABLE)
    println(Vendas.TABLE)

    Classes_sem_instanciar.ligar()

}