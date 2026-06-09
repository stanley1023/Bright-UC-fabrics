const productsData = [
  {
    name: "Jonkoso (multi-colors)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkoso1.jpeg",
  },
  {
    name: "stock (navy blue)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock.jpg",
  },
  {
    name: "strip (black)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip2.jpg",
  },
  {
    name: "danchiki  style",
    category: "gallery",
    price: "#50,000",
    image: "gallery/danchiki- design1.png",
  },
  {
    name: "senator style",
    category: "gallery",
    price: "40,000",
    image: "gallery/gallery1.jpg",
  },
  {
    name: "strip (blue)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip.jpg",
  },
  {
    name: "senator style",
    category: "gallery",
    price: "40,000",
    image: "gallery/gallery3.png",
  },
   {
    name: "senator  style",
    category: "gallery",
    price: "40,000",
    image: "gallery/gallery4.png",
  },
  {
    name: "senator style",
    category: "gallery",
    price: "40,000",
    image: "gallery/gallery5.png",
  },
   {
    name: "caftan style",
    category: "gallery",
    price: "50,000",
    image: "gallery/gallery6.png",
  },
   {
    name: "V-neck style",
    category: "gallery",
    price: "40,000",
    image: "gallery/gallery7.png",
  },
   {
    name: "Jonkoso (green)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkoso-darkGreen.png",
  },
   {
    name: "Jonkoso (light-purple)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkoso-lightpurple.png",
  },
   {
    name: "Jonkoso (purple)",
    category: "jonkoso",
    price: "#2,500 / yard",
    image: "gallery/jonkoso-purple.png",
  },
  {
    name: "stock (darkGrey)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-darkGrey.png",
  },
  {
    name: "stock (fayrouz)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-fayrouz.png",
  },
  {
    name: "stock (green)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-green.png",
  },
  {
    name: "stock (multi-colors)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-multiColors.png",
  },
  {
    name: "stock (peach)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-peach.png",
  },
  {
    name: "stock (wineRed)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-wineRed.png",
  },
 
  {
    name: "stock (woolGrey)",
    category: "stock",
    price: "#4,000 / yard",
    image: "gallery/stock-woolGrey.png",
  },
    {
    name: "strip (boldGrey)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-boldGrey.png",
  },
    {
    name: "strip (brown)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-brown.png",
  },
    {
    name: "strip (green)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-green.png",
  },
    {
    name: "strip (greyGreen)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-greyGreen.png",
  },
    {
    name: "strip (multi-colors)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-multicolors.png",
  },
    {
    name: "strip (red)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-red.png",
  },
   {
    name: "strip (white)",
    category: "strip",
    price: "#2,500 / yard",
    image: "gallery/strip-white.png",
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
       <img src="${product.image}">
        <div class="price-info-card">
          <div class="fabric-name">
            ${product.name}
          </div>
            <div class="fabric-price">
            ${product.price}
          </div>

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
