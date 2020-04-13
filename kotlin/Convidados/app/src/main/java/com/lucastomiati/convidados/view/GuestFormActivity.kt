package com.lucastomiati.convidados.view

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.lucastomiati.convidados.R
import com.lucastomiati.convidados.service.constants.GuestConstants
import com.lucastomiati.convidados.viewmodel.GuestFormViewModel
import kotlinx.android.synthetic.main.activity_guest_from.*

class GuestFormActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var mViewModel: GuestFormViewModel
    private var mGuestId: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_guest_from)

        mViewModel = ViewModelProvider(this).get(GuestFormViewModel::class.java)


        setListener()
        observe()
        loadData()
        radio_present.isChecked = true
    }

    override fun onClick(v: View) {
        val id = v.id
        if(id == R.id.btnSalvar){

            val name = edit_name.text.toString()
            val presence =  radio_present.isChecked

            mViewModel.save(mGuestId, name, presence)


        }
    }

    private fun loadData(){
        val bundle = intent.extras
        if (bundle != null){
            mGuestId = bundle.getInt(GuestConstants.GUESTID)
            mViewModel.load(mGuestId)
        }
    }

    private fun observe(){
        mViewModel.saveGuest.observe(this, Observer {
            if(it){
                Toast.makeText(applicationContext,"Sucesso", Toast.LENGTH_SHORT).show();

            }else{
                Toast.makeText(applicationContext,"Sucesso", Toast.LENGTH_SHORT).show();
            }
            finish()
        })

        mViewModel.guest.observe(this, Observer {
            edit_name.setText(it.nome)
            if (it.presence){
                radio_present.isChecked = true

            }else{
                radio_absents.isChecked = true
            }
        })
    }

    private fun setListener(){
        btnSalvar.setOnClickListener(this)
    }

}
