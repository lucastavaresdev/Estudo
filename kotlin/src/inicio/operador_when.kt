fun operacao(a: Int, b: Int, c: String) {
    /*
    when (c) {
        "soma" -> return a + b
        "subtracao" -> return a - b
        else -> {
            println("Nao tem operador")
            return 0
        }
    }
    */

    when {
        a > 0 && b > 0 -> {
            println("maior que zero")
        }
    }

    //range = intevalo de valores 1...10
    when (a) {
        in 1..99 -> {
            println("seculo")
        }
    }

}

fun main() {
    operacao(10, 10, "soma")
    operacao(10, 10, "subtracao")
}