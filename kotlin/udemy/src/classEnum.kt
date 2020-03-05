enum class Prioridade {
    BAIXA,MEDIA, ALTA
}

enum class Prioridade2(val id: Int){
    BAIXA(1){
        override fun toString(): String {
            return "Super baixo"
        }
    }, MEDIA(5), ALTA(10)
}

class Alarme(var desc: String, p: Prioridade2)

fun main() {

    Alarme("aviso", Prioridade2.ALTA)

    for (p in Prioridade2.values()){
        if(p.toString() === "MEDIA"){
            println("media 2")
        }
        println("$p - ${p.id} - ${p.ordinal}")
    }

}