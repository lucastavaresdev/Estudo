package com.lucastomiati.motivation.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.lucastomiati.motivation.R
import com.lucastomiati.motivation.infra.MotivationConstants
import com.lucastomiati.motivation.infra.SecurityPreference
import com.lucastomiati.motivation.repository.Mock
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var mSecurityPreference: SecurityPreference
    private var mFraseFiltro : Int = MotivationConstants.FILTROFRASE.ALL

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //escondendo actionbar
        if (supportActionBar != null){
            supportActionBar!!.hide()
        }

        mSecurityPreference = SecurityPreference(this)
        val name = mSecurityPreference.getString(MotivationConstants.KEY.PERSON_NAME)
        textName.text = "Ola ${name}!"

        //Logica inicial de seleção
        imageAll.setColorFilter(resources.getColor(R.color.colorAccent))
        handleNewphase()


//        associando o o click do botao
        btnfrase.setOnClickListener(this)
        imageAll.setOnClickListener(this)
        imageHappy.setOnClickListener(this)
        imageMorning.setOnClickListener(this)

    }

    override fun onClick(view: View) {
        val id = view.id

        val listFilter = listOf(R.id.imageAll, R.id.imageHappy, R.id.imageMorning)

        if (id === R.id.btnfrase) {
            handleNewphase()
        } else if (id in listFilter) {
            handleFilter(id)
        }
    }

    private fun handleFilter(id: Int) {

        imageAll.setColorFilter(resources.getColor(R.color.white))
        imageHappy.setColorFilter(resources.getColor(R.color.white))
        imageMorning.setColorFilter(resources.getColor(R.color.white))

        when (id) {
            R.id.imageAll -> {
                imageAll.setColorFilter(resources.getColor(R.color.colorAccent))
                mFraseFiltro = MotivationConstants.FILTROFRASE.ALL
            }
            R.id.imageHappy -> {
                imageHappy.setColorFilter(resources.getColor(R.color.colorAccent))
                mFraseFiltro = MotivationConstants.FILTROFRASE.HAPPY
            }
            R.id.imageMorning -> {
                imageMorning.setColorFilter(resources.getColor(R.color.colorAccent))
                mFraseFiltro = MotivationConstants.FILTROFRASE.MORNING
            }
        }
    }

    private fun handleNewphase() {
        textfrase.text = Mock().getFrase(mFraseFiltro)
    }


}
