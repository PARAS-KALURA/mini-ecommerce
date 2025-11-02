
// 1. Select elements
const addCart = document.querySelectorAll(".btn");
const clearCart = document.getElementById("cBtn");
const totalCount = document.getElementById("totalCount");
const totalItems = document.getElementById("totalItems");
const cartText = document.getElementById("cartText");
const totalPrice = document.getElementById("totalPrice");


// 2. store product data
let cart = [];



// 3.Add to cart

addCart.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product = e.target.closest(".product-card");
      
      
    const name = product.querySelector("h2").textContent;
    const span = product.querySelector("span").textContent;
    const imgSrc = product.querySelector("img").src;
    const price = Number(span.replace("₹", "").trim());

 // add this product to the cart array
    cart.push({name,price});

    // update totals and UI
    console.log(cart);
    
    
    
    

    
    })
})


