import DeleteUser from "./deleteUser";
import EditForm from "./editForm";
import EditUser from "./editUser";
import moment from "jalali-moment";
import { useState } from "react";

const TableItem = ({ user, setUsers }) => {
  const [edit, setEdit] = useState(false);
  console.log(user);

  return !edit ? (
    <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4  text-right">{user.userName}</td>
      <td className="px-6 py-4  text-right">{user.email}</td>
      <td className="px-6 py-4  text-right">{user.tel}</td>

      <td className="px-6 py-4  text-right">{user.membership}</td>
      <td className="px-6 py-4  text-right">
        {moment(new Date(user.date), "YYYY/MM/DD")
          .locale("fa")
          .format("YYYY/MM/DD")}
      </td>
      <td className="px-6 py-4 flex justify-evenly">
        <DeleteUser setUsers={setUsers} id={user.id} />
        <EditUser setEdit={setEdit} />
      </td>
    </tr>
  ) : (
    <EditForm target={user} setEdit={setEdit} setUsers={setUsers} />
  );
};

export default TableItem;
//
