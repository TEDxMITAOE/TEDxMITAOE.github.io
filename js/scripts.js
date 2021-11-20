function toggleNavBar() {
    let NavList = document.getElementById("tedx");
    let NavButton = document.getElementsByClassName("navbar-toggler")[0];
    if (NavList.classList.contains("show")) {
        NavList.classList.remove("show");
        NavButton.classList.add("collapsed");
    }
    else {
        NavList.classList.add("show");
        NavButton.classList.remove("collapsed");
    }
}

function redirect(key) {
    switch (key) {
        case 1: window.open("https://go.tedxmitaoe.com/twitter", "_blank").focus();
            break;
        case 2: window.open("https://go.tedxmitaoe.com/fb", "_blank").focus();
            break;
        case 3: window.open("https://go.tedxmitaoe.com/linkedin", "_blank").focus();
            break;
        case 4: window.open("https://go.tedxmitaoe.com/insta", "_blank").focus();
            break;
    }
}