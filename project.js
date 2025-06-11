let lastScrollTop = 0;
const header = document.getElementById('site-header');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {

    header.style.top = '-100px'; 
  } else {

    header.style.top = '0';
  }

  lastScrollTop = scrollTop;
});


let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});const productDetail = document.getElementById("product-detail");
const mainImg = document.getElementById("main-product-image");
const thumbnails = document.querySelectorAll(".thumb");
const title = document.getElementById("product-title");
const price = document.getElementById("product-price");
const quantityEl = document.getElementById("quantity");

let currentQty = 1;


document.querySelectorAll(".product-card").forEach((card, i) => {
  card.addEventListener("click", () => {
    const product = products[i];


    title.textContent = product.name;
    price.textContent = `₱${product.price.toFixed(2)}`;
    mainImg.src = product.images[0];
    currentQty = 1;
    quantityEl.textContent = currentQty;


    thumbnails.forEach((thumb, index) => {
      thumb.src = product.images[index];
      thumb.onclick = () => {
        mainImg.src = product.images[index];
      };
    });

    productDetail.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("increase-qty").onclick = () => {
  currentQty++;
  quantityEl.textContent = currentQty;
};

document.getElementById("decrease-qty").onclick = () => {
  if (currentQty > 1) currentQty--;
  quantityEl.textContent = currentQty;
};





  function goToProduct(name, price, image) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productImage', image);
  window.location.href = 'product.html'; 
}



  function goToProduct(name, price, image) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productImage', image);

  const productMap = {
    "Night Classic Boxy Tee": "product.html",
      "Night Big Logo Tee": "product2.html",
      "Night Ethereal V2": "product3.html",
      "Night Pastel Tee": "product4.html",
      "Night Y2K Tee": "product5.html",
      "Night Graffiti Tee": "product6.html",
      "Night Flower Tee": "product7.html",
      "Night Ethereal Tee": "product8.html"
    };

     const fileName = productMap[name] || "product.html";
  window.location.href = fileName;
}


const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById("cart-count").textContent = storedCart.length;


function updateCartDisplay() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.length;
  const cartCountEl = document.getElementById("cart-count");
  const checkoutBtn = document.getElementById("checkout-button-container");

  if (cartCountEl) cartCountEl.textContent = count;
  if (checkoutBtn) checkoutBtn.style.display = count > 0 ? "block" : "none";
}

updateCartDisplay();

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);



document.getElementById("cart-icon").addEventListener("click", () => {
  window.location.href = "checkout.html";
});


