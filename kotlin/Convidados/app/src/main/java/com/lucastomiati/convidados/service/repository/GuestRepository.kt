package com.lucastomiati.convidados.service

import com.lucastomiati.convidados.service.model.GuestModel

class GuestRepository {

    fun getAll(): List<GuestModel> {
        val list: MutableList<GuestModel> = ArrayList()
        return list
    }

    fun getPresents(): List<GuestModel> {
        val list: MutableList<GuestModel> = ArrayList()
        return list
    }

    fun getAbsets(): List<GuestModel> {
        val list: MutableList<GuestModel> = ArrayList()
        return list
    }


    fun save(guest: GuestModel) {
    }

    fun update(guest: GuestModel) {
    }

    fun delete(guest: GuestModel) {
    }


}