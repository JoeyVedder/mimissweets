import {Link} from "react-router-dom";
import type {IRoute} from "../types.ts";
import {routes} from "../config.tsx";

function CreateNavLink(route: IRoute) {
    if (!route.visible) 
        return (<> </>)
    return (
        <li key={route.path}>
            <Link to={route.path} className="hover:text-pink-500 font-medium">
                {route.name}
            </Link>
        </li>
    );
}

export default function NavbarComponent() {
    return (
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold text-pink-600">Mimi’s Sweets</h1>
                <ul className="flex space-x-6">
                    {routes.map(CreateNavLink)}
                </ul>
            </div>
        </nav>
    )
}