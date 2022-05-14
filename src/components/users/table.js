import TableHead from './tableHead'
import TableItem from './tableItem'

export default function Table({ users }) {

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-gray-500 mt-5">
          <TableHead />
          <tbody>
            {users.map(user => <TableItem key={user.id} {...user} />)}
          </tbody>
          {!users.length ? <tfoot><tr><td colSpan="6" className="text-center p-5">دیتایی یافت نشد</td></tr></tfoot> : null}
        </table>
      </div>
    </>
  );
}
