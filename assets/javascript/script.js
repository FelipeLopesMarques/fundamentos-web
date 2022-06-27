var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var nomeOk = false
var emailOk = flase
var assuntoOk = false
var mapa = document.querySelector('#mapa')

function validarNome(){
    let TxtNome = document.querySelector('#TxtNome')
        if(nome.value.length < 2){
            TxtNome.innerHTML = 'Nome inválido!'
            TxtNome.style.color = 'red'
            nomeOk = false
     }
            else{
                TxtNome.innerHTML = 'Nome válido!'
                TxtNome.style.color = 'green'
                nomeOk = true
     }
}

function validarEmail(){
    let TxtEmail = document.querySelector('#TxtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){       
            TxtEmail.innerHTML = 'E-mail inválido!'
            TxtEmail.style.color = 'red'
            emailOk = false
    }
            else{
                TxtEmail.innerHTML = 'E-mail válido!'
                TxtEmail.style.color = 'green'
                emailOk = true

            }
}

function validarAssunto(){
    let TxtAssunto = document.querySelector('#assunto')
        if (assunto.value.length >= 100){
            TxtAssunto.innerHTML = 'Texto é muito grande, neste campo é permitido no máximo 100 caracteres'
            TxtAssunto.style.color = 'red'
            TxtAssunto.style.display = 'block'
        }
        else{
            TxtAssunto.style.display = 'none'
            assuntoOk = true
        }
}

function Enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Enviado com sucesso!')  
    }
        else{
            alert('Ops! sua mensagem não foi enviada, vamos tentar novamente.')
        }
}

function Zoom(){
    mapa.style.width = '1400px'
    mapa.style.heigth = '500px'
}
function mapaNormal(){
    mapa.style.width = '700px'
    mapa.style.heigth = '250px'
}