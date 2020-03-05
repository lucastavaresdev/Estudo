import java.lang.Exception
import java.lang.NumberFormatException

fun main() {
 try {
     "dsadasd".toInt()
 }catch (e: NumberFormatException){
     println("Esse valor não é um numero");
 }catch (e: Exception){
     print("erro");
 }
}