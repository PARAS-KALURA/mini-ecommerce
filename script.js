const addbtn = document.querySelectorAll(".btn");
const cartBtn = document.getElementById("cBtn");
const cartBadge = document.getElementById("totalCount");


const cartContainer = document.querySelector(".cart-2");

const cartText = document.getElementById("cartText");
const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");




// 🛒 Part 2 — Store product data
// We’ll keep an array for the cart (like cart = ////[]).

let cart = [];




// ➕ Part 3 — Add to cart
// When you click “Add to Cart,” we’ll:
// Add that product to the array.

// Increase total count.

// Update total price.


// 🧠 Goal

// When you click any “Add to Cart” button:

// That product (name + price) gets added to the cart array.

// The total count increases.

// The total price updates in the cart section and badge.



addbtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest("product-card");
    })
})

let cats = [];








