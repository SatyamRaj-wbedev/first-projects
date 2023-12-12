const buttons = document.querySelectorAll(".button")
// console.log(buttons)
const body = document.querySelector('body')
buttons.forEach((item)=>{
  // console.log(item)
  item.addEventListener('click', function(e){
   console.log(e)
   console.log(e.target)
   if(e.target.id==="grey"){
    body.style.backgroundColor = e.target.id;
    // body.style.color ="yellow"
   }
   else if(e.target.id==="cyan"){
    body.style.backgroundColor = e.target.id;
    // body.style.color="red"
   }else if(e.target.id==="yellow"){
    body.style.backgroundColor = e.target.id;
    // body.style.color = "green"
   }else(e.target.id==="purple")
    body.style.backgroundColor = e.target.id;
    // body.style.color =" white"
  })
})