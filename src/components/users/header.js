export default function Header(setShowModal) {
  return (
    <>
      <div className="flex justify-evenly">
        <button
          className="bg-blue-800 text-white active:bg-blue-600 font-bold uppercase text-sm px-4  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          اضافه کردن کاربر جدید
        </button>

        <span className="m-3  text-blue-800 font-bold  ">لیست کاربران</span>
      </div>
    </>
  );
}
