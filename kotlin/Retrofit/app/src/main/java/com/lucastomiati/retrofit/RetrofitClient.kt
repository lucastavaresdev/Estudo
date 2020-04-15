package com.lucastomiati.retrofit

import okhttp3.OkHttpClient
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RetrofitClient private constructor() {
    //para acessar uma classe com o construtor privado é so usar o companion object

    companion object {

        private lateinit var retrofit: Retrofit
        private val baseURL = "https://jsonplaceholder.typicode.com/"

        private fun getRetrofitInstance(): Retrofit {
            val httpClient = OkHttpClient.Builder()
            if (!::retrofit.isInitialized) {
                retrofit = Retrofit.Builder()
                    .baseUrl(baseURL)
                    .client(httpClient.build())
                    .addConverterFactory(GsonConverterFactory.create())
                    .build()
            }
            return retrofit
        }

        fun <S> createService(serviceClass: Class<S>) : S{
            return getRetrofitInstance().create(serviceClass)
        }
    }
}