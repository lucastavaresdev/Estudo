fun makeArrayConsecutive2(statues: MutableList<Int>): Int {
    statues.sort()

    var i = statues[0]
    var j = 0
    var contador = 0

    while (i < statues[statues.size - 1]){
        if (statues[j] != i){
            contador += 1
        }else{
            j++
        }
        i++
    }

    return contador
}



fun main() {

   val arraynumero = mutableListOf<Int>(6,2,3,8)

    println(makeArrayConsecutive2(arraynumero))
}




/* =============== funcionou  ==================== */

//statues.sort()
//
//val menor = statues[0]
//val maior = statues[statues.size - 1]
//
//
//var i = menor
//var j = 0
//var contador = 0
//
//while (i < maior ){
//    if (statues[j] != i){
//        contador += 1
//        i++
//    }else{
//        i++
//        j++
//    }
//}
//
//return contador