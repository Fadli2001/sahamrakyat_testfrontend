document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.querySelector('#countries');  

  fetch('https://restcountries.com/v3.1/all').then(res => {
    return res.json();
  }).then(data => {
    let output = "";    
    output += "<option disabled selected>Select Country/loction</option>";
    data.forEach(country => {            
      
      output += `      
      <option id="country" value="${country.name.common}">${country.name.common}</option>`;
    })                           
    selectDrop.innerHTML = output;
  }).catch(err => {
    console.log(err);
  })


});