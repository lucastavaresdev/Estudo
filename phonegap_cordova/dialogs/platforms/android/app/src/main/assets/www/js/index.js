/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {

        btnAlert = document.getElementById('alert');
        btnconfirm = document.getElementById('confirm');
        btnprompt = document.getElementById('prompt');
        beep = document.getElementById('beep');

        btnAlert.addEventListener('click', function () {
            clickAlerta();
        })

        btnconfirm.addEventListener('click', function () {
            clickConfimacao();
        })

        btnprompt.addEventListener('click', function () {
            clickprompt();
        })
        beep.addEventListener('click', function () {
            clickbeep();
        })
    },
};

function clickAlerta() {
    function alertDismissed() {
        alert('alerta do javacript')
    }

    navigator.notification.alert(
        'Isto e uma mensagem',  // message
        alertDismissed,         // callback
        'Mensagem',            // title
        'ok'                  // buttonName
    );
}

function clickConfimacao() {

    function onConfirm(buttonIndex) {
        alert('Usuario clicou no botão ' + buttonIndex);
    }

    navigator.notification.confirm(
        'Erro ao salvar registro, deseja salvar novamente', // message
        onConfirm,            // callback to invoke with index of button pressed
        'Erro',           // title
        ['Sim', 'Nao']     // buttonLabels
    );
}

function clickprompt() {
    function onPrompt(results) {
        alert("Bem vindo " + results.input1 + "e você clicou no botão " + results.buttonIndex);
    }

    navigator.notification.prompt(
        'Informe seu Nome',  // message
        onPrompt,                  // callback to invoke
        'Registro',            // title
        ['Ok', 'Exit'],             // buttonLabels
        'Lucas Tavares'                 // defaultText
    );

}
function clickbeep() {
    navigator.notification.beep(2);
}

app.initialize();