"use strict";

function register() {
    var login = prompt("Введите логин");
    var password;
    if (login === "Админ") {
        console.log("Правильный логин");
        password = prompt("Введите пароль");
        password_check(password);
    }
    else if (login) {
        console.log("Неправильный логин");
        alert("Неизвестный пользователь");
    }

    else {
        console.log("Не вводим логин");
        alert("Отменено");
    }


}

function password_check(password) {
    if (password === "Я главный") {
        console.log("Правильный пароль");
        alert("Здравствуйте!");
    }
    else if (password || password === "") {
        console.log("неправильный пароль");
        alert("Неверный пароль");
    }
    else {
        console.log("Не вводим пароль");
        alert("Отменено");
    }
}

var ifLogin = confirm("Желаете пройти регистрацию на сайте?");

if (ifLogin) {
    console.log("Регистрируемся");
    alert("Круто!");
    register();
}

else {
    alert("Попробуй ещё раз");
    console.log("Не регистрируемся");
}

function like_button(element) {
    console.log(element.style.color);
    if (element.style.color === 'white') {
        likes_amount++;
        element.style.color = 'red';
    }
    else {
        likes_amount--;
        element.style.color = 'white';
    }
}

var buttons = document.getElementsByClassName('favourite');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.color = 'white';
}

function drawing(event) {
    console.log("drawing...");
    if (likes_amount === 0)
        return;



    var newthing = document.createElement("p");
    document.getElementById("all_products").appendChild(newthing);

    var X = event.clientX;
    var Y = event.clientY;

    newthing.style.position = "fixed";
    newthing.style.left = X + "px";
    newthing.style.top = Y + "px";

    newthing.innerHTML = "❤";


}



var likes_amount = 0;
