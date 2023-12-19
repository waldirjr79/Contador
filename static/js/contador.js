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

function addLinhaTab(){
    var tabela = document.querySelector("#tabela-contagem")
    var linha = tabela.insertRow(1)
    var c0 = linha.insertCell(0)
    var c1 = linha.insertCell(1)
    var c2 = linha.insertCell(2)

    linha.style.backgroundColor = '#141414'
    linha.style.color = 'white'
    linha.style.heigth = '15px'

    c0.innerHTML = 1
    c1.innerHTML = codbarra.value
    c2.innerHTML = 1
    console.log(codbarra.value)
}

codbarra.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        if (codbarra.value){
            addLinhaTab()
            codbarra.value = ''
        }
    }
})
