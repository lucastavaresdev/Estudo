package com.lucastomiati.gastodeviagem

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*
import java.lang.NumberFormatException

class MainActivity : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        btnCalcular.setOnClickListener(this)

    }

    override fun onClick(view: View) {
        val id = view.id
        if (id == R.id.btnCalcular) {
            calculate()
        }
    }

    private fun calculate() {
        if (validade()) {
            try {
                val distance = editDistance.text.toString().toFloat()
                val price = editPrince.text.toString().toFloat()
                val autonomy = editAutonomy.text.toString().toFloat()

                val result = (distance * price) / autonomy
                totalValue.text = "R$ ${"%.2f".format(result)}"

            } catch (nfe: NumberFormatException) {
                Toast.makeText(this, getString(R.string.valores_validos), Toast.LENGTH_LONG).show()
            }

        } else {
            //a activity , o texto, e o tempo
            Toast.makeText(this, getString(R.string.aviso_de_preenchimento), Toast.LENGTH_LONG)
                .show()
        }

    }

    private fun validade(): Boolean {
        return (editDistance.text.toString() != "" && editPrince.text.toString() != "" && editAutonomy.text.toString() != ""
                && editAutonomy.text.toString() != "0")

    }
}
