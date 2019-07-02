open class Maquina2 (val marca: String){
    open fun minhaMarca(){
        println("minha marca é $marca")
    }
}

class Computador2(marca: String, val nucleos: Int) : Maquina2(marca){
    //overrride sobrecrever a função

    override fun minhaMarca() {
        //o super deixa eu utilizar a função com modificações ou sobreescrever totalmente
        val id = 10
        super.minhaMarca()
    }

    fun ligar(){};
    fun processar(){};

    //Sobrecarga mesmo nome na função so que com parametros diferentes
    fun overload(i: Int) = println("Overload")
    fun overload(i: String) = println("Overload")

}

fun main() {

    var c: Computador = Computador("Dell", 10)
    with(c){
        ligar();
        processar();
        minhaMarca();
    }


}