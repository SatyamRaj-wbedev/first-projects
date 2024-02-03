window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    // audio.play();
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keys.classList.add('playing');
    
})
function removeTransition(e){
    if(!e.propertyName)return;
    this.classList.remove('playing')
     
}


const keys = document.querySelectorAll('.key');
keys.forEach(item =>{
    item.addEventListener('transitionend',removeTransition)
})
