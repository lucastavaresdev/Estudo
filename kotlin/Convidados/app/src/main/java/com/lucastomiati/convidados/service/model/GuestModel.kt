package com.lucastomiati.convidados.service.model

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey


//entidade

@Entity(tableName = "Guest")
class GuestModel{

    @PrimaryKey(autoGenerate = true)
    @ColumnInfo(name = "id")
    var id:Int = 0

    @ColumnInfo(name = "name")
    var nome:String = ""

    @ColumnInfo(name = "presence")
    var presence: Boolean = true
}