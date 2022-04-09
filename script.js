window.onload = function () {

    var numeroPensado = Math.round(Math.random() * 10 / 2)
    console.log(numeroPensado)

    // Código para o apertar enter e o botão ser acionado
    var objChute = document.getElementById("chute");
    var objBotao = document.getElementById("botão");
    var objDivResposta = document.getElementById("resposta");
    var objDivMensagem = document.getElementById("mensagem");
    var objDivBelaFrase = document.getElementById("belaFrase");

    var input = document.getElementById("chute");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("botão").click();
        }
    });

    // Sorteio da frase
    var sorteioFrase = Math.round(Math.random() * 10 / 2)
    if (sorteioFrase == 0) {
        var fraseSorteada =
            "<i>Quando o mistério é impressionante demais, não ousamos desobedecer.</i> - Antoine de Saint-Exupéry"
    } else {
        if (sorteioFrase == 1) {
            var fraseSorteada =
                "<i>(...) para pessoas como ela, o mistério começava exatamente com a explicação.</i> - Julio Cortázar"
        } else {
            if (sorteioFrase == 2) {
                var fraseSorteada =
                    "<i>Haverá sempre mistério no fundo do Universo.</i> - José Rodrigues dos Santos"
            } else {
                if (sorteioFrase == 3) {
                    var fraseSorteada =
                        "<i>Conhece-te a ti mesmo e conhecerás o universo e os deuses.</i> - Sócrates"
                } else {
                    if (sorteioFrase == 4) {
                        var fraseSorteada =
                            "<i>Sou apaixonado pelo mistério, porque sempre tenho a esperança de desvendá-lo.</i> - Charles Baudelaire"
                    } else {
                        if (sorteioFrase == 5) {
                            var fraseSorteada =
                                "<i>A coisa mais bela que o homem pode experimentar é o mistério. É essa emoção fundamental que está na raíz de toda ciência e toda arte.</i> - Albert Einstein"
                        }
                    }
                }
            }
        }
    }

    // Ao apertar o botão
    var tentativa = 1;

    objBotao.onclick = function () {
        if (objChute.value == 666) {
            alert("TENTATIVA PROIBIDA")
            alert("Não olhe para trás... o_0")
            objChute.value = "HIHIHI";
        } else {
            if (isNaN(objChute.value)) {
                alert("Somente números")
                objChute.value = "";
            } else {
                if (objChute.value > 5 || objChute.value < 0 || objChute.value == "") {
                    alert("Digite um número de 0 a 5.")
                    objChute.value = "";
                } else {
                    if (numeroPensado == objChute.value) {
                        objDivResposta.innerHTML = "Acertou!! Na tentativa número " +
                            tentativa + ".";
                        objDivMensagem.innerHTML =
                            "Recarregue a página para sortear outro número.";
                        objChute.value = "";
                        objDivBelaFrase.innerHTML = fraseSorteada;
                    } else {
                        objDivResposta.innerHTML = "Errou " + tentativa;
                        objChute.value = "";
                        objDivMensagem.innerHTML = "";
                        objDivBelaFrase.innerHTML = "";
                        tentativa++;
                    }
                }
            }
        }
    }
}