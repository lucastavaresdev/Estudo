package orientacao_objetos

class Quadrado (val area: Float)

data class Triangulo (val area: Float)
//data class trasita dados


fun main() {
    val q1 = Quadrado(10f)
    val q2 = Quadrado(10f)

    val t1 = Triangulo(10f)
    val t2 = Triangulo(5f)

    println(q1)
    println(t1)
}