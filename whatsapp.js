var num ,msg;
function sendMessage()
{
    num=document.getElementById("number").value;
    msg=document.getElementById("text").value;
    try {
        window.open("https://wa.me/" + num + "?text=" + msg).focus();
    }
    catch(err){
        window.location.assign("https://wa.me/" + num + "?text=" + msg)
    }
}