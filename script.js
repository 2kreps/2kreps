let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Lisätty ostoskoriin");
}

const list = document.getElementById("cart-items");
const total = document.getElementById("total");

if (list) {
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} – €${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = "Yhteensä: €" + sum;
}
