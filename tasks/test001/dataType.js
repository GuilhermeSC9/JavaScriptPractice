var mainTitle = document.querySelector("h1")

function sum(){
    let firstNumber = parseInt(document.getElementById("fNum").value) // .value para capturar o valor do input
    let secNumber = parseInt(document.getElementById("sNum").value)   // parseInt para transformar o valor em int (ele vem como string)
    let calc = firstNumber + secNumber

    mainTitle.innerHTML = calc
}