var mynode = document.querySelector("#div1");
var mynode2 = document.getElementById("div2");


function changecolor() {
    var thecolor = mynode.children[1].value;
    console.log(thecolor);
    mynode.children[0].style.color = thecolor;
}

 function addElement() {
    var thetext = mynode2.children[0].value;
    var newelement = document.createElement("h1");
    newelement.innerText = thetext;
    mynode2.appendChild(newelement);
    mynode2.children[3].style.color = thetext;
    console.log(mynode2);
}

    function remove() {
        var toberemoved = mynode2.children[3];
        mynode2.removeChild(toberemoved);
        console.log(mynode2);
    }