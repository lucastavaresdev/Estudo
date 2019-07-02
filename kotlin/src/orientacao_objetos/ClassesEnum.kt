package orientacao_objetos

enum class Prioridade1 () {
    BAIXA, MEDIA, ALTA
}

enum class Prioridade2(val id: Int){
    BAIXA(id = 1){
        override fun toString(): String {
            return "Super Baixa, Não se Preucupe"
        }
    },
    MEDIA(id = 5), ALTA(10)
}

fun main() {
    for (p in Prioridade2.values()){
        println("$p - ${p.id} - ${p.ordinal}")
    }
}