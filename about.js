let getLocal = JSON.parse(localStorage.getItem("oquvchilar"));
let star = document.querySelector(".star");
let teacher = document.querySelector(".teacher");
let coin = document.querySelector(".coin-text");
let exp = document.querySelector(".exp-text");
let name = document.querySelector(".ism");

star.innerHTML = getLocal.daraja;
teacher.innerHTML = getLocal.teacher;
coin.innerHTML = getLocal.coin;
exp.innerHTML = getLocal.exp;
name.innerHTML = getLocal.fullName;
