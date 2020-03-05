package exercicios_code_fights

fun centuryFromYear(year: Int): Int {
    var year = year.toString();
    var b: Int
    year = year.substring(1, 2)
    if (year.toInt() != 0) {
        year = year.substring(0, 2)
        b = year.toInt() + 1;
        return b
    } else {
        year = year.substring(0, 2)
        b = year.toInt();
        return b
    }

}


fun main() {
    println(centuryFromYear(2000))
}



