
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
    console.log(product);

    const name = product.querySelector("h2").textContent;
    const priceText = product.querySelector("span").textContent;
    const price = Number(priceText.replace("₹","").trim());

    cart.push({name,price});
    updateCartDisplay();
  })
})

function updateCartDisplay() {
  // calculate total price using replace();
 
  const total = cart.reduce((sum,item) => sum + item.price,0);
  

  // update counts and price on UI
  totalCount.textContent = cart.length; // top cart
  totalItems.textContent = `Total items: ${cart.length}`;
  totalPrice.textContent = `Total price: ${total.toFixed(2)}`;
  console.log(cart);

  // show message based on cart status

  cartText.textContent = 
  cart.length === 0? "Your card is empty": "Items added to cart";
}

clearCart.addEventListener("click", () => {
cart = []
updateCartDisplay();
})

