fun almostIncreasingSequence(sequence: MutableList<Int>): Boolean {

    var count = 0;
    var i = 1
    var ordem = true

    while (i < sequence.size) {
        i++
        if(sequence[i] <= sequence[i - 1]) {
            count++
            if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false
            }
        }

    }

    return false
}


fun main() {
    val arraydeSequecias = mutableListOf<Int>(1, 3, 2,1)

    print(almostIncreasingSequence(arraydeSequecias))
}