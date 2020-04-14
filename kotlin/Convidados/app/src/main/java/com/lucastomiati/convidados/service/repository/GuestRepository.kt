package com.lucastomiati.convidados.service.repository

import android.content.ContentValues
import android.content.Context
import com.lucastomiati.convidados.service.constants.DataBaseConstants
import com.lucastomiati.convidados.service.model.GuestModel
import java.lang.Exception

class GuestRepository(context: Context) {


    //Acesso ao banco de dados

    private val mDataBase = GuestDataBase.getDatabase(context).guestDAO()

    fun get(id: Int): GuestModel {
        return mDataBase.load(id)
    }

    //inserir convidado
    fun save(guest: GuestModel): Boolean {
        return mDataBase.save(guest) > 0
    }

    //faz a listagem de todos os convidados
    fun getAll(): List<GuestModel> {
        return mDataBase.getInvited()
    }

    fun getPresents(): List<GuestModel> {
        return mDataBase.getPresent()
    }

    fun getAbsets(): List<GuestModel> {
        return mDataBase.getAbsent()
    }



    fun update(guest: GuestModel): Boolean {
        return mDataBase.update(guest) > 1

    }

    fun delete(guest: GuestModel) {
        mDataBase.delete(guest)
    }

}