"use strict";

// function register() {
//     var login = prompt("Введите логин");
//     var password;
//     if (login === "Админ") {
//         console.log("Правильный логин");
//         password = prompt("Введите пароль");
//         password_check(password);
//     }
//     else if (login) {
//         console.log("Неправильный логин");
//         alert("Неизвестный пользователь");
//     }
//
//     else {
//         console.log("Не вводим логин");
//         alert("Отменено");
//     }
//
//
// }
//
// function password_check(password) {
//     if (password === "Я главный") {
//         console.log("Правильный пароль");
//         alert("Здравствуйте!");
//     }
//     else if (password || password === "") {
//         console.log("неправильный пароль");
//         alert("Неверный пароль");
//     }
//     else {
//         console.log("Не вводим пароль");
//         alert("Отменено");
//     }
// }
//
// var ifLogin = confirm("Желаете пройти регистрацию на сайте?");
//
// if (ifLogin) {
//     console.log("Регистрируемся");
//     alert("Круто!");
//     register();
// }
//
// else {
//     alert("Попробуй ещё раз");
//     console.log("Не регистрируемся");
// }

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

// function drawing(event) {
//     console.log("drawing...");
//     if (likes_amount === 0)
//         return;
//
//
//
//     var newthing = document.createElement("p");
//     document.getElementById("all_products").appendChild(newthing);
//
//     var X = event.clientX;
//     var Y = event.clientY;
//
//     newthing.style.position = "fixed";
//     newthing.style.left = X + "px";
//     newthing.style.top = Y + "px";
//
//     newthing.innerHTML = "❤";
//
//
// }

var likes_amount = 0;

var submit_button = document.getElementById("send_button");

if (submit_button) {

    submit_button.disabled = true;

    let captcha = {
        answer: {},

        startCaptcha() {
            captcha.lettersCaptcha();
            if (!isEmpty(captcha.answer) && captcha.answer.first_answer === captcha.right_answer1) {
                submit_button.disabled = false;
            }

            else {
                captcha.numbersCaptcha();
                if (captcha.check()) {
                    submit_button.disabled = false;
                }
                else {
                    alert("Ошибка");
                }
            }
        },

        lettersCaptcha() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            this.right_answer1 = '';
            for (let i = 0; i < 6; i++) {
                this.right_answer1 += chars[Math.floor(Math.random() * chars.length)];
            }

            let answer = prompt(this.right_answer1);
            if (answer && answer !== '')
                this.answer.first_answer = answer;
        },

        numbersCaptcha() {
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);
            this.right_answer2 = num1 + ' + ' + num2;

            let answer = prompt(this.right_answer2);
            if (answer && answer !== '')
                this.answer.second_answer = answer;
        },

        check() {
            const nums = captcha.right_answer2.split(' + ');
            if (this.answer.second_answer) {
                return this.answer.second_answer === String(Number(nums[0]) + Number(nums[1]));
            } else {
                return false;
            }
        },
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }



    var captcha_button = document.createElement("button");
    document.getElementById("agreed1").appendChild(captcha_button);

    captcha_button.innerHTML = "Captcha";
    captcha_button.style.position = "relative";
    captcha_button.style.display = "block";
    captcha_button.addEventListener('click', captcha.startCaptcha);

}





function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        let input = prompt('Сколько добавить?');

        if(input !== null && input !== '' && String(Number(input)) === input) {
            this.value = Number(this.value) + Number(input);
        }
        else {
            alert('Ошибка');
        }

        alert(this.value);
    };

}

let bin = new Accumulator(1);


var devs = document.getElementsByClassName('Developers')[0];

if (devs) {
    var bin_button = document.createElement("button");

    devs.appendChild(bin_button);

    bin_button.innerHTML = "Добавить в корзину";
    bin_button.style.position = "absolute";
    bin_button.addEventListener('click', bin.read);
}



var products = [];
for (let obj in document.getElementsByClassName("cpu")) {
    products.push(obj);
}

function show_cart() {
    console.log("click");
    let card_content = document.getElementById("cart-content");

    if (card_content.style.display === "none")
        card_content.style.display = "block";
    else
        card_content.style.display = "none";
}

document.getElementById("cart-img").addEventListener('click', show_cart);
