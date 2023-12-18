const btnfechar = document.querySelector('#fechardialog');
const brncontador = document.querySelector('#lcontador');


btnfechar.addEventListener('click', () => {
    document.querySelector('#dialog').style.display = 'none' 

})

brncontador.addEventListener('click', () => {
    document.querySelector('#lcontador').style.display = 'flex'
    console.log('clicl')
})