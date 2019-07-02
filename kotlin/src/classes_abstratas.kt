//Mamifero - Animal

abstract class Mamifero(var nome: String){
    abstract fun falar()
    fun dormir(){
        print("dormindo")
    }
}

class Cachorro(nome: String) : Mamifero(nome){
    override fun falar() {
        println("au au")
    }
}

class Gato(nome: String) : Mamifero(nome){
    override fun falar() {
        println("Miau ")
    }
}

fun main() {
    Cachorro("bolt").dormir()
}