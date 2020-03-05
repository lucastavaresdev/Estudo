class Quadrado(val area:Float)
data class Triangulo(val area: Float)

//data class  transita dados
//data class Param(var b: Boolean, var s:String, var i: Int)
//
//fun teste(p : Param){
//
//}

fun main() {

    var q1 = Quadrado(10f)
    var q2 = Quadrado(10f)

    var t1 = Triangulo(10f)
    var t2 = Triangulo(10f)

    //compara o endereço de memoria
    println(q1 == q2)
    //compara os atributos
    println(t1 == t2)
}