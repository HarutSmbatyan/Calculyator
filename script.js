const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons");
const span = document.querySelectorAll(".buttons > span");
const value = document.querySelector("#value");
const checkbox = document.querySelector(".checkbox");
checkbox.style.backgroundColor = "rgb(239, 240, 245)";

// alert(checkbox.style.backgroundColor);

checkbox.addEventListener("click", ()=>{
    console.log(checkbox.style.backgroundColor);
    if(checkbox.style.backgroundColor === "rgb(239, 240, 245)"){
        checkbox.style.backgroundColor = "rgb(70,70,70)";
        checkbox.style.boxShadow = "4px 1px 6px rgb(100,100,100), inset 4px 0px 5px rgb(229, 220, 225)";
        document.body.style.backgroundColor = "rgb(70,70,70)";
        calculator.style.backgroundColor = "rgb(70,70,70)";
        document.body.style.color = "rgb(250,250,250)";
    }
    else{
        checkbox.style.backgroundColor = "rgb(239, 240, 245)";
        checkbox.style.boxShadow = "2px 1px 2px #3a3737, inset 4px 0px 3px #ababab";
        document.body.style.backgroundColor = "#c1c1c5";
        calculator.style.backgroundColor = "rgb(240,240,240)";
        document.body.style.color = "rgb(50,50,50)";
    }
});
span.forEach((elem)=>{
    elem.addEventListener("click", function(evt){
        if(this.innerHTML === "=" || value.innerHTML.slice(length, length-1) === "="){
            value.innerHTML = eval(value.innerHTML);
        }else {
            if(this.innerHTML === "C"){
                value.innerHTML = "";
            }
            else if(this.innerHTML === '<i class="fa fa-backspace" aria-hidden="true"></i>'){
                value.innerHTML = value.innerHTML.slice(length, length-1);
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    });
});

document.addEventListener("keydown", function(evt){
    if(this.innerHTML === "=" || value.innerHTML.slice(length, length-1) === "="){
        value.innerHTML = eval(value.innerHTML);
    }
    if(evt.keyCode === 8){
        value.innerHTML = value.innerHTML.slice(length, length-1);
        span[1].style.boxShadow = "0px 0px 0px #fff";
    }
    if(value.innerHTML.length <= 13){
        if(evt.keyCode === 96 || evt.keyCode === 48){
            value.innerHTML += "0";
            span[15].style.boxShadow = "0px 0px 0px #fff";
        } 
        else if(evt.keyCode === 97 || evt.keyCode === 49){
            value.innerHTML += "1";
            span[12].style.boxShadow = "0px 0px 0px #fff";
        } 
        else if(evt.keyCode === 98 || evt.keyCode === 50){
            value.innerHTML += "2";
            span[13].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 99 || evt.keyCode === 51){
            value.innerHTML += "3";
            span[14].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 100 || evt.keyCode === 52){
            value.innerHTML += "4";
            span[8].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 101 || evt.keyCode === 53){
            value.innerHTML += "5";
            span[9].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 102 || evt.keyCode === 54){
            value.innerHTML += "6";
            span[10].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 103 || evt.keyCode === 55){
            value.innerHTML += "7";
            span[4].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 104 || evt.keyCode === 56){
            value.innerHTML += "8";
            span[5].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 105 || evt.keyCode === 57){
            value.innerHTML += "9";
            span[6].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 106){
            value.innerHTML += "*";
            span[3].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 107){
            value.innerHTML += "+";
            span[11].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 109 || evt.keyCode === 189){
            value.innerHTML += "-";
            span[7].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 110){
            value.innerHTML += ".";
            span[17].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 111){
            value.innerHTML += "/";
            span[2].style.boxShadow = "0px 0px 0px #fff";
        }
        else if(evt.keyCode === 67){
            value.innerHTML = "";
            span[0].style.boxShadow = "0px 0px 0px #fff";
        }
        else if((evt.keyCode === 13 || evt.keyCode === 187) && value.innerHTML !== ""){
            value.innerHTML = eval(value.innerHTML);
            span[18].style.boxShadow = "0px 0px 0px #fff";
        }
    }
});
document.addEventListener("keyup", function(){
    span.forEach(el => el.style.boxShadow = "-3px -3px 4px #fff, -3px -3px 5px #fff, 3px 3px 3px #ababab, 6px 6px 6px #ababab");
});