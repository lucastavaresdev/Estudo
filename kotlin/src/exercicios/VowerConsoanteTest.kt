package exercicios

import org.junit.Assert
import org.junit.Test

class VowerConsoanteTest{

    @Test fun countVowes() {
        Assert.assertEquals(0, countVowes("Quantas Vogais tem esta frase"))
    }

    @Test fun countConsoantes(){
        Assert.assertEquals(21, countConsoantes("Geramente uma frase possui mais consoantes"))
    }

    @Test fun countVowelsAndConsoants(){
        val phrase = "estou gostando de apreder kotlin"
        Assert.assertEquals(15,countVowes(phrase))
        Assert.assertEquals(19,countConsoantes(phrase))
    }
}