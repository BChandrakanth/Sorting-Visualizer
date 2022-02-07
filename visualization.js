var speed=1000;

a_speed.addEventListener("input",visspeed);
function visspeed() {
    var arr_speed=a_speed.value;
    switch(parseInt(arr_speed)){
        case 1: speed=1;
                break;

        case 2: speed=10;
                break;

        case 3: speed=100;
                break;

        case 4: speed=1000;
                break;

        case 5: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(a_size/10)*speed);
}
var delay_time=10000/(Math.floor(a_size/10)*speed); //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/a_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algos.length;i++)
        {
            algos[i].classList=[];
            algos[i].classList.add("butt_unselected");

            algos[i].disabled=false;
            a_input.disabled=false;
            arraG.disabled=false;
            a_speed.disabled=false;
        }
    },c_delay+=delay_time);
}