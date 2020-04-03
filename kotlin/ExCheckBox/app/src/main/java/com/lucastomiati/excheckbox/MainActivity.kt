package com.lucastomiati.excheckbox

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        checkbox.setOnClickListener(this)

    }

    override fun onClick(view: View) {

        if(this.checkbox.isChecked) {
            imagemandroid.setColorFilter(resources.getColor(R.color.colorPrimaryDark))
        }else{
            imagemandroid.setColorFilter(resources.getColor(R.color.black))
        }
    }
}
