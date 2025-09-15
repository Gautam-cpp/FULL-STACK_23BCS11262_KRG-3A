const products = [
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Smartphone", category: "electronics", price: 799 },
  { name: "Headphones", category: "electronics", price: 199 },
  { name: "Smartwatch", category: "electronics", price: 299 },
  { name: "Gaming Console", category: "electronics", price: 499 },

  { name: "Shirt", category: "clothing", price: 25 },
  { name: "Jeans", category: "clothing", price: 40 },
  { name: "Jacket", category: "clothing", price: 70 },
  { name: "Sneakers", category: "clothing", price: 90 },

  { name: "Backpack", category: "accessories", price: 55 },
  { name: "Sunglasses", category: "accessories", price: 120 },
  { name: "Watch", category: "accessories", price: 150 },
  { name: "Wallet", category: "accessories", price: 45 },

  { name: "Coffee Maker", category: "home", price: 85 },
  { name: "Vacuum Cleaner", category: "home", price: 180 },
  { name: "Lamp", category: "home", price: 40 },
  { name: "Microwave", category: "home", price: 220 }
];

document.getElementById('filter').addEventListener('change', (e) => {
  const selected = e.target.value;
  const filtered = selected === 'all'
    ? products
    : products.filter(p => p.category === selected);
  renderProducts(filtered);
});

function renderProducts(products) {
  const container = document.getElementById('products-container');
  if (products.length === 0) {
    container.innerHTML = `<p>No products found.</p>`;
    return;
  }
  container.innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p class="price">$${p.price}</p>
      <button class="buy-btn">Buy Now</button>
    </div>
  `).join('');
}

renderProducts(products);
