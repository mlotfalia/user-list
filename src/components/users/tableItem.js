import moment from 'jalali-moment'

const TableItem = ({userName, tel, email, membership, date}) => {

    return (
        <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4  text-right">{userName}</td>
            <td className="px-6 py-4  text-right">{tel}</td>
            <td className="px-6 py-4  text-right">{email}</td>
            <td className="px-6 py-4  text-right">{membership}</td>
            <td className="px-6 py-4  text-right">{moment(new Date(date), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</td>
            <td className="px-6 py-4 flex justify-evenly">
                <button className=" mr-4 font-medium text-red-600 hover:underline text-right">
                    حذف
                </button>
                <button className=" mr-4 font-medium text-indigo-700 hover:underline text-right">
                    ویرایش
                </button>
            </td>
        </tr>
    )
}

export default TableItem