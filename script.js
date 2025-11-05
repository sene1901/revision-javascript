let cart = [];
let total = 0;


function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.name} - ${item.price}€
      <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">🗑️</button>
    `;
    cartList.appendChild(li);
  });

  totalPrice.textContent = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

document.getElementById("validateBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }
  document.getElementById("checkoutForm").style.display = "block";
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  alert(`Merci ${name}, votre commande a été validée !`);

  cart = [];
  total = 0;
  updateCart();
  e.target.reset();
  document.getElementById("checkoutForm").style.display = "none";
});
