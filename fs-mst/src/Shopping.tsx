import ProductCard from "./ProductCard";

export default function Shopping() {
  return (
    <div className="grid grid-cols-3 px-16 py-16 gap-8">
      <ProductCard 
        name="vanilla ice cream"
        description="Creamy vanilla ice cream made with real vanilla beans."
        price={4.99}
        inStock={true}
      />
      <ProductCard
        name="chocolate ice cream"
        description="Rich chocolate ice cream made with premium cocoa."
        price={5.49}
        inStock={false}
      />
    <ProductCard
        name="strawberry ice cream"
        description="Fresh strawberry ice cream made with real strawberries."
        price={5.29}
        inStock={true}
      />
    </div>
  );
}