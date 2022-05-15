import { useState } from "react";

const EditForm = ({ target, setEdit, setUsers }) => {
  console.log(target);
  const [user, setUser] = useState({
    userName: target.userName,
    tel: target.tel,
    email: target.email,
    membership: target.membership,
    date: target.date,
  });

  console.log(user);
  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setUsers((prevState) =>
      prevState.map((person) => (person.id === target.id ? user : person))
    );
    setEdit(false);
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          required
          id="name"
          type="text"
          defaultValue={user.userName}
          className="input text-xs"
          onChange={handleInputs}
          name="name"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="text"
          value={user.email}
          className="input text-xs"
          onChange={handleInputs}
          name="email"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <input
          type="number"
          value={user.tel}
          className="input text-xs"
          onChange={handleInputs}
          name="tel"
        />
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-center text-gray-700">
        <select
          className="input text-xs"
          value={user.membership}
          onChange={handleInputs}
          name="membership"
        >
          <option value="کاربر">کاربر</option>
          <option value="ادمین">ادمین</option>
        </select>
      </td>
      <td
        className="px-4 py-2 whitespace-nowrap text-center text-gray-700"
        dir="ltr"
      >
        <p className="text-xs">{user.date}</p>
      </td>
      <td className="px-4 py-2 whitespace-nowrap space-x-2 space-x-reverse">
        <button className="btn-success btn-sm" onClick={handleSubmit}>
          بروزرسانی
        </button>
        <button className="btn-cancel btn-sm" onClick={() => setEdit(false)}>
          انصراف
        </button>
      </td>
    </tr>
  );
};

export default EditForm;
