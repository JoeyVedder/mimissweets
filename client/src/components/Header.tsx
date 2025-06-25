import NavbarComponent from "./Navbar.tsx";
import {Link} from "react-router-dom";

export default function HeaderComponent() {
    return (
        <div
            className="sticky top-0 z-50 bg-white shadow-md py-4 w-full flex justify-between items-center px-4 flex-col sm:flex-row">
            <Link to="/" className="text-2xl font-bold text-pink-600 hover:text-pink-400 transition-colors">Mimi’s Sweets</Link>
            <NavbarComponent/>
        </div>
    )
}
