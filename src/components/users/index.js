import AddUser from "./addUser";
import TableUser from "./table";
import { useState } from "react";

export default function UsersPage() {
  const [user, setUser] = useState([]);

  console.log(user);
  return (
    <>
      <div className="container   m-4">
        <AddUser addUser={setUser} />
      </div>

      <div className="flex justify-center">
        <TableUser users={user} />
      </div>
    </>
  );
}
