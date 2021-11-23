var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if(isSafari)
{
    console.log("safari");
}
else{
    console.log("something else");
}