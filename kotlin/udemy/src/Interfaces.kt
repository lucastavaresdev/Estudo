
//inteface é como um contrato
// a interface não pode ter valor definido ex val peso: Float: 10f quem defini o valor é quem implementa ela

//uma classe pode usar duas ou mais interfaces como extenção

interface Maquina3{
    //metodos são como assinaturas

    fun ligar()
    fun desligar(){
        println("desligando")
    }
}

class Computador3 : Maquina3{
    override fun ligar() {

    }

    override fun desligar() {

    }

}

fun main(){

}