let cart = [];
let totalAmount = 0;

function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const totalAmountDisplay = document.getElementById('total-amount');

    // Add product to cart array
    cart.push({ name: productName, price: productPrice });
    totalAmount += productPrice;

    // Update cart display
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `;
    });

    // Update total amount
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
}
