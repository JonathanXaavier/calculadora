const resultado = window.document.querySelector(".res")
const confirmar = window.document.querySelector(".igual")

function insert(valor){
    resultado.innerHTML += valor
}

function clean(){
    resultado.innerHTML = " " 
}
function confirm(){
    resultado.innerHTML = eval(resultado.innerHTML)
}


