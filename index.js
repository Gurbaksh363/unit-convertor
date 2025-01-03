const convertBtn= document.getElementById("convert-btn");
const inputBtn = document.getElementById("convert-input");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

let conversions ={
    length: {factor: 3.281, units: ["meters", "feets"]},
    volume: {factor: 0.264, units: ["liter", "gallons"]},
    mass: {factor: 2.204, units: ["kilos", "pound"]}
}

convertBtn.addEventListener("click", function(){
    const num = parseFloat(inputBtn.value);
    if (isNaN(num)){
        return
    }
    function generateSentence(factor, [unit1, unit2]){
        return `${num} ${unit1} = ${(num*factor).toFixed(3)} ${unit2} | ${num} ${unit2} = ${(num/factor).toFixed(3)} ${unit1}`
    }
    
    lengthEl.textContent = generateSentence(conversions.length.factor, conversions.length.units)
    volumeEl.textContent = generateSentence(conversions.volume.factor, conversions.volume.units)
    massEl.textContent = generateSentence(conversions.mass.factor, conversions.mass.units)
})
