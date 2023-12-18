const btnlogin = document.querySelector('#iconlogin');


function verificarInput(){
    if (document.querySelector('#user').value !== "" && document.querySelector('#pwd').value !== "") {
        return true
    } else {
        return false
    }
}



btnlogin.addEventListener('click', () => {
    console.log('botao login')
    if (verificarInput()){
        console.log('segue')
        document.querySelector('.login').style.display = 'none'
        document.querySelector('.main').style.display = 'flex'
    } else {
        alert('PREENCHER USUÁRIO E SENHA PARA PROSSEGUIR!!!')
    }
})

codbarra = document.querySelector('#codbarra')

codbarra.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        alert('Capturado')
        codbarra.value = ''
    }
})