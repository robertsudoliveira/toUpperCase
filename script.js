

let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")

t1.onclick = nomeMaiusculo;
t2.onclick = nomeMaiusculo;
t3.onclick  = nomeMaiusculo;


function nomeMaiusculo(){
this.innerHTML = this.innerHTML.toUpperCase();
this.style.color="Blue"

}
