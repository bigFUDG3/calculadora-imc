function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura<=0 || peso <= 0) {
        mostrarPop();
        return;
    }

    var imc = peso / (altura*altura);
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<h3>Seu IMC é ${imc.toFixed(2)}<h3>`;

    if (imc < 18.5) {
        resultadoDiv.innerHTML += '<i class="fas fa-exclamation-circle" style="color: orange;"></i> Baixo peso';
    } else if (imc >= 18.5 && imc < 25) {
        resultadoDiv.innerHTML += '<i class="fas fa-check-circle" style="color: green;"></i> Peso saudável';
    } else {
        resultadoDiv.innerHTML += '<i class="fas fa-exclamation-circle" style="color: red;"></i> Sobrepeso';
    }
}

function mostrarPop() {
    var popup = document.getElementById("pop-up");
    popup.style.display = "block";
    

    setTimeout(function() {
        popup.style.display = "none";
    }, 3000); // Oculta o popup após 3 segundos
}

