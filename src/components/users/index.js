import AddUser from "./addUser";
import TableUser from "./table";
import { useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  console.log(users);
  return (
    <>
      <div className="container   m-4">
        <AddUser addUser={setUsers} />
      </div>

      <div className="flex justify-center">
        <TableUser users={users} />
      </div>
    </>
  );
}
