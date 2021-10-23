let PreviousSpeakerCardIndex = 1;
function displaySpeaker(SpeakerId){
    let element = document.getElementById(PreviousSpeakerCardIndex);
    element.classList.replace("speaker-card-active","speaker-card");
    element = document.getElementById(SpeakerId);
    element.classList.replace("speaker-card","speaker-card-active");
    PreviousSpeakerCardIndex = SpeakerId;
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