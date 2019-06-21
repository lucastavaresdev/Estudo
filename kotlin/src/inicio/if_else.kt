package inicio/*fun inicio.maiorDeIdade(idade: Int): Boolean {
    if (idade >= 18) {
        //println("Maior de Idade");
        return true
    } else {
        //println("nao é maior de idade");
        return false
    }
}
*/

//if boolean
fun maiorDeIdade(idade: Int): Boolean {
    return idade >= 18;
}


fun calculaBonus(cargo: String, salario: Float): Float {

    return if (cargo === "coordenador") {
        salario * 0.2f
    } else if (cargo === "gerente junior") {
        salario * 0.5f
    } else {
         salario * 2
    }
}


fun main() {
    val valor = 10

    var str = if(valor === 10) "sim" else "nao";
    println(str);


    //operador elvis ?:
    //usado apenas para nulo
    val teste: Int? = null
    val op: Int = teste ?: 100
    println(op)



    println(calculaBonus("teste", 1000f))
    println(calculaBonus("gerente junior", 1000f))
    println(calculaBonus("coordenador", 1000f))


}



