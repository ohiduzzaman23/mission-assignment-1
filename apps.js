const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";
  const firstFour = products.slice(0, 4);
  for (let product of firstFour) {
    const cardDiv = document.createElement("div");

    cardDiv.innerHTML = `
      <div class=" bg-white rounded-2xl shadow-md overflow-hidden">
        
        <!-- Image -->
        <div class="bg-gray-200 h-[260px] flex items-center justify-center p-6">
          <img
            src="${product.image}"
            alt="${product.title}"
            class="h-full object-contain"
          />
        </div>

        <!-- Content -->
        <div class="p-5">
          
          <!-- Category + Rating -->
          <div class="flex items-center justify-between mb-3">
            <span
              class="bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full capitalize"
            >
              ${product.category}
            </span>

            <div class="flex items-center text-sm text-gray-500">
              <i class="fa-solid fa-star text-yellow-400 mr-1"></i>
              <span>${product.rating.rate} (${product.rating.count})</span>
            </div>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-semibold text-gray-800 mb-2 truncate">
            ${product.title}
          </h3>

          <!-- Price -->
          <p class="text-2xl font-bold text-gray-900 mb-4">
            $${product.price}
          </p>

          <!-- Buttons -->
          <div class="flex items-center gap-3">
            <button
              class="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <i class="fa-regular fa-eye"></i>
              Details
            </button>

            <button
              class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-cart-shopping"></i>
              Add
            </button>
          </div>
        </div>
      </div>
    `;

    productContainer.append(cardDiv);
  }
};

loadProducts();
