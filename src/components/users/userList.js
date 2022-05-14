import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default function UserList({ key, person }) {
  return (
    <tr key={key}>
      <td className="px-6 py-4 flex justify-evenly">
        <button className=" mr-4 font-medium text-red-600 hover:underline text-right">
          <AiFillDelete />
        </button>
        <button className="text-indigo-600 hover:text-indigo-900">
          <FaEdit />
        </button>
      </td>
      <td className="px-6 py-4  text-right">{person.date}</td>
      <td className="px-6 py-4  text-right">{person.membership}</td>
      <td className="px-6 py-4  text-right">{person.email}</td>
      <td className="px-6 py-4  text-right">{person.tel}</td>
      <td className="px-6 py-4  text-right">{person.userName}</td>
    </tr>
  );
}
