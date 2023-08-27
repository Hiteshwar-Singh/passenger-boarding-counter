let saveEl = document.getElementById("save-el")
let count = 0
let logged = document.getElementById("count-el")


console.log(logged)
console.log(saveEl)
var zoom = document.getElementById("count-el")
function zoomin(){  
  zoom.style.transform = "scale(1.5)"
  zoom.style.transition = "0.3s"
}

function increment(){
  console.log("You Clicked Increment Button")
  count += 1
  logged.innerText = count
  console.log(count)
}


function save(){
  let countDash = + count +" - "
  saveEl.textContent  += countDash
  console.log(count)
  logged.innerText = 0
  count =0
  zoom.style.transform = "scale(1)"
  zoom.style.transition = "0.3s"
}
