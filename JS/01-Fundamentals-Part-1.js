/*
let country = "Brazil";
let continent = "South America";
let countryPopulation = "212.6 million";
console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population:", countryPopulation);
*/
function calculate() {
  let result = 0;
  const massPerson1 = document.getElementById("massPerson1").value;
  const heightPerson1 = document.getElementById("heightPerson1").value;
  const massPerson2 = document.getElementById("massPerson2").value;
  const heightPerson2 = document.getElementById("heightPerson2").value;

  //BMI = mass / height ** 2 = mass / (height * height)

  let person1BMI, person2BMI;
  person1BMI = massPerson1 / (heightPerson1 * heightPerson1);
  person2BMI = massPerson2 / (heightPerson2 * heightPerson2);

  if (person1BMI > person2BMI) {
    result = `Person 1 has Hight BMI  BMI: ${person1BMI}`;
  } else if (person1BMI < person2BMI) {
    result = `Person 2 has Hight BMI  BMI: ${peron2BMI}`;
  } else {
    result = `Person 1 and Person 2 has the same BMI  BMI:${person2BMI}`;
  }

  document.getElementById("result").innerHTML = result;
}
