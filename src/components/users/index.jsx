import AddUser from "./AddUser";
import TableUser from "../layouts/table/Table";
import {useState} from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    return (
        <>
            <AddUser addUser={setUsers}/>
            
            <TableUser users={users}/>
        </>
    );
}
