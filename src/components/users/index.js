import AddUser from "./addUser";
import TableUser from "./table";
import { useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  console.log(users);
  return (
    <>
<<<<<<< Updated upstream
      <div className="container   m-4">
        <AddUser addUser={setUsers} />
      </div>

      <div className="flex justify-center">
        <TableUser users={users} />
      </div>
=======
      <AddUser addUser={setUsers} />
      <TableUser users={users} setUsers={setUsers} />
>>>>>>> Stashed changes
    </>
  );
}
