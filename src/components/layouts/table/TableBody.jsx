import React from 'react';
import UserList from "../../users/UserList";

function TableBody({users}) {
    return (
        <tbody>
        {
            users.length
                ? users.map((user, index) => (<UserList key={index} person={user}/>))
                : <tr>
                    <td colSpan="6" className="text-center p-4">"کاربری در لیست موجود نیست"</td>
                </tr>
        }
        </tbody>
    );
}

export default TableBody;