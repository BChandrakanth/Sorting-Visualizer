var a_input=document.getElementById("arrayInput");
var a_speed=document.getElementById("speedInput");
var arraG=document.getElementById("generateArray");
var cont=document.getElementById("arrayContainer");
var algos=document.querySelectorAll(".algorithms button");
var div_sizes=[];
var divs=[];
var a_size=a_input.value;
var margin_size;
arraG.addEventListener("click",GenerateArray);
a_input.addEventListener("click",UpdateArray);
function GenerateArray(){
    cont.innerHTML="";
    for(let i=0; i<a_size; i++){
        div_sizes[i]=Math.floor(Math.random() * 0.5*(a_input.max - a_input.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/a_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function UpdateArray(){
    a_size=a_input.value;
    GenerateArray();
}
window.onload=UpdateArray();
for(var i=0;i<algos.length;i++)
{
    algos[i].addEventListener("click",runalgo);
}
function disable_butt() {
    for(var i=0; i<algos.length; i++){
        algos[i].classList=[];
        algos[i].classList.add("butt_locked");
        a_input.disabled=true;
        algos[i].disabled=true;
        a_speed.disabled=true;
        arraG.disabled=true;
    }
}

function runalgo() {
    disable_butt();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Merge":Merge();
                        break;
        case "Heap":Heap();
                        break;
    }
}