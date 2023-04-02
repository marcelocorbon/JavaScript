function calc(x, y) {
    let total = 0;
    
    switch (x) {
        case "Coxinha":
            total += 5;
            break;
        case "Hamburguer":
            total += 6;
            break;
        case "Pastel":
            total += 3;
            break;
        case "Mistao":
            total += 8;
            break;
        case "Esfiha":
            total += 5;
            break;
        default:
            break;
    }

    switch (y) {
        case "Coca":
            total += 4;
            break;
        case "FUva":
            total += 3;
            break;
        case "FLaranja":
            total += 3;
            break;
        case "Guarana":
            total += 6;
            break;
        default:
            break;
    }

    let z = document.getElementsByClassName("student_option")

    let emb = document.getElementById("embalagem")
    if (emb.checked == true){
        total += 1.50;
    }

    if (z[1].checked == true){
        total -= ((5 / 100) * total)
    }

    alert(`Total a ser pago = R$ ${total.toFixed(2)}`)
}