package codefights

//For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//adjacentElementsProduct(inputArray) = 21.
//7 and 3 produce the largest product.

fun adjacentElementsProduct(inputArray: MutableList<Int>): Int {


    var resultado: Int = 0
    var maiorValor: Int? = null

    for (i in inputArray.indices) {
        var a = inputArray.size - 1
        if (i != a) {
            resultado = inputArray[i] * inputArray[i + 1]
            if (maiorValor == null) {
                maiorValor = resultado
            }  else  if (maiorValor < resultado) {
                    maiorValor = resultado
            }

        }
    }

    return maiorValor!!;

}


fun main() {
    val num = arrayOf(-23, 4, -3, 8, -12)

    println(adjacentElementsProduct(num.toMutableList()))

}


