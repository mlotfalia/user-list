function DeleteUser({ setUsers, id }) {
  function handleDelete() {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }
  return (
    <button className="btn-cancel" onClick={() => handleDelete()}>
      حذف
    </button>
  );
}
export default DeleteUser;
