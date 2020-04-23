package com.lucastomiati.defautteste

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.animation.AnimationUtils
import kotlinx.android.synthetic.main.activity_animation.*

class Animation : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_animation)

        btn4.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.fade_in)
            TextName.startAnimation(animation)
        }

        btn5.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.fade_out)
            TextName.startAnimation(animation)
        }

        btn6.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.zoom_in)
            TextName.startAnimation(animation)
        }

        btn7.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.zoom_out)
            TextName.startAnimation(animation)
        }

        btn8.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.slide_down)
            TextName.startAnimation(animation)
        }
        btn9.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.slide_up)
            TextName.startAnimation(animation)
        }

        btn10.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.bounce)
            TextName.startAnimation(animation)
        }

        btn11.setOnClickListener{
            val animation = AnimationUtils.loadAnimation(this, R.anim.rotate)
            TextName.startAnimation(animation)
        }
    }
}
