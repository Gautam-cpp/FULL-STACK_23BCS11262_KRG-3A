type Product = {
    name: string;
    description: string;
    price: number;
    inStock: boolean;
}
export default function ProductCard(Product: Product) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-2">{Product.name}</h2>
      <p className="text-gray-700 mb-4">{Product.description}</p>
      <p className="text-lg font-semibold mb-2">${Product.price.toFixed(2)}</p>
      <button className={` text-white rounded-lg p-3 ${Product.inStock ? 'bg-green-600' : 'bg-red-600'}`}>
        {Product.inStock ? 'In Stock' : 'Out of Stock'}
      </button>
    </div>
  );
}