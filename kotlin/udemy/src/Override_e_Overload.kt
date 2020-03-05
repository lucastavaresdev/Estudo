open class Maquina1(val marca: String) {
     open fun minhaMarca() {
        println("A marca é $marca")
    }
}

class Computador(marca: String, val nucleos: Int) : Maquina1(marca){

    override fun minhaMarca(){
        print("estou sobreescrevendo esta função")
    }

    fun ligar(){
        println("Ligando")
    }
    fun processar(){
        println("Processando")
    }
}

fun main() {
    val c: Computador = Computador("minhamarca",10)

    with(c){
        ligar()
        processar()
        minhaMarca()
    }
}