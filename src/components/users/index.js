import AddUser from "./addUser";
import TableUser from "./table";
import { useState } from "react";

export default function UsersPage() {

  const [users, setUsers] = useState([]);

  return (
    <>
        <AddUser addUser={setUsers} />
        <TableUser users={users} />
    </>
  );
}
