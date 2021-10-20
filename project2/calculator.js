let total = 0;
let strbuffer = "0";
let operator = null;

function calculations() {
    const intBuffer = parseInt(strbuffer);
    if (operator === "+") {
        total += intBuffer;
    }
    if (operator === "-") {
        total -= intBuffer;
    }
    if (operator === "x") {
        total *= intBuffer;
    }
    if (operator === "÷") {
        total /= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer += value;
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        total = 0;
        strbuffer = "0";
        operator = null;
    }
    else if (symbol === "←") {
        strbuffer = strbuffer.substring(0, strbuffer.length-1);
    }
    else if (symbol === "=") {
        calculations();
        strbuffer =  total.toString();
        operator = null;
    }
    else {
        const intBuffer = parseInt(strbuffer);
        if (total === 0) {
            total = intBuffer;
        } else {
            calculations();
        }
        operator = symbol;
        strbuffer = "0";
    }
}

function setListeners() {
    let allbuttons = document.querySelectorAll(".buttons"); 
    for (item of allbuttons) {
        item.addEventListener("click", function(event) {buttonClicked(event.target.innerText)});
    }
}
setListeners();

function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) {
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerHTML = strbuffer;
}