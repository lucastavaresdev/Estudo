package com.lucastomiati.motivation.infra

import android.content.Context


class SecurityPreference(context: Context){

    private val msharedPreferences =
        context.getSharedPreferences("motivationapp", Context.MODE_PRIVATE)

    fun storeString(key:String, value: String){
        msharedPreferences.edit().putString(key, value).apply()
    }

    fun getString(key:String): String{
       return msharedPreferences.getString(key, "") ?: ""
    }

    fun storeInt(key:String, value: Int){
        msharedPreferences.edit().putInt(key, value).apply()
    }

}