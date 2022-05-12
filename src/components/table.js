import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import React, { useState } from "react";

export default function UserTable() {
  const [users, setUser] = useState({
    userName: "",
    tel: "",
    email: "",
    membership: "",
    date: "",
  });
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full  text-gray-500 ">
          <thead className=" text-s text-gray-700  bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3  text-right"></th>
              <th scope="col" className="px-6 py-3">
                <span className="not-sr-only"></span>
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
            <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 flex justify-evenly">
                <a
                  href="#"
                  className=" mr-4 font-medium text-red-600 hover:underline text-right"
                >
                  <AiFillDelete />
                </a>
                <a
                  href="#"
                  className=" font-medium text-blue-600 hover:underline"
                >
                  <FaEdit />
                </a>
              </td>
              <td className="px-6 py-4  text-right"></td>
              <td className="px-6 py-4  text-right"></td>
              <td className="px-6 py-4  text-right"></td>
              <td className="px-6 py-4  text-right"></td>
              <td className="px-6 py-4  text-right"></td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 text-center "
              ></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
