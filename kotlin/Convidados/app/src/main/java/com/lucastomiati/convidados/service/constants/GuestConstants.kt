package com.lucastomiati.convidados.service.constants

class GuestConstants  private constructor(){
    companion object{
        const val GUESTID = "guestId"

    }
    object FILTER{
        val EMPTY = 0
        val PRESENT = 1
        val ABSENT = 2
    }
}