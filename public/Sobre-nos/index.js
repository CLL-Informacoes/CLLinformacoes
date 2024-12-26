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
}

function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

document.getElementById("menuHamburguer").addEventListener("click", openPopup);
