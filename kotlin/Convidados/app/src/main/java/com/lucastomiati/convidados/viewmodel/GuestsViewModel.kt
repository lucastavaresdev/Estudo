package com.lucastomiati.convidados.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.lucastomiati.convidados.service.constants.GuestConstants
import com.lucastomiati.convidados.service.model.GuestModel
import com.lucastomiati.convidados.service.repository.GuestRepository
import java.util.logging.Filter

class GuestsViewModel(application: Application) : AndroidViewModel(application) {

    //acessando o repositorio

    private val mGuestRepository = GuestRepository(application)

    private val mGuestList = MutableLiveData<List<GuestModel>>()
    val guestList: LiveData<List<GuestModel>> = mGuestList

    fun load(filter: Int){

        if (filter == GuestConstants.FILTER.EMPTY){
            mGuestList.value = mGuestRepository.getAll()
        }else if (filter == GuestConstants.FILTER.PRESENT) {
            mGuestList.value = mGuestRepository.getPresents()
        }else{
            mGuestList.value = mGuestRepository.getAbsets()
        }





    }

    fun delete(id: Int){
       val guest = mGuestRepository.get(id)
        mGuestRepository.delete(guest)
    }

}