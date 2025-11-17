import Icon from "./Icon";

export default function Header({ username }: {username :string}) {
  return (
    <header className="p-4 bg-gray-200">
        <div className="flex justify-between ">
      <h1 className="text-xl font-semibold pt-4">Header App</h1>
      <Icon username={username} />
        </div>
    </header>
  );
}
