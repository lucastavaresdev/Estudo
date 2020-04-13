package com.lucastomiati.convidados.view

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView


import com.lucastomiati.convidados.R
import com.lucastomiati.convidados.service.constants.GuestConstants
import com.lucastomiati.convidados.view.adpter.GuestAdpter
import com.lucastomiati.convidados.view.listener.GuestListener
import com.lucastomiati.convidados.viewmodel.GuestsViewModel

class AllGuestsFragment : Fragment() {

    private lateinit var mViewModel: GuestsViewModel
    private val mAdapter: GuestAdpter = GuestAdpter()
    private lateinit var mListener: GuestListener

    override fun onCreateView(inflater: LayoutInflater,container: ViewGroup?,s: Bundle?): View? {
        mViewModel = ViewModelProvider(this).get(GuestsViewModel::class.java)

        val root = inflater.inflate(R.layout.fragment_all, container, false)


        //obter a recyclerView
        val recycler = root.findViewById<RecyclerView>(R.id.recycler_all_guest)

        //definir um layont como se comporta com o codigo
        recycler.layoutManager = LinearLayoutManager(context)

        //definir um adptador
        recycler.adapter = mAdapter

        mListener = object : GuestListener {
            override fun onClick(id: Int) {
                val intent = Intent(context, GuestFormActivity::class.java)

                val bundle = Bundle()
                bundle.putInt(GuestConstants.GUESTID, id)
                intent.putExtras(bundle)

                startActivity(intent)
            }

            override fun onDelete(id: Int) {
                mViewModel.delete(id)
                mViewModel.load(GuestConstants.FILTER.EMPTY)
            }
        }

        mAdapter.attachListener(mListener)
        observer()


        return root
    }

    override fun onResume() {
        super.onResume()
        mViewModel.load(GuestConstants.FILTER.EMPTY)
    }

    private fun observer() {
        mViewModel.guestList.observe(viewLifecycleOwner, Observer {
            mAdapter.updateGuest(it)
        })
    }
}
