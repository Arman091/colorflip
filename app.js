

const hex = [0, 1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const thecolor = document.querySelector('.thecolor');
btn.addEventListener('click', function(){
 let colorhex="#";
 for(i=0;i<6;i++){
     var rando = hex[getRandom()];                colorhex += rando;
     
 }
  document.body.style.backgroundColor = colorhex;
  thecolor.textContent = colorhex;
                              
})

function getRandom() {
    var rand = Math.floor(Math.random()*hex.length);   return rand;                    
}