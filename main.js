const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;

};

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((ingredient) => {
        // domString += `<h2>${ingredient.item}</h2>`
        domString += `<div class="card col-3">`
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${ingredient.item}</h5>`
        // domString += `<a href="#" class="btn btn-primary">Go somewhere</a>`
        domString += `</div>`
        domString += `</div>`
        
    });
   
    printToDom('ingredient-container', domString);
};

const addIngredient = (e) => {
    e.preventDefault();
    const inputText = inputIngredient.value;
    const newIngredient = {
        item: inputText
    };
    ingredients.push(newIngredient);
    console.log(inputText);
    domStringBuilder(ingredients);
    inputIngredient.value = '';
};

const eventListeners = () => {
   addButton.addEventListener('click', addIngredient);
};

const init = () => {
eventListeners()
};

init();