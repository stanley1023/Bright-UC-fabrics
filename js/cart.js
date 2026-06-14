const cartContainer =
document.getElementById("cartContainer");

const totalAmount =
document.getElementById("totalAmount");

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

renderCart();

function renderCart(){

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((product,index)=>{

    let priceNumber =
    parseInt(
      product.price
      .replace("#","")
      .replace(/,/g,"")
    );

    total += priceNumber;

    cartContainer.innerHTML += `
    
    <div class="cart-item">

      <img src="${product.image}">

      <div>

        <h3>${product.name}</h3>

        <p>${product.price}</p>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>

    </div>

    `;
  });

  totalAmount.textContent =
  "Total: ₦" +
  total.toLocaleString();
}


// remove item
function removeItem(index){

  cart.splice(index,1);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  renderCart();
}


// check out whatsapp
function checkoutWhatsApp(){

  let message =
  "Hello BRIGHT U.C.%0A%0A";

  message +=
  "I would like to order:%0A%0A";

  cart.forEach(product=>{

    message +=
    `${product.name} - ${product.price}%0A`;

  });

  message += "%0AThank you.";

  window.open(
    `https://wa.me/2348064344146?text=${message}`
  );
}