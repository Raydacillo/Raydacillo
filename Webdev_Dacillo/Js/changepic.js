var selectinput = document.getElementById("pics");
var imgholder = document.getElementById("imgholder");

function Changepic(value){
if (value == "1"){
    imgholder.src = "/assets/jett.jpg"
}else if (value == "2"){
    imgholder.src = "raway.jpg"
}else if (value == "3"){
        imgholder.src = "phenix.jpg"
    }
} 