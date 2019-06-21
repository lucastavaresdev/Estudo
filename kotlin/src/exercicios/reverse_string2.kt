package exercicios

fun reverseUsingSB(str: String): String {
    return StringBuilder(str).reverse().toString()
}

fun reverseUsingLoop(str: String): String {
    var shPhrase = StringBuilder()
    var i = str.length - 1

    while (i >= 0) {
        shPhrase.append(str[i])
        i--
    }
    return shPhrase.toString()
}

fun main() {
    reverseUsingLoop("teste")
    reverseUsingSB("Lucas")
}