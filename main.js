



"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col g-3 d-flex">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h3 class="">' + coffee.name + '</h3>';
    html += '<p class="p-2 text-secondary">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    /// renders search function
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

 function searchCoffees(e){
     e.preventDefault();
     let searching = document.getElementById("searching" ).value.toLowerCase();
     let searchCoffee = [];
     coffees.forEach(function (coffee){
         if(coffee.name.toLowerCase().includes(searching)){
             searchCoffee.push(coffee)
         }
         }
     );
     tbody.innerHTML = renderCoffees(searchCoffee);

}
/*searchCoffees();*/

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


let tbody = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let nameButton = document.querySelector("#name-search")
//   renders table data
tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
nameButton.addEventListener('click', searchCoffees);

