 const clock = document.getElementById('clock')


 setInterval(()=>{
    const date =  new Date();
    let localtime = date.toLocaleTimeString()
    clock.innerHTML = `${localtime}`
 },1000)