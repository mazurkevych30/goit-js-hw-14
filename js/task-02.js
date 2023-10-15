const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

function createMarkup(arr) {
  const markup = arr.map(text => {
    const li = document.createElement("li");

    li.textContent = text;
    li.classList.add("item");
    
    return li;
  });

  list.append(...markup);
}

createMarkup(ingredients);