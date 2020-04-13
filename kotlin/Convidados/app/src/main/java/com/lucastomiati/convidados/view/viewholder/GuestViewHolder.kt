package com.lucastomiati.convidados.view.viewholder

import android.app.AlertDialog
import android.view.OrientationEventListener
import android.view.View
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.lucastomiati.convidados.R
import com.lucastomiati.convidados.service.model.GuestModel
import com.lucastomiati.convidados.view.listener.GuestListener
import kotlinx.android.synthetic.main.row_guest.view.*

class GuestViewHolder(itemView: View,private val listener: GuestListener) : RecyclerView.ViewHolder(itemView) {
    fun bind(guest: GuestModel){
        val textName = itemView.findViewById<TextView>(R.id.text_name)
        textName.text = guest.nome

        textName.setOnClickListener{
            listener.onClick(guest.id)
        }

        textName.setOnLongClickListener{
            AlertDialog.Builder(itemView.context)
                .setTitle(R.string.remocao_convidado)
                .setMessage(R.string.deseja_remover)
                .setPositiveButton(R.string.remover){ dialog, which ->
                    listener.onDelete(guest.id)
                }
                .setNeutralButton(R.string.cancelar, null)
                .show()

            true
        }


    }
}