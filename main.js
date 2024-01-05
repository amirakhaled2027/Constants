//const = a , a variable that can't be chanhe once you assign them.


//In this case, it will be better if I use conast instead of leat declaring pi, to prevet it from being affected by any unnoticeable change by me or any other developer
// let pi = 3.14159;
//capitalizing constants is usually only done with primitive data type such as numbers and boolens, but reference data types such as strings don't narmally follow this rule
// const pi = 3.14159;
//let's comment the following code to use the text box instead of window prompt
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mybutton").onclick = function() {
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + " cm"; 
}


