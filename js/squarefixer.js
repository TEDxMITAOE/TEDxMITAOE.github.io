var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if(isSafari)
{
    var link = document.createElement('link'); 
  
    // set the attributes for link element
       link.rel = 'stylesheet'; 
  
    link.type = 'text/css';
  
    link.href = 'css/circleimg.css'; 

    // Get HTML head element to append 
    // link element to it 
    document.getElementsByTagName('HEAD')[0].appendChild(link); 
}
else{
    console.log("something else");
}