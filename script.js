// Form validation function
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password length
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        valid = false;
    }

    // If all validation passes, submit the form
    if (valid) {
        alert('Login successful');
        // Here you can submit the form or send the data via AJAX
        // Example: document.getElementById('loginForm').submit();
    }
}

// Attach form validation to the submit event
document.getElementById('loginForm').addEventListener('submit', validateForm);


// Function that runs when the user clicks the search button
function searchFunction() {
    var searchQuery = document.getElementById("searchInput").value.trim();

    if (searchQuery !== "") {
        alert("You searched for: " + searchQuery);
        // You can replace the alert with actual search logic (e.g., redirect to a search results page)
    } else {
        alert("Please enter a search query.");
    }
}

// Function that runs when the user clicks the search button
function searchFunction() {
    var searchQuery = document.getElementById("searchInput").value.trim();

    if (searchQuery !== "") {
        alert("You searched for: " + searchQuery);
        // You can replace the alert with actual search logic (e.g., redirect to a search results page)
    } else {
        alert("Please enter a search query.");
    }
}

// Function to toggle the cart popup visibility
function toggleCart() {
    const cartPopup = document.getElementById('cartPopup');
    // Toggle display of the cart popup
    if (cartPopup.style.display === 'none' || cartPopup.style.display === '') {
        cartPopup.style.display = 'block';
    } else {
        cartPopup.style.display = 'none';
    }
}

// Function that runs when the user clicks the search button
function searchFunction() {
    var searchQuery = document.getElementById("searchInput").value.trim();

    if (searchQuery !== "") {
        alert("You searched for: " + searchQuery);
        // You can replace the alert with actual search logic (e.g., redirect to a search results page)
    } else {
        alert("Please enter a search query.");
    }
}


let cart = [];
let selectedProductName = '';
let selectedProductPrice = 0;
let selectedProductImage = '';

// Function to add products to the cart
function addToCart(productName, productPrice, productImage) {
    const product = {
        name: productName,
        price: productPrice,
        image: productImage
    };
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    const totalPriceSpan = document.getElementById("totalPrice");
    cartItemsDiv.innerHTML = '';
    let total = 0;
    
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 50px;">
            <p>${product.name} - $${product.price}</p>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += product.price;
    });
    
    totalPriceSpan.textContent = total.toFixed(2);
}

// Show product details in a modal
function showDetails(productName, productPrice, productImage, productDescription) {
    selectedProductName = productName;
    selectedProductPrice = productPrice;
    selectedProductImage = productImage;

    document.getElementById("productName").textContent = productName;
    document.getElementById("productPrice").textContent = `Price: $${productPrice}`;
    document.getElementById("productImage").src = productImage;
    document.getElementById("productDescription").textContent = productDescription;
    document.getElementById("productModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Function to add selected product to cart from modal
function addToCartFromModal() {
    addToCart(selectedProductName, selectedProductPrice, selectedProductImage);
    closeModal();
}

// Toggle the cart display
function toggleCart() {
    const cartPopup = document.getElementById("cartPopup");
    if (cartPopup.style.display === "block") {
        cartPopup.style.display = "none";
    } else {
        cartPopup.style.display = "block";
    }
}

document.getElementById("subscribeButton").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput").value;
    
    // Check if the email field is not empty
    if (emailInput) {
        // Hide the form and show the success message
        document.getElementById("newsletter-form").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
    } else {
        alert("Please enter a valid email address.");
    }
});
