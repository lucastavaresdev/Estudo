package inicio

fun main() {
    val frase = "kotlin é uma linguagem"
    val caracteritica = "programação"

    println(frase + caracteritica)
    println("teste de concatenação $frase")
    println("teste de concatenação ${frase.length}")


    var testedelinha = """
        rere
        rere
        rerere
                       rerere
    """.trimIndent()

    println(testedelinha)
}