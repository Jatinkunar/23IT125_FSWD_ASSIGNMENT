// Shopping Cart System

// Product array
let cart = [];

// Function to add a new product
const addProduct = (productName, price, quantity) => {
  cart.push({ productName, price, quantity });
};

// Function to calculate total cost
const calculateTotal = () => {
  return cart.reduce((total, { price, quantity }) => total + price * quantity, 0);
};

// Function to remove a product by name
const removeProduct = (productName) => {
  cart = cart.filter(product => product.productName !== productName);
};

// Function to display the cart summary
const displayCart = () => {
  cart.forEach(({ productName, price, quantity }) => {
    console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
  });
};

// Example Usage
addProduct('Apple', 1.5, 4);
addProduct('Banana', 0.5, 6);
addProduct('Orange', 1.0, 3);

displayCart();
console.log(`Total Cost: $${calculateTotal()}`);

removeProduct('Banana');
displayCart();
console.log(`Total Cost: $${calculateTotal()}`);