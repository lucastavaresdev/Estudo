package com.lucastomiati.convidados.service.repository

import android.content.Context
import androidx.room.Room
import androidx.room.RoomDatabase

abstract class GuestDataBase : RoomDatabase(){

    companion object{
        private lateinit var INSTANCE: GuestDataBase
        fun getDatabase(context: Context): GuestDataBase{
            if(!:: INSTANCE.isInitialized){
                INSTANCE = Room.databaseBuilder(context, GuestDataBase::class.java, "guestdb")
                    .allowMainThreadQueries()//permite a conexao
                    .build()
            }
            return INSTANCE
        }
    }
}