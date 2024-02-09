


const sec = document.querySelector('.second-hand')
const mins = document.querySelector('.min-hand')
const hour = document.querySelector('.hour-hand')

function time(){
  const time = new Date();
  const seconds = time.getSeconds();
  const secondsdegree  = ((seconds / 60 )*360)+90;
  sec.textContent =`SECONDS=${seconds}`;
  sec.style.transform = `rotate(${secondsdegree}deg)`

  const minutes = time.getMinutes();
  const minutesdegree  = ((minutes / 60 )*360)+90;
  mins.textContent =`MINUTES=${minutes}`;;
  mins.style.transform = `rotate(${minutesdegree}deg)`

  const hours = time.getHours();
  const hoursdegree  = ((hours /12)*360)+90;
  hour.textContent = `HOURS=${hours}`;;
  hour.style.transform = `rotate(${hoursdegree}deg)`
}

setInterval(time ,1000)


