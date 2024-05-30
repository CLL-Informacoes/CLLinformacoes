function exibirPopup() {
    var popup = document.getElementById("popup");
    var icon = document.getElementById("iconchat");

    if (popup.style.display === "none") {
        popup.style.display = "block";
        icon.style.display = "none";
    } else {
        popup.style.display = "none";
        icon.style.display = "block";
    }
}

function fechar() {
    var popup = document.getElementById("popup");
    var icon = document.getElementById("iconchat");

    popup.style.display = "none";
    icon.style.display = "block";
}

function enviarFeedback() {
    // Coloque aqui o código para enviar o feedback
    alert("Feedback enviado!"); // Exemplo: um alerta é exibido quando o botão de enviar feedback é clicado
}


function enviarFeedback() {
    var feedback = document.getElementById("feedbackText").value;
    // Aqui você pode enviar o feedback para o servidor e, em seguida, enviar por email
    // Por exemplo, você pode usar XMLHttpRequest ou fetch para enviar o feedback para o servidor
    // Depois, o servidor pode enviar um email com o feedback
    // Este exemplo apenas mostra um alerta com o feedback
    alert("Feedback enviado: " + feedback);

}


