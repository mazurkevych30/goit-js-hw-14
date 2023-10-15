

const div = document.querySelector("#counter");

const [decrement, counter, increment] = div.children;


let counterValue = 0;

decrement.addEventListener("click", onClick);
increment.addEventListener("click", onClick);

function onClick(event) {
   
    switch (event.currentTarget.textContent) {
        case "-1":
            counterValue -= 1;
            break;
        case "+1":
            counterValue += 1;      
    }

    counter.textContent = counterValue;
}