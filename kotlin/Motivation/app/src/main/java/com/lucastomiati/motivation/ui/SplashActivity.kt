package com.lucastomiati.motivation

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.view.View
import android.widget.Toast
import com.lucastomiati.motivation.infra.SecurityPreference
import kotlinx.android.synthetic.main.activity_splash.*

class SplashActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var mSecurityPreference: SecurityPreference


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        mSecurityPreference = SecurityPreference(this)

        if (supportActionBar != null) {
            supportActionBar!!.hide()
        }

        btnSalvar.setOnClickListener(this)



    }

    override fun onClick(view: View) {
        val id = view.id
        if (id == R.id.btnSalvar){
            HandlerSave()
        }
    }

    private fun HandlerSave(){
        val name = editName.text.toString()
        if(name != ""){
            mSecurityPreference.storeString("name", name)
            //para mudar de tela
            startActivity(Intent(this, MainActivity::class.java))
        }else{
            Toast.makeText(this, "informe seu nome", Toast.LENGTH_SHORT).show()
        }
    }
}
