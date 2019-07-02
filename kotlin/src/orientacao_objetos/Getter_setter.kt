//caso precise fazer um get e set customizado

class Maquina(var marca: String) {

    var nucleos: Int = 0
    get() {
        println("Get Customizado");
        return field
    }
    set(value){
        println("Set Customizado");
        field = value;
    }

}

fun main() {
    var m = Maquina("xpto")
    println(m.nucleos)
    m.nucleos = 10
}