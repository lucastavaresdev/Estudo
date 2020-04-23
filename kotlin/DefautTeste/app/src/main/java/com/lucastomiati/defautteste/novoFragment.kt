package com.lucastomiati.defautteste

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import kotlinx.android.synthetic.main.fragment_novo.view.*


/**
 * A simple [Fragment] subclass.
 */
class novoFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val view = inflater!!.inflate(R.layout.fragment_novo, container, false)

        view.btn3.setOnClickListener { view ->
            //Toast.makeText(context, "teste", Toast.LENGTH_SHORT).show()
            val intent = Intent(context, Animation::class.java)
            startActivity(intent)
        }

        return view
    }
}
