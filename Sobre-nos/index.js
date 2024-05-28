function chat1() {
    var div = document.getElementById("chat1");
    var computedStyle = window.getComputedStyle(div);
    var put = document.getElementById("chat");
    var icon = document.getElementById("iconchat");

    if (computedStyle.borderBottomStyle === "outset") {
        div.style.border = "7px inset #1e3441";
        put.style.display = "block";
        div.style.width = "25%";
        icon.src = "assets/iconenviar.svg"


        div.classList.remove("collapsed");
        document.addEventListener('click', closeChat1Outside);
    } 
    function closeChat1Outside(event) {
        if (!div.contains(event.target)) {
            div.style.border = "7px outset #1e3441";
            div.style.width = "80px";
            put.style.display = "none";
            icon.src = "assets/chat.svg"
            div.classList.add("collapsed");
            document.removeEventListener('click', closeChat1Outside);
        }
    }
}



