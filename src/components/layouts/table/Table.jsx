import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({users}) {
    return (
        <div className="flex justify-center">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full  text-gray-500 ">
                    <TableHeader/>
                    <TableBody users={users}/>
                </table>
            </div>
        </div>
    );
}
