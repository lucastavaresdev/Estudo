package com.lucastomiati.testecomponente



import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.bottomnavigation.BottomNavigationView




class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        val bottomNavigationView = findViewById(R.id.bottom_navigation) as BottomNavigationView

        bottomNavigationView.setOnNavigationItemSelectedListener { item ->
            when (item.itemId) {
                R.id.action_favorites -> {
                    print("teste")
                }
                R.id.action_recents -> {
                    print("teste")
                }
                R.id.action_nearby -> {
                    print("teste")
                }
            }
            return@setOnNavigationItemSelectedListener true
        }
    }
}

