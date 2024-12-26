function exibirPopup() {
    var popup = document.getElementById("popup");
    var icon = document.getElementById("iconchat");
    var feedbackText = document.getElementById("feedbackText");

    if (popup.style.display === "none") {
        popup.style.display = "block";
        icon.style.display = "none";
        feedbackText.focus();
    } else if (popup.style.display === "block") {
        popup.style.display = "none";
        icon.style.display = "block";
    } else {
        popup.style.display = "block";
        icon.style.display = "none";
        feedbackText.focus();
    }
}

function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
    document.getElementById("zin").style.zIndex = "0";
    document.getElementById("zin1").style.zIndex = "0";
    document.getElementById("zin2").style.zIndex = "0";
    document.getElementById("popupOverlay").style.zIndex = "10"

}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("zin").style.zIndex = "10";
    document.getElementById("zin1").style.zIndex = "10";
    document.getElementById("zin2").style.zIndex = "10";

}

document.getElementById("menuHamburguer").addEventListener("click", openPopup);



document.addEventListener('DOMContentLoaded', function () {
    // Dados que você pode atualizar conforme necessário
    const dados = {
        imagem: "../topicoEntretenimento/assets/ferrari-1211253_1280.jpg",
        informacoes: "Aqui estão as informações do conteúdo",
        titulo: "Aqui é o título do conteúdo",
        dataHora: "Há 2h no jornal de Pernambuco"
    };

    // Atualizar o conteúdo da página com os dados
    document.getElementById('imgApresent').src = dados.imagem;
    document.getElementById('informacoesConteudo').textContent = dados.informacoes;
    document.getElementById('titleConteudo').textContent = dados.titulo;
    document.getElementById('horaData').textContent = dados.dataHora;
});
