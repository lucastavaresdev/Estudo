class Maquina(var marca: String){

    var nucleos: Int = 0;
//    get() {
//        println("get foi chamado");
//        return field;
//    }
//    set(value) {
//        println("set foi chamado")
//        field = value;
//    }


}

fun main() {
    var m = Maquina("xpto");
    println(m.nucleos)
    m.nucleos = 10;
}