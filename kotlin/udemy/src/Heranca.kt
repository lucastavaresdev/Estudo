open class Maquina2(val marca: String) {
    open fun minhaMarca() {
        println("A marca é $marca")
    }
}

class Computador1(marca: String, val nucleos: Int) : Maquina1(marca){

    override fun minhaMarca() {
//        super.minhaMarca()
        println("estou sobreescrevendo esta função")
    }
//private deixa a função acessivel apenas dentro da class
    private fun ligar(){
        println("Ligando")
    }

    fun processar(){
        println("Processando")
    }

    fun overload(i: Int) = println("overload")
    fun overload(s: String) = println("overload")

}

fun main() {
    val c: Computador1 = Computador1("minhamarca",10)

    with(c){

        processar()
        minhaMarca()
    }
}