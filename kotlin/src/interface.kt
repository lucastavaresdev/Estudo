//interface pode obrigar a implementar
interface Maquina5 {

    //nao posso ter estado, atibuição de valor numa variavel

    fun ligar()
    fun desligar(){
        println("off")
    }
}

class Auto : Maquina5{
    override fun ligar() {

    }

    override fun desligar() {
        super.desligar()
    }
}

//interface pode ser implementado mais de uma vez classe nao

interface interface1{
    fun ola(){
        println("interface 1")
    }
}

interface  interface2{
    fun ola(){
        println("interface 2")
    }
}

class ImplementaInterface : interface1,interface2{
    override fun ola() {
        super<interface1>.ola()
    }
}

fun main() {

}