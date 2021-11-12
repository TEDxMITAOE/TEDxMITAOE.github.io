let PreviousSpeakerCardIndex = 1;
function displaySpeaker(SpeakerId) {
    let element = document.getElementById(PreviousSpeakerCardIndex);
    element.classList.replace("speaker-card-active", "speaker-card");
    element = document.getElementById(SpeakerId);
    element.classList.replace("speaker-card", "speaker-card-active");
    PreviousSpeakerCardIndex = SpeakerId;
}

let PreviousPartnerCardIndex = 1;
function displayPartner(PartnerId) {
    let element = document.getElementById(PreviousPartnerCardIndex);
    element.classList.replace("partner-card-active", "partner-card");
    element = document.getElementById(PartnerId);
    element.classList.replace("partner-card", "partner-card-active");
    PreviousPartnerCardIndex = PartnerId;
}

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

function autoChangeSpeaker() {
    setInterval(function () { if (PreviousSpeakerCardIndex >= 8) { displaySpeaker(1); } else { displaySpeaker(PreviousSpeakerCardIndex + 1); } }, 3000);
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