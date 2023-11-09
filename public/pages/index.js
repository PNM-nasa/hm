
var player = document.getElementById("player");
var jump = document.getElementById("control");

var height = 20;
var v = 0;

jump.addEventListener("click",()=>{

  v = 4;
  player.style.bottom=`${height}px`;
})

setInterval(function(){
  v-=0.15;
  height+=v;
  if(height<=0){
    v=0;
    height=0;
  }
  player.style.bottom=`${height}px`;
}, 10)
