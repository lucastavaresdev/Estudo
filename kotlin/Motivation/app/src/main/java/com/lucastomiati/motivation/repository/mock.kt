package com.lucastomiati.motivation.repository

import com.lucastomiati.motivation.infra.MotivationConstants
import java.util.*;

data class Frase (val description: String, val category: Int)

class Mock {

    private val ALL = MotivationConstants.FILTROFRASE.ALL;
    private val MORNING = MotivationConstants.FILTROFRASE.MORNING;
    private val HAPPY = MotivationConstants.FILTROFRASE.HAPPY;

    //Frase Categoria

    private val mListPhrases: List<Frase> = listOf(
        Frase("Não sabendo que era impossível, foi lá e fez.", HAPPY),
        Frase("Você não é derrotado quando perde, você é derrotado quando desiste!", HAPPY),
        Frase("Quando está mais escuro, vemos mais estrelas!", HAPPY),
        Frase("Insanidade é fazer sempre a mesma coisa e esperar um resultado diferente.", HAPPY),
        Frase("Não pare quando estiver cansado, pare quando tiver terminado.", HAPPY),
        Frase("O que você pode fazer agora que tem o maior impacto sobre o seu sucesso?", HAPPY),
        Frase("A melhor maneira de prever o futuro é inventá-lo.", MORNING),
        Frase("Você perde todas as chances que você não aproveita.", MORNING),
        Frase("Fracasso é o condimento que dá sabor ao sucesso.", MORNING),
        Frase(" Enquanto não estivermos comprometidos, haverá hesitação!", MORNING),
        Frase("Se você não sabe onde quer ir, qualquer caminho serve.", MORNING),
        Frase("Se você acredita, faz toda a diferença.", MORNING),
        Frase("Riscos devem ser corridos, porque o maior perigo é não arriscar nada!", MORNING)
    )

    fun getFrase(categoryId:Int):String{

        val listaFiltrada = mListPhrases.filter { (it.category == categoryId || categoryId == ALL) }

       val rand = Random().nextInt(listaFiltrada.size)

        return listaFiltrada[rand].description
    }

}