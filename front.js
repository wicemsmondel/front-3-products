//variables table declaration
var products = [
    { name: 'bag', price: 39, image: "https://tinyurl.com/y3f7v79p", like: true },
    { name: 't-shirt', price: 15, image: "https://tinyurl.com/y5fc3vdz", like: false },
    { name: 'shoes', price: 59, image: "https://tinyurl.com/yy3z4f7h", like: false }
];
//DOM container declaration
var container = document.getElementById('container');
//function create elements
products.forEach(function (product) {
    //div creation and declaration
    var divProduct = document.createElement('div');
    divProduct.setAttribute('id', product.name);
    container.appendChild(divProduct);
    //h1 name creation and declaration
    var nameProduct = document.createElement('h1');
    divProduct.appendChild(nameProduct);
    nameProduct.innerHTML = product.name;
    //img 
    var imageProduct = document.createElement('img');
    divProduct.appendChild(imageProduct);
    imageProduct.setAttribute('src', product.image);

    var divBottom = document.createElement('div');
    divBottom.setAttribute('class', 'bottom');
    divProduct.appendChild(divBottom);
    //span price creation and declaration
    var priceProduct = document.createElement('span');
    divBottom.appendChild(priceProduct);
    priceProduct.innerHTML = product.price + "€";
    //button creation and declaration
    var buyButton = document.createElement("button");
    divBottom.appendChild(buyButton);
    buyButton.innerHTML = "BUY";
    //button event listener
    buyButton.addEventListener("click", function () {
        alert("Adding to cart " + product.name + " " + product.price + "€");
    });
    //icon creation and declaration
    var likeIcon = document.createElement('i');
    likeIcon.setAttribute('class', "far fa-heart");
    divBottom.appendChild(likeIcon);
    function iconLike() {
        likeIcon.setAttribute('class', 'fas fa-heart');
        document.getElementsByTagName('i').className = 'fas fa-heart';
    }
    likeIcon.addEventListener('click', function () {
        iconLike();
    });
});


// $(document).ready(function () {
//     if (jQuery) {
//         alert("jQuery");
//     } else {
//         alert("No jquery");
//     }
// });
console.log($);

// EXEMPLE FAIT AVEC L'API SWAPI Star Wars--------------
// $.get('https://swapi.co/api/people/', function (response) {

//     response.results.forEach(function (personnage) {
//         const element = document.createElement('div');
//         element.innerHTML = personnage.name;
//         document.body.appendChild(element);
//     });

// });
// //-----------------------------------------------------

$.get('http://localhost:3000/', function (response, error) {
    console.log(response);
});