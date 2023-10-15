

const elements = {
    textInput: document.querySelector("#name-input"),
    textOutput: document.querySelector("#name-output"),
}

elements.textInput.addEventListener("input", hendlerInput)

function hendlerInput(evt) {

    const text = evt.currentTarget.value;
   
    if (!text) {
        elements.textOutput.textContent = "Anonymous";
        return;
    }
    
    elements.textOutput.textContent = text;
}