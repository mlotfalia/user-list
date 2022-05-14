import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import UserList from "./userList";

export default function Table({ users }) {
  console.log(users);
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
            {users.length
              ? users.map((user, index) => (
                  <UserList key={index} person={user} />
                ))
              : " کاربری  در لیست موجود نیست"}
          </tbody>
        </table>
      </div>
    </>
  );
}
