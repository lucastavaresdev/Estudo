package codefights

fun centuryFromYear(year: Int): Int {
    var ano = year.toString()

    if (ano.length === 4) {
        var final = ano.substring(3, 4)
        ano = ano.substring(0, 2);

        if (final != "0") {
            var ano2 = ano.toInt() + 1;
            return ano2;
        }
        return ano.toInt()
    }else{
        if(year > 99) {
            var final = ano.takeLast(1)
            ano = ano.substring(0, 1);

            if (final != "0") {
                var ano2 = ano.toInt() + 1;
                return ano2;
            }
            return ano.toInt()
        }else{
            return 1
        }
    }
}


fun centuryFromYear2(year: Int): Int = (year - 1) / 100 + 1



fun main() {
    println(centuryFromYear(45))
    println(centuryFromYear2(45))

}