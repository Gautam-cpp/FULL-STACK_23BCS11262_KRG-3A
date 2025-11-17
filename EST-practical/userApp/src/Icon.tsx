import UserProfile from "./UserProfile";
import {User } from "lucide-react"

export default function Icon({ username } : {username:string}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
        <User className="w-6 h-6" />
      <UserProfile username={username} />
    </div>
  );
}
