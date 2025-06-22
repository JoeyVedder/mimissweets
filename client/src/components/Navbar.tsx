import {Link} from "react-router-dom";
import type {IRoute} from "../types.ts";
import {routes} from "../config.tsx";

function CreateNavLink(route: IRoute) {
    if (route.visible === false)
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
        <ul className="flex space-x-6">
            {routes.map(CreateNavLink)}
        </ul>
    )
}