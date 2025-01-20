let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let uträkning_div = document.querySelector(".uträkning");
let body = document.querySelector("body");

let answer_element = document.querySelector("#answer");

let n1;
let n2;


let answer = 0;

function Plus()
{
   n1= parseInt(num1.value);
   n2= parseInt(num2.value);

   answer = n1 + n2;
   answer_element.value = answer;

   uträkning_div.innerHTML = "";
   let h2 = document.createElement("h2");
   h2.textContent = num1.value + " + " + num2.value + " = " + answer;
   console.log(h2.value);
   uträkning_div.appendChild(h2);
}
function Minus()
{
   n1= parseInt(num1.value);
   n2= parseInt(num2.value);
   answer = n1 - n2;
   answer_element.value = answer;

   uträkning_div.innerHTML = "";
   let h2 = document.createElement("h2");
   h2.textContent = num1.value + " - " + num2.value + " = " + answer;
   console.log(h2.value);
   uträkning_div.appendChild(h2);

}
function Multi()
{
   n1= parseInt(num1.value);
   n2= parseInt(num2.value);

   answer = n1 * n2;
   answer_element.value = answer;

   uträkning_div.innerHTML = "";
   let h2 = document.createElement("h2");
   h2.textContent = num1.value + " X " + num2.value + " = " + answer;
   console.log(h2.value);
   uträkning_div.appendChild(h2);

}
function Divide()
{
   n1= parseInt(num1.value);
   n2= parseInt(num2.value);

   answer = n1 / n2;
   answer_element.value = answer;

   uträkning_div.innerHTML = "";
   let h2 = document.createElement("h2");
   h2.textContent = num1.value + " / " + num2.value + " = " + answer;
   console.log(h2.value);
   uträkning_div.appendChild(h2);

}



