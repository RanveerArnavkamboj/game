let newgame=document.querySelector(".newgame")
let con=document.querySelector(".con")
let main=document.querySelector("main")
let btns=document.querySelectorAll(".btn")
let res=document.querySelector(".res")
let resetbtn=document.querySelector(".reset")
let turn0=true
let wp=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
resetbtn.addEventListener("click",()=>{
  abled()
})
newgame.addEventListener("click",()=>{
  abled()
  con.classList.add("connone")
  main.classList.remove("maincss")
})
btns.forEach(box =>{
  box.addEventListener("click",()=>{
    if(turn0===true){
      box.innerText="0"
      box.disabled=true
      turn0=false
    }
    else{
      box.innerText="\u00D7"
      box.disabled=true
      turn0=true 
    }
    patterncheck()
  })
})
function patterncheck(){
for (let pattern of wp){
let place1=btns[pattern[0]]
let place2=btns[pattern[1]]
let place3=btns[pattern[2]]
if (place1.innerText!="" && place2.innerText!="" && place3.innerText!=""){
if (place1.innerText==place2.innerText&&place2.innerText==place3.innerText){
  main.classList.add("maincss")
  res.textContent=`Congratulations \u{1F389} player ${place1.textContent} is winner`
  res.classList.add("rescss")
  con.classList.remove("connone")
  con.classList.add("conafter")
}
}
}
}
function  disabled(){
  btns.forEach(box =>{
    box.disabled=true
  })
}
function  abled(){
  btns.forEach(box =>{
    box.disabled=false
    box.textContent=""
  })
    }
