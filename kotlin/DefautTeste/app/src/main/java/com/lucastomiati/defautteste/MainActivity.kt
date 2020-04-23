package com.lucastomiati.defautteste

import android.app.PendingIntent.getActivity
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        btn1.setOnClickListener(this)
        btn2.setOnClickListener(this)

        if (savedInstanceState == null) {
            //adiciona o fraguimento inicial
            supportFragmentManager.beginTransaction().add(R.id.Framebox, novoFragment()).commit()
        }
    }

    override fun onClick(view: View) {
        val id = view.id
        if(id == R.id.btn1){
            supportFragmentManager.beginTransaction().replace(R.id.Framebox, novoFragment()).commit()
        }else if(id == R.id.btn2){
            supportFragmentManager.beginTransaction().replace(R.id.Framebox, BlankFragment()).commit()
        }

    }
}
