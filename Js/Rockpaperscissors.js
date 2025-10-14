
var selectinput = document.getElementById("choices");
var player = document.getElementById("player");

function Changepic(value){
if (value == "1"){
    player.src = "https://tse4.mm.bing.net/th/id/OIP.s2b0MSncSFghN1mBYz2VwAHaEP?pid=Api&P=0&h=180"
}else if (value == "2"){
    player.src = "https://tse3.mm.bing.net/th/id/OIP.eIcd9wEhpoeZH2ZWoQShiAHaHa?pid=Api&P=0&h=180"
}else if (value == "3"){
        player.src = "https://tse2.mm.bing.net/th/id/OIP.FEGRR3hsSdLCQMmW32fBoQHaDy?pid=Api&P=0&h=180"
    }
} 

function play(){
    var computer = document.getElementById("computer");
    var result = document.getElementById("result");
    var playerchoice = selectinput.value;
    var computerchoice = Math.floor(Math.random() * 3) + 1;
    if (computerchoice == 1){
        computer.src = "https://tse4.mm.bing.net/th/id/OIP.s2b0MSncSFghN1mBYz2VwAHaEP?pid=Api&P=0&h=180"
    }else if (computerchoice == 2){
        computer.src = "https://tse3.mm.bing.net/th/id/OIP.eIcd9wEhpoeZH2ZWoQShiAHaHa?pid=Api&P=0&h=180"
    }else if (computerchoice == 3){
        computer.src = "https://tse2.mm.bing.net/th/id/OIP.FEGRR3hsSdLCQMmW32fBoQHaDy?pid=Api&P=0&h=180"

    }if (playerchoice == computerchoice){
        result.innerHTML = "It's a Tie!";
    }else if ((playerchoice == 1 && computerchoice == 3) || (playerchoice == 2 && computerchoice == 1) || (playerchoice == 3 && computerchoice == 2)){
        result.innerHTML = "You Win!";


    }else {
        result.innerHTML = "You Lose!";
    }
}
