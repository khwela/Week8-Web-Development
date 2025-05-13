// This file contains JavaScript functionality for the Furni.shop website.
// It includes interactivity for adding items to the cart, updating the cart total, and handling navigation.

let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    console.log(`Adding ${itemName} to cart for $${itemPrice}`);
    // Check if the item is already in the cart
    // Add item to the cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update the total price
    totalPrice += itemPrice;

    // Update the cart display
  
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart list
    cartList.innerHTML = '';

    // Add each item in the cart to the list
    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}
