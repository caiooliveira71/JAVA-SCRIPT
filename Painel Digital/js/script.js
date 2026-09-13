function atualizarPainel() {

    const agora = new Date();

    const hora = agora.getHours();

    const minuto = agora.getMinutes();

    const segundo = agora.getSeconds();


    const horario =
        String(hora).padStart(2, "0") + ":" +
        String(minuto).padStart(2, "0") + ":" +
        String(segundo).padStart(2, "0");


    document.getElementById("relogio").textContent =
        horario;


    const dia = agora.getDate();

    const mes = agora.getMonth() + 1;

    const ano = agora.getFullYear();


    document.getElementById("dia").textContent =
        String(dia).padStart(2, "0");

    document.getElementById("mes").textContent =
        String(mes).padStart(2, "0");

    document.getElementById("ano").textContent =
        ano;


    const dataFormatada =
        String(dia).padStart(2, "0") + "/" +
        String(mes).padStart(2, "0") + "/" +
        ano;


    document.getElementById("data").textContent =
        dataFormatada;


    let mensagem;


    if (hora >= 6 && hora < 12) {

        mensagem = "BOM DIA!";

    } else if (hora >= 12 && hora < 18) {

        mensagem = "BOA TARDE!";

    } else {

        mensagem = "BOA NOITE!";
    }


    document.getElementById("mensagem").textContent =
        mensagem;
}


atualizarPainel();


setInterval(atualizarPainel, 1000);