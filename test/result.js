let v = sessionStorage.getItem("score");
let t = sessionStorage.getItem("total");
console.log(t)
let right = document.getElementById('right');
// let wrong = document.getElementById('wrong');
let total = document.getElementById('total');
let percentage = document.getElementById('percentage');


right.innerHTML = v ;
// wrong.innerHTML = t - v;
total.innerHTML = t;
percentage.innerHTML =Math.round(v*100/t)+"%";
