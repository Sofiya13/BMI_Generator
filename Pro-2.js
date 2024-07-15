
let form= document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
   let height =  parseInt(document.querySelector('#height').value)
   let weight =  parseInt(document.querySelector('#weight').value)
   let results =  document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Invalid input height ${height}`    
   } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Invalid input weight ${weight}`     
   }else{
    let bmi =( weight / (height * height/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.5){ 
        results.innerHTML += `<span>  You are in Underweight category</span>`
    } else if(bmi >= 18.5 && bmi <= 24.9){
        results.innerHTML += `<span>  You are in Normal weight category</span>`
    } else{
        results.innerHTML += `<span>  You are in Overweight category</span>`
    } 
}
})