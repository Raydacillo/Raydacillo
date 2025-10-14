
var mynode = document.getElementById("Profile")

function change() {
    var name = mynode.children[1].children[0].value;
    var age = mynode.children[2].children[0].value;
   var birthday = mynode.children[3].children[0].value;

var output = "Hello, my name is " + name + ". I am " + age + " years old and my birthday is on " + birthday + ".";
document.getElementById("outputtext").innerText = output; 
}