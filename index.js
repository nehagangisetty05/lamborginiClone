
function msgpopup(){
    document.querySelector(".msg").style.display = "flex";
    document.querySelector(".msg").style.animation = "msgbox 1s ease both"
}

function msgpopdown(){
    document.querySelector(".msg").style.display = "none";
    document.querySelector(".msg").style.animation = "msgboxout 1s ease both"
}

function searchpopup(){
    document.querySelector(".searchContainer").style.display = "flex";
    document.querySelector(".searchContainer").animation = "searchanime 1s ease both"
}

function searchout(){
    document.querySelector(".searchContainer").style.display = "none";
}