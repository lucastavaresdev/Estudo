// tratar exceções principais antes do exception
// o finally mata o programa, faz o fechamento do arquivo

import java.lang.Exception
import java.lang.NumberFormatException

fun main() {
 try {
     "dsadasd".toInt()
 }catch (e: NumberFormatException){
     println("Esse valor não é um numero");
 }catch (e: Exception){
     print("erro");
 } finally {
     print("fim do algoritimo")
 }
}