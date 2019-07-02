open class Maquina3 (val marca: String){
    open fun minhaMarca(){
        println("minha marca é $marca")
    }
}

private class Computador3(marca: String, val nucleos: Int) : Maquina3(marca){
    //overrride sobrecrever a função

    override fun minhaMarca() {
        //o super deixa eu utilizar a função com modificações ou sobreescrever totalmente
        val id = 10
        super.minhaMarca()
    }

    private fun ligar(){};
    fun processar(){};

    //Sobrecarga mesmo nome na função so que com parametros diferentes
    fun overload(i: Int) = println("Overload")
    fun overload(i: String) = println("Overload")

    private fun validar(){
        println("Ninguem vera minha classe utilizada apenas internamente");
    }
}

fun main() {

    var c: Computador = Computador("Dell", 10)
    with(c){
        ligar();
        processar();
        minhaMarca();
    }

}