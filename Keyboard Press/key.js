const  insert =document.querySelector('#keypressed');
window.addEventListener('keydown', (e)=>{
    if(e.key===" "){
        insert.innerHTML = "SpaceBar"
    }else{
        insert.innerHTML = e.key;
    }
 
})