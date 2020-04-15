package com.lucastomiati.retrofit

import com.google.gson.annotations.SerializedName

class PostModel {

    //SerializedName serve para alterar o nome das chaves do json
    @SerializedName("id")
    var id: Int = 0

    @SerializedName("userId")
    var userId: Int = 0

    @SerializedName("title")
    var title: String = ""

    @SerializedName("body")
    var body: String = ""

}