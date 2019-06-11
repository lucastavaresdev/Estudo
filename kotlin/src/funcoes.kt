fun calcula(a: Int, b: Int){
   println(a + b)
}

fun hello(nome: String) : String{
    return "ola $nome";
}


//uma unica instrução
fun hello2(nome: String) = "ola $nome";


fun main() {
    calcula(2,3)
    calcula(3,3)

    println(hello("Lucas"))
    println(hello2("Lucas"))
}

//funções em uma unica linha

