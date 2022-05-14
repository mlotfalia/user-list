import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

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
            {users.length ? (
              <tr
                key={users.email}
                className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 flex justify-evenly">
                  <button className=" mr-4 font-medium text-red-600 hover:underline text-right">
                    <AiFillDelete />
                  </button>
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    <FaEdit />
                    <span className="sr-only">{users.name}</span>
                  </a>
                </td>
                <td className="px-6 py-4  text-right">{users.name}</td>
                <td className="px-6 py-4  text-right">{users.tel}</td>
                <td className="px-6 py-4  text-right">{users.email}</td>
                <td className="px-6 py-4  text-right">{users.membership}</td>
                <td className="px-6 py-4  text-right">{users.date}</td>
              </tr>
            ) : (
              " کاربری  در لیست موجود نیست"
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
