package com.lucastomiati.motivation.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import com.lucastomiati.motivation.R
import com.lucastomiati.motivation.infra.MotivationConstants
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

        varificaNome()

    }

    override fun onClick(view: View) {
        val id = view.id
        if (id == R.id.btnSalvar){
            HandlerSave()
        }
    }

    private fun varificaNome(){
       val name = mSecurityPreference.getString(MotivationConstants.KEY.PERSON_NAME)
        if(name != ""){
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()
        }
    }

    private fun HandlerSave(){
        val name = editName.text.toString()
        if(name != ""){
            mSecurityPreference.storeString(MotivationConstants.KEY.PERSON_NAME, name)
            //para mudar de tela
            startActivity(Intent(this, MainActivity::class.java))
            finish()
        }else{
            Toast.makeText(this, "informe seu nome", Toast.LENGTH_SHORT).show()
        }
    }
}
