export default function UserProfile({ username }: {username:string}) {
  return (
    <div className="p-4 ">
      <p className="text-lg font-medium">{username}</p>
    </div>
  );
}
