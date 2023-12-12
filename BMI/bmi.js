const form = document.querySelector('form')
// this use case will give an empty value
// const height =parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(event){
event.preventDefault();

const height =parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#weight').value)
const results =document.querySelector('#results')

if (height===''|| height < 0|| isNaN(height)) {
   results.innerHTML = `PLEASE GIVE A VALID HEIGHT  ${height}`;
}
 else if (weight===''|| weight < 0|| isNaN(weight)) {
   results.innerHTML = `PLEASE GIVE A VALID WEIGHT ${weight}`;
}
else{
   const BMI =(weight/((height*weight)/10000)).toFixed(2)
//    showing result
  results.innerHTML = `<span>${BMI}</span>`
}
const BMI =(weight/((height*weight)/10000)).toFixed(2)
const  Empty= document.querySelector('.Empty')
// console.log(BMI)
 if(BMI<18.6){
  Empty.innerHTML= `<span>You Are Underweight Since Your BMI Is ${BMI}</span>`
}else if(BMI>19&&BMI<25){
 Empty.innerHTML = `<span>You Are Neither Underweight nor Overweight Since Your BMI is ${BMI}</span>`
}else{
    Empty.innerHTML = `<span>You Are Overweight Since Your BMI is ${BMI}</span>`
}

});