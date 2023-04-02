function mudarparagrafo() {
    var paragrafo = document.getElementsByTagName("p");
    paragrafo[0].innerHTML = "Aula 2 de Programação para Web 2"
    paragrafo[1].style.fontSize = "40px"
    paragrafo[2].style.color = "blue"
    paragrafo[3].style.textAlign = "center"
    paragrafo[4].style.color = "green"
    paragrafo[5].innerHTML = "JavaScript não é JAVA!"
    paragrafo[5].style.color = "red"
    paragrafo[5].style.fontWeight = "bold"
}

function mudarcor() {
    var paragrafos = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafos.length; i++) {
        if (i % 2 == 0) {
            paragrafos[i].style.color = "yellow"

        }

    }
}

function ligarimagem() {
    document.querySelector("img").src = "images/lamp_on.gif"
}

function desligarimagem() {
    document.querySelector("img").src = "images/lamp_off.gif"
}

function mudarestado() {
    let x = document.getElementById("estadoButton");


    if (x.value == "Ligar") {
        document.querySelector("#estadoImagem").src = "images/lamp_on.gif";
        document.getElementById("estadoButton").value = "Desligar";
    } else {
        document.querySelector("#estadoImagem").src = "images/lamp_off.gif";
        document.getElementById("estadoButton").value = "Ligar";
    }
}

function calcular() {
    let calc = document.getElementsByTagName("option");
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")

    var select = document.getElementById('calc');
    var value = select.options[select.selectedIndex].value;

    if(value == "Soma"){
        alert(`Resposta = ${parseFloat(num1.value) + parseFloat(num2.value)}`)
    } else if (value == "Subtracao"){
        alert(`Resposta = ${parseFloat(num1.value) - parseFloat(num2.value)}`)
    } else if (value == "Multiplicacao"){
        alert(`Resposta = ${parseFloat(num1.value) * parseFloat(num2.value)}`)
    } else if (value == "Divisao"){
        alert(`Resposta = ${parseFloat(num1.value) / parseFloat(num2.value)}`)
    } else {
        alert("Não consegui identificar a operação.")
    }
}