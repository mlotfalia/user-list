import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import UserList from "./userList";

<<<<<<< Updated upstream
export default function Table({ users }) {
  console.log(users);
=======
const Table = ({ users, setUsers }) => {
>>>>>>> Stashed changes
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-gray-500 ">
          <thead className=" text-s text-gray-700  bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only"></span>
              </th>

              <th scope="col" className="px-6 py-3  text-right">
                تاریخ عضویت
              </th>

              <th scope="col" className="px-6 py-3  text-right">
                نوع عضویت
              </th>
              <th scope="col" className="px-6 py-3  text-right">
                ایمیل
              </th>
              <th scope="col" className="px-6 py-3  text-right">
                تلفن
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                نام کاربر
              </th>
            </tr>
          </thead>
          <tbody>
<<<<<<< Updated upstream
            {users.length
              ? users.map((user, index) => (
                  <UserList key={index} person={user} />
                ))
              : " کاربری  در لیست موجود نیست"}
=======
            {users.map((user) => (
              <TableItem
                user={user}
                key={user.id}
                setUsers={setUsers}
                users={users}
              />
            ))}
>>>>>>> Stashed changes
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;