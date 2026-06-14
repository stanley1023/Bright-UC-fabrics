const productsData = [
  {
    name: "senator style",
    category: "gallery",
    price: "#40,000",
    image: "gallery/galleryNew1.webp",
  },
  {
    name: "senator style",
    category: "gallery",
    price: "#45,000",
    image: "gallery/galleryNew2.webp",
  },
  {
    name: "strip (black)",
    category: "gallery",
    price: "#50,000",
    image: "gallery/galleryNew3.webp",
  },
  {
    name: "danchiki  style",
    category: "gallery",
    price: "#50,000",
    image: "gallery/galleryNew4.webp",
  },
  {
    name: "strip (green)",
    category: "strip",
    price: "#4,000/ yard",
    image: "gallery/stripNew.grey.webp",
  },
  {
    name: "strip (multi-colors)",
    category: "strip",
    price: "#2,500/ yard",
    image: "gallery/stripNew-multiColor.webp",
  },
  {
    name: "strip (grey)",
    category: "strip",
    price: "#2,500/ yard",
    image: "gallery/stripNew-grey.webp",
  },
  {
    name: "strip (green)",
    category: "strip",
    price: "#2,500/ yard",
    image: "gallery/stripNew-green.webp",
  },
  {
    name: "strip (brown)",
    category: "strip",
    price: "#2,500/ yard",
    image: "gallery/stripNew-brown.webp",
  },
  {
    name: "strip (black)",
    category: "strip",
    price: "#2,500/ yard",
    image: "gallery/stripNew-black.webp",
  },
  {
    name: "strip (red)",
    category: "strip",
    price: "#2,500/ yard",
    image: "gallery/stripNew red.webp",
  },
  {
    name: "stock (peach)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stockNew-peach.webp",
  },
  {
    name: "stock (green)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stockNew-green.webp",
  },
  {
    name: "stock (light-green)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stockNew-ggg.webp",
  },
  {
    name: "stock (navy-blue)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stockNew-blue.webp",
  },
  {
    name: "stock (ash)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stockNew-ash.webp",
  },
  {
    name: "jonkoso (purple)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkosoNew-purple.webp",
  },
  {
    name: "jonkoso (light-purple)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkosoNew-lightPurple.webp",
  },
  {
    name: "stock (lemon-green)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkosoNew-green.webp",
  },
  {
    name: "stock (wineRed)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-wineRed.webp",
  },

  {
    name: "stock (ash)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-ash.webp",
  },

  {
    name: "senator style",
    category: "gallery",
    price: "#40,000 / yard",
    image: "gallery/gallery5.webp",
  },
  {
    name: "strip (white)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-white.webp",
  },
];

const gridContainer = document.getElementById("gridContainer");

function renderProducts(productsList) {
  gridContainer.innerHTML = "";
  productsList.forEach((product) => {
    gridContainer.innerHTML += `
    <div class="product-card"
    data-aos="zoom-in"
    onclick="openModal(
    '${product.name}',
    '${product.price}',
    '${product.image}'
    )"> 
       <img src="${product.image}"
       loading="lazy"
       alt="${product.name}">
        <div class="price-info-card">
          <div class="fabric-name">
            ${product.name}
          </div>
            <div class="fabric-price">
            ${product.price}
          </div>

          <button class="add-to-card" onclick="event.stopPropagation(); addToCart(${productsData.indexOf(product)})">
          Add to cart
          </button>

    </div>
    
    </div>
    `;
  });
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

// filtering function
function filterProducts(category) {
  if (category === "all") {
    renderProducts(productsData);
    return;
  }

  const filteredProducts = productsData.filter((product) => {
    return product.category === category;
  });

  renderProducts(filteredProducts);
}

renderProducts(productsData);

// modal popup
const modal = document.getElementById("productModal");
function openModal(name, price, image) {
  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalPrice").textContent = price;
  document.getElementById("modalImage").src = image;
  modal.style.display = "flex";
}

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// add to cart function
function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productsData[index]);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  showToast("Product added to cart ✓");
}

//  update count function
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cart.length;
}
updateCartCount();

// hidden alert toast
function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
