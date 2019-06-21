package exercicios

fun countVowes(phrase: String): Int{
    val volwes = "aeiou"
    var  totalVolwes = 0;

    for(letter in phrase){
        if (letter.toLowerCase() in volwes) totalVolwes++
    }
    return totalVolwes
}

fun countConsoantes(phrase: String): Int{
    val consoantes = "bcdfghjklmnpqrstvxwyz"
    var  totalVolwes = 0;

    for(letter in phrase){
        if (letter.toLowerCase() in consoantes) totalVolwes++
    }
    return totalVolwes
}