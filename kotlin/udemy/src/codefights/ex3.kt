//Given the string, check if it is a palindrome.

package codefights


fun checkPalindrome(inputString: String): Boolean {
    val palindro = inputString.reversed()
    if(inputString == palindro){
        return true
    }else {
        return false
    }
}



fun main() {
   println(checkPalindrome("ovo"))
}