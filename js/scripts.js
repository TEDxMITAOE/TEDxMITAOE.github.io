let PreviousSpeakerCardIndex = 1;
function displaySpeaker(SpeakerId){
    let element = document.getElementById(PreviousSpeakerCardIndex);
    element.classList.replace("speaker-card-active","speaker-card");
    element = document.getElementById(SpeakerId);
    element.classList.replace("speaker-card","speaker-card-active");
    PreviousSpeakerCardIndex = SpeakerId;
}

let PreviousPartnerCardIndex = 1;
function displayPartner(PartnerId){
    let element = document.getElementById(PreviousPartnerCardIndex);
    element.classList.replace("partner-card-active","partner-card");
    element = document.getElementById(PartnerId);
    element.classList.replace("partner-card","partner-card-active");
    PreviousPartnerCardIndex = PartnerId;
}

function toggleNavBar(){
    let NavList = document.getElementById("tedx");
    let NavButton = document.getElementsByClassName("navbar-toggler")[0];
    if(NavList.classList.contains("show")){
        NavList.classList.remove("show");
        NavButton.classList.add("collapsed");
    }
    else{
        NavList.classList.add("show");
        NavButton.classList.remove("collapsed");
    }
}