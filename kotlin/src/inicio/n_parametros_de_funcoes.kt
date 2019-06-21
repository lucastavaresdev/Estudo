package inicio

fun media(vararg notas: Float){
    if(notas.isNotEmpty()){
        var soma = 0f
        for(nota in notas){
            soma += nota
        }
        println("A inicio.media é ${soma/notas.size}")
    }

}
//COLOCAR VARIOS TIPOS
fun <T> media2(vararg valores: T){
    for (valor in valores){
        println(valor)
    }

}


fun main() {
    media(1f, 10f, 5f)
    media2(5, 7f, 5f, "lucas")
}