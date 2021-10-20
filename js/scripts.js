let PreviousSpeakerCardIndex = 1;
function displaySpeaker(SpeakerId){
    let element = document.getElementById(PreviousSpeakerCardIndex);
    element.classList.replace("speaker-card-active","speaker-card");
    element = document.getElementById(SpeakerId);
    element.classList.replace("speaker-card","speaker-card-active");
    PreviousSpeakerCardIndex = SpeakerId;
}