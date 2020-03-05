package execicios


fun reverseUsingSb(str: String): String {
    //    return str.reversed();
    return StringBuilder(str).reverse().toString();
}

fun reverseUsingLoop(str: String): String {
    var SbPharase = StringBuilder()
    var i = str.length - 1

    while (i >= 0) {
        SbPharase.append(str[i])
        i--
    }
    
    return SbPharase.toString()
}
