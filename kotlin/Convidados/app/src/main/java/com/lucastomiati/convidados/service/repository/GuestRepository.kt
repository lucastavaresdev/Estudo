package com.lucastomiati.convidados.service.repository

import android.content.ContentValues
import android.content.Context
import com.lucastomiati.convidados.service.constants.DataBaseConstants
import com.lucastomiati.convidados.service.model.GuestModel
import java.lang.Exception

class GuestRepository private constructor(context: Context) {

    //Singleton
    private var mGuestDatabaseHelper: GuestDatabaseHelper = GuestDatabaseHelper(context)

    companion object {
        private lateinit var repository: GuestRepository

        fun getInstance(context: Context): GuestRepository {
            if (!::repository.isInitialized) {
                repository = GuestRepository(context)
            }
            return repository
        }
    }


    fun get(id: Int): GuestModel? {

        var guest: GuestModel? = null

        return try {
            val db = mGuestDatabaseHelper.readableDatabase

            val projection = arrayOf(DataBaseConstants.GUEST.COLUMNS.NAME, DataBaseConstants.GUEST.COLUMNS.PRESENCE)


            val selection = DataBaseConstants.GUEST.COLUMNS.ID + " = ?"
            val args = arrayOf(id.toString())

            var cursor = db.query(DataBaseConstants.GUEST.TABLE_NAME,
                projection,
                selection,
                args,
                null,
                null,
                null)


            if (cursor != null && cursor.count > 0){
                cursor.moveToFirst()

                val name = cursor.getString(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.NAME))
                val presence = (cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.PRESENCE)) == 1)

                guest = GuestModel(id, name, presence)
                cursor?.close()
            }

            guest
        } catch (e: Exception) {
            guest
        }
    }

    fun getAll(): List<GuestModel> {
        val list: MutableList<GuestModel> = ArrayList()


        return try {
            val db = mGuestDatabaseHelper.readableDatabase

            val projection = arrayOf(
                DataBaseConstants.GUEST.COLUMNS.ID,
                DataBaseConstants.GUEST.COLUMNS.NAME,
                DataBaseConstants.GUEST.COLUMNS.PRESENCE)


            var cursor = db.query(
                DataBaseConstants.GUEST.TABLE_NAME,
                projection,
                null,
                null,
                null,
                null,
                null)


            if (cursor != null && cursor.count > 0){
                while (cursor.moveToNext()){
                    val id = cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.ID))
                    val name = cursor.getString(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.NAME))
                    val presence = (cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.PRESENCE)) == 1)

                    val  guest = GuestModel(id, name, presence)
                   list.add(guest)

                }
            }

            list
        } catch (e: Exception) {
            list
        }

    }

    fun getPresents(): List<GuestModel> {
        val list: MutableList<GuestModel> = ArrayList()


        return try {
            val db = mGuestDatabaseHelper.readableDatabase

            var cursor = db.rawQuery("SELECT id, name, presence FROM Guest Where presence = 1", null)

            if (cursor != null && cursor.count > 0){
                while (cursor.moveToNext()){
                    val id = cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.ID))
                    val name = cursor.getString(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.NAME))
                    val presence = (cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.PRESENCE)) == 1)

                    val  guest = GuestModel(id, name, presence)
                    list.add(guest)

                }
            }

            list
        } catch (e: Exception) {
            list
        }
    }

    fun getAbsets(): List<GuestModel> {
        val list: MutableList<GuestModel> = ArrayList()


        return try {
            val db = mGuestDatabaseHelper.readableDatabase

            var cursor = db.rawQuery("SELECT id, name, presence FROM Guest Where presence = 0", null)

            if (cursor != null && cursor.count > 0){
                while (cursor.moveToNext()){
                    val id = cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.ID))
                    val name = cursor.getString(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.NAME))
                    val presence = (cursor.getInt(cursor.getColumnIndex(DataBaseConstants.GUEST.COLUMNS.PRESENCE)) == 1)

                    val  guest = GuestModel(id, name, presence)
                    list.add(guest)

                }
            }

            list
        } catch (e: Exception) {
            list
        }
    }


    fun save(guest: GuestModel): Boolean {
        return try {
            val db = mGuestDatabaseHelper.writableDatabase

            val contentvalue = ContentValues()
            contentvalue.put(DataBaseConstants.GUEST.COLUMNS.NAME, guest.nome)
            contentvalue.put(DataBaseConstants.GUEST.COLUMNS.PRESENCE, guest.presence)
            db.insert(DataBaseConstants.GUEST.TABLE_NAME, null, contentvalue)
            true
        } catch (e: Exception) {
            false
        }

    }

    fun update(guest: GuestModel): Boolean {
        return try {
            val db = mGuestDatabaseHelper.writableDatabase

            val contentvalue = ContentValues()
            contentvalue.put(DataBaseConstants.GUEST.COLUMNS.NAME, guest.nome)
            contentvalue.put(DataBaseConstants.GUEST.COLUMNS.PRESENCE, guest.presence)

            val selection = DataBaseConstants.GUEST.COLUMNS.ID + " = ?"
            val args = arrayOf(guest.id.toString())

            db.update(DataBaseConstants.GUEST.TABLE_NAME, contentvalue, selection, args)
            true
        } catch (e: Exception) {
            false
        }

    }


    fun delete(id: Int): Boolean {
        return try {
            val db = mGuestDatabaseHelper.writableDatabase
            val selection = DataBaseConstants.GUEST.COLUMNS.ID + " = ?"
            val args = arrayOf(id.toString())

            db.delete(DataBaseConstants.GUEST.TABLE_NAME,  selection, args)
            true
        } catch (e: Exception) {
            false
        }
    }



}