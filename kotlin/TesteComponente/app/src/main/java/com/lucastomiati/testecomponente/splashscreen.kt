package com.lucastomiati.testecomponente

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity


class splashscreen : AppCompatActivity()  {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splashscreen)

        val handler = Handler()
        handler.postDelayed({ mostrarMainActivity() }, 2000)

        if (supportActionBar != null) {
            supportActionBar!!.hide()
        }

    }

    private fun mostrarMainActivity() {
        val intent = Intent(this, MainActivity::class.java )
        startActivity(intent)
        finish()
    }
}
