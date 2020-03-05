package codefights

fun shapeArea(n: Int): Int {
    val valorfixo: Int = 1;
    var i = 1;
    var resultado :Int = 0

    while (i < n ){
        resultado  += i * 4
        i++
    }

    resultado = resultado + valorfixo


    return resultado
}

//fun shapeArea(n: Int) = n * n + (n - 1) * (n - 1)

fun main() {
    println(shapeArea(2))
}