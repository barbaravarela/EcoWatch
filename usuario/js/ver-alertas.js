const floresta = document.getElementById("floresta");
const brasilia = document.getElementById("alertas-brasilia");
const canela = document.getElementById("alertas-canela");
const carajas = document.getElementById("alertas-carajas");
const ipanema = document.getElementById("alertas-ipanema");
const irati = document.getElementById("alertas-irati");
const tapajos = document.getElementById("alertas-tapajos");
const marioXavier = document.getElementById("alertas-marioXavier");
const tijuca = document.getElementById("alertas-tijuca");

floresta.addEventListener("change", function() {

    // Esconde todos os alertas
    brasilia.classList.add("d-none");
    canela.classList.add("d-none");
    carajas.classList.add("d-none");
    ipanema.classList.add("d-none");
    irati.classList.add("d-none");
    tapajos.classList.add("d-none");
    marioXavier.classList.add("d-none");
    tijuca.classList.add("d-none");

    // Mostra os alertas da floresta selecionada
    if (floresta.value == "brasilia") {
        brasilia.classList.remove("d-none");
    } else if (floresta.value == "canela") {
        canela.classList.remove("d-none");
    } else if (floresta.value == "carajas") {
        carajas.classList.remove("d-none");
    } else if (floresta.value == "ipanema") {
        ipanema.classList.remove("d-none");
    } else if (floresta.value == "irati") {
        irati.classList.remove("d-none");
    } else if (floresta.value == "tapajos") {
        tapajos.classList.remove("d-none");
    } else if (floresta.value == "marioXavier") {
        marioXavier.classList.remove("d-none");
    } else if (floresta.value == "tijuca") {
        tijuca.classList.remove("d-none");
    }
});