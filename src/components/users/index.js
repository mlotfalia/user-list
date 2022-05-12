import AddUser from "./addUser";
import TableUser from "./table";
import { useState } from "react";

import Header from "./header";
export default function UsersPage() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);
  return (
    <>
      <div className="container   m-4">
  
          <Header setShow={setShowModal} />
          <AddUser addUser={setUser} show={showModal} setShow={setShowModal} />

        </div>
        <div className="flex justify-center">
          <TableUser />
        </div>
      
    </>
  );
}
