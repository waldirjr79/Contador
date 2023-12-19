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

    banco = {
        7622210575630: 'CHOCOLATE DIAMANTE',
        9788576089728: 'LIVRO DATA SCIENCE'

    }

    var tabela = document.querySelector("#tabela-contagem")
    var linha = tabela.insertRow(1)
    var c0 = linha.insertCell(0)
    var c1 = linha.insertCell(1)
    var c2 = linha.insertCell(2)
    var c3 = linha.insertCell(3)


    linha.style.color = 'white'
    linha.style.heigth = '15px'

    ultima_ln = tabela.rows.length
    if (ultima_ln % 2 === 0){
        linha.style.backgroundColor = '#141414'
    } else {
        linha.style.backgroundColor = '#1a1a1a'
    }

    c0.innerHTML = 1
    c1.innerHTML = codbarra.value

    for (cod in banco){
        if(document.querySelector('#codbarra').value === cod){
            c2.innerHTML = banco[cod]
        }
    }
 
    if (document.querySelector('#ckQTD').checked){
        document.querySelector('.inf-qtd').style.display = 'flex'
        c3.innerHTML = 25
    } else {
        c3.innerHTML = 1    
    }

}

codbarra.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        if (codbarra.value){
            addLinhaTab()
            codbarra.value = ''
        }
    }
})
