//open diz que a classe pode ser herdada

open class Maquina (val marca: String){
    fun minhaMarca(){
        println("minha marca é $marca")
    }
}

class Computador(marca: String, val nucleos: Int) : Maquina(marca){
    fun ligar(){};
    fun processar(){};
}

fun main() {

    var c: Computador = Computador("Dell", 10)
    with(c){
        ligar();
        processar();
        minhaMarca();
    }
}