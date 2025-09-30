export default function Home() {
  return (
    <div className="text-3xl font-bold underline flex flex-col items-center space-y-4">
      Welcome to the Home Page
      <div>
        <a href="/shop" className="text-blue-500 hover:underline">Go to Shop</a>
        <a href="/todo" className="text-blue-500 hover:underline ml-4">Go to Todo</a>
      </div>
    </div>
  );
}