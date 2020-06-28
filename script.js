const body = document.querySelector('body')
const chessbox = document.createElement('div');
chessbox.classList.add('chessBox');
body.appendChild(chessbox);

let boxes =[];
for(let i=0;i<64;i++){
    boxes[i] = document.createElement('div');
    boxes[i].classList.add('boxes');
    boxes[i].setAttribute('id',i);
    chessbox.appendChild(boxes[i])
}
//styling colors for the boxes
for(let j=0;j<7;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}

for(let j=9;j<16;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}
for(let j=16;j<23;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}
for(let j=25;j<33;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}

for(let j=32;j<=39;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}
for(let j=41;j<=47;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}
for(let j=48;j<=55;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}
for(let j=57;j<=64;j+=2)
{
    document.getElementById(j).setAttribute('style','background-color: green')
}

//placing soilders
for(let s = 8;s<=15;s++)
{
    document.getElementById(s).innerHTML = '<i class="fas fa-chess-pawn"></i>'
}

for(let s = 48;s<=55;s++)
{
    document.getElementById(s).innerHTML = '<i class="fas fa-chess-pawn" style="color:wheat"></i>'
}

for(let k=0;k<boxes.length;k++)
{
   if(k == document.getElementById(0).id || k== document.getElementById(7).id)
   {
       document.getElementById(k).innerHTML = '<i class="fas fa-chess-rook"></i>'
   }
   if(k== document.getElementById(56).id || k== document.getElementById(63).id)
   {
    document.getElementById(k).innerHTML = '<i class="fas fa-chess-rook" style="color:wheat"></i>'
   }
   if(k== document.getElementById(1).id || k == document.getElementById(6).id)
   {
       document.getElementById(k).innerHTML = '<i class="fas fa-chess-knight"></i>'
   }
   if(k== document.getElementById(57).id || k == document.getElementById(62).id)
   {
       document.getElementById(k).innerHTML = '<i class="fas fa-chess-knight" style="color:Wheat"></i>'
   }
   if(k == document.getElementById(2).id || k == document.getElementById(5).id)
   {
       document.getElementById(k).innerHTML = '<i class="fas fa-chess-bishop"></i>'
   }
   if(k == document.getElementById(58).id || k == document.getElementById(61).id)
   {
       document.getElementById(k).innerHTML = '<i class="fas fa-chess-bishop" style="color:wheat"></i>'
   }
   if(k == document.getElementById(3).id)
   {
       document.getElementById(k).innerHTML = '<i class="fas fa-chess-queen"></i>'
   }
   if(k == document.getElementById(59).id)
   {
    document.getElementById(k).innerHTML = '<i class="fas fa-chess-queen" style="color:wheat"></i>'
   }
   if(k == document.getElementById(4).id)
   {
    document.getElementById(k).innerHTML = '<i class="fas fa-chess-king"></i>'
   }
   if(k == document.getElementById(60).id)
   {
    document.getElementById(k).innerHTML = '<i class="fas fa-chess-king" style="color:wheat"></i>'
   }
}
const soilders  = () =>  boxes.filter((b)=> b.innerHTML === '<i class="fas fa-chess-pawn"></i>')

const clickFn = function(e){
   let temp = e.target.innerHTML;
   const empty = () => boxes.filter((q)=> q.innerHTML == "")

   const click = function(el){
       el.target.innerHTML = temp;
       e.target.innerHTML = "";
   }
   const Events = () => empty().forEach( s => s.addEventListener('click', click))
   Events();
   disableListeners();
}



const EventListeners = () => soilders().forEach( s => s.addEventListener('click', clickFn))
EventListeners()
const disableListeners = () => soilders().forEach( s => s.removeEventListener('click', clickFn))





const Whitesoilders =  boxes.filter((b)=> b.innerHTML === '<i class="fas fa-chess-pawn" style="color:wheat"></i>')
console.log("white soilders",Whitesoilders.length)