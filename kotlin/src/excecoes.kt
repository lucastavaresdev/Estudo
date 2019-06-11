fun main() {
    try {
        println("sdsada".toInt())
    }catch (e: NumberFormatException){
        println("esse valor nao é um numero")
    }catch (e: Exception){
        println("algo de errodp")
    } finally {
        println("oi")
    }

    println("teste")
}