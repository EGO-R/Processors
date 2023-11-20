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

var ifLike = false;
var ifDislike = false;
function like_button(element) {
    if (element.style.color === 'white') {
        element.style.color = 'red';
        ifLike = true;
    }
    else {
        element.style.color = 'white';
        ifDislike = true;
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





// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = () => {
//         let input = prompt('Сколько добавить?');

//         if(input !== null && input !== '' && String(Number(input)) === input) {
//             this.value = Number(this.value) + Number(input);
//         }
//         else {
//             alert('Ошибка');
//         }

//         alert(this.value);
//     };

// }

// let bin = new Accumulator(1);


// var devs = document.getElementsByClassName('Developers')[0];

// if (devs) {
//     var bin_button = document.createElement("button");

//     devs.appendChild(bin_button);

//     bin_button.innerHTML = "Добавить в корзину";
//     bin_button.style.position = "absolute";
//     bin_button.addEventListener('click', bin.read);
// }

function filter() {
    console.log("filtering");
    let value_from = document.getElementById("filter_from").value;
    let value_to = document.getElementById("filter_to").value;

    if (!(value_from === String(Number(value_from))) && !(value_to === String(Number(value_to))) )
        return;
    let result = content.filter(item => {
        let price = item.price * item.amount;
        let ifValue_from = (value_from === String(Number(value_from)));
        let ifValue_to = (value_to === String(Number(value_to)));

        return (ifValue_from && price >= Number(value_from) || !ifValue_from) && 
        (ifValue_to && price <= Number(value_to) || !ifValue_to);
    })

    return result;
}


document.getElementById("filter_from").addEventListener('input', render_cart);
document.getElementById("filter_to").addEventListener('input', render_cart);


function recount_cart_summary() {
    let arr = filter();
    let sum = 0;
    for (let obj of arr) 
        sum += obj.amount * obj.price;
    
    document.getElementById("cart_summary").innerHTML = "Итог: " + String(sum);
}

function show_cart() {
    let card_content = document.getElementById("cart-content");

    if (card_content.style.display === "none")
        card_content.style.display = "block";
    else
        card_content.style.display = "none";
}

function Cart_obj(obj) {
    this.parent_obj = obj;
    this.cart_element = create_element(obj);
    this.price = Number(obj.getElementsByClassName("price")[0].innerHTML);
    this.amount = 1;

    

    this.decrease = () => {
        if (this.amount > 1) {
            this.amount--;
            this.cart_element.getElementsByClassName("cart-amount")[0].innerHTML = String(this.amount);
            this.cart_element.getElementsByClassName("cart-price")[0].innerHTML = String(this.amount * this.price);
            recount_cart_summary();
        }
        
    }
    
    this.increase = () => {
        this.amount++;
        this.cart_element.getElementsByClassName("cart-amount")[0].innerHTML = String(this.amount);
        this.cart_element.getElementsByClassName("cart-price")[0].innerHTML = String(this.amount * this.price);
        recount_cart_summary();
    }
}


var content = [];


function create_element(obj) {
    let new_obj = document.createElement("div");
    let new_name = document.createElement("p");
    let new_price = document.createElement("p");
    let new_bin = document.createElement("img");
    let new_subtract = document.createElement("button");
    let new_amount = document.createElement("p");
    let new_add = document.createElement("button");

    new_obj.appendChild(new_name);
    new_obj.appendChild(new_price);
    new_obj.appendChild(new_bin);
    new_obj.appendChild(new_subtract);
    new_obj.appendChild(new_amount);
    new_obj.appendChild(new_add);

    new_obj.classList.add("cart-element");
    new_name.classList.add("cart-product");
    new_price.classList.add("cart-price");
    new_bin.classList.add("cart-delete");
    new_subtract.classList.add("cart-subtract");
    new_amount.classList.add("cart-amount");
    new_add.classList.add("cart-add");
    
    new_name.innerHTML = obj.getElementsByClassName("product_name")[0].innerHTML;
    new_price.innerHTML = obj.getElementsByClassName("price")[0].innerHTML;
    new_bin.src = "Images/bin.png";
    new_bin.addEventListener('click', element => {
        let index = -1;

        for (let i = 0; i < content.length; i++) {
            if (content[i].cart_element === element.target.parentNode)
                index = i;
        }
        
        ifDislike = true;
        content[index].parent_obj.getElementsByClassName("favourite")[0].click();
    });
    new_subtract.innerHTML = "-";
    new_amount.innerHTML = "1";
    new_add.innerHTML = "+";
    

    return new_obj;

}

function render_cart() {
    let arr = filter();
    let parent = document.getElementById("cart-content");
    let old_content = Array.from(parent.getElementsByClassName("cart-element"));
    
    for (let obj of old_content) {
        parent.removeChild(obj);
    }

    for (let obj of arr) {
        parent.insertBefore(obj.cart_element, parent.getElementsByClassName("cart_footer")[0]);
    }
    recount_cart_summary();
}

function add_to_cart() {
    let like = this.getElementsByClassName("favourite")[0];
    if (ifLike) {
        let cart_obj = new Cart_obj(this);
        cart_obj.cart_element.getElementsByClassName("cart-subtract")[0].addEventListener('click', cart_obj.decrease);
        cart_obj.cart_element.getElementsByClassName("cart-add")[0].addEventListener('click', cart_obj.increase);
        content.push(cart_obj);
        render_cart();
        ifLike = false;
    }

    else if(ifDislike) {
        let index = -1;
        for (let i = 0; i < content.length; i++) {
            if (content[i].parent_obj === this)
                index = i;
        }
        
        content.splice(index, 1);
        render_cart();
        
        
        ifDislike = false;
    }
        
    
}
document.getElementById("cart-img").addEventListener('click', show_cart);

var cart = document.getElementById("cart-content");

var products = document.getElementsByClassName("cpu");

if (products) {
    for (let obj of products) {
        obj.addEventListener('click', add_to_cart);
    }

}



