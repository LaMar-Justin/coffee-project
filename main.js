"use strict"

function renderCoffee(coffee) {
    var html = '<div class="col-6 py-3"><span><h3>' + coffee.name + '<small> ' + coffee.roast + '</small></h3></span></div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedRoastName = coffeeFilter.value.toUpperCase();
    var filteredCoffees = [];
    switch (selectedRoast) {
        case "all":
            coffeeListName(selectedRoastName, filteredCoffees);
            break;
        default:
            coffeeListRoast(selectedRoastName, selectedRoast, filteredCoffees);
            break;
    }
    lbody.innerHTML = renderCoffees(filteredCoffees);
}

function coffeeListName(selectedRoastName, filteredCoffees) {
    if (selectedRoastName !== "") {
        coffees.forEach(function (coffee) {
            if (coffee.name.toUpperCase().includes(selectedRoastName)) {
                filteredCoffees.push(coffee);
            }
        });
    } else {
        coffees.forEach(function (coffee) {
            filteredCoffees.push(coffee);
        });
    }
    return filteredCoffees;
}

function coffeeListRoast(selectedRoastName, selectedRoast, filteredCoffees) {
    if (selectedRoastName !== "") {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast && coffee.name.toUpperCase().includes(selectedRoastName)) {
                filteredCoffees.push(coffee);
            }
        });
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    return filteredCoffees;
}

function addCoffeeToArray(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var coffeeRoast =document.getElementById("roastAdd").value;
    var coffeeName = document.getElementById("coffeeAdd").value;
    var newCoffee = {id: (coffees.length - 1), name: coffeeName, roast: coffeeRoast};
    coffees.push(newCoffee);
    updateCoffees(e);
}
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var lbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var addCoffee = document.querySelector('#addCoffee');
var roastSelection = document.getElementById("roastSelection");
var coffeeFilter = document.getElementById("coffeeFilter");

lbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
addCoffee.addEventListener('click', addCoffeeToArray);
roastSelection.addEventListener('change', updateCoffees);
coffeeFilter.addEventListener('input', updateCoffees);

// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
