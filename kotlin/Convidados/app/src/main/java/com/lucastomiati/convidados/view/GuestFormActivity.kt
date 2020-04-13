package com.lucastomiati.convidados

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.lifecycle.ViewModelProvider
import kotlinx.android.synthetic.main.activity_guest_from.*

class guestFormActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var mViewModel: guestFormViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_guest_from)

        mViewModel = ViewModelProvider(this).get(guestFormViewModel::class.java)

        setListener()

    }

    private fun setListener(){
        btnSalvar.setOnClickListener(this)
    }

    override fun onClick(v: View) {
        val id = v.id
        if(id == R.id.btnSalvar){

        }
    }
}
