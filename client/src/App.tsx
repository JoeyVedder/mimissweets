import {BrowserRouter, Route, Outlet, Routes} from "react-router-dom";

import FooterComponent from "./components/Footer.tsx";
import HeaderComponent from "./components/Header.tsx";
import type {IRoute} from "./types.ts";
import {routes} from "./config.tsx";
import ErrorPage from "./pages/Error.tsx";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderComponent/>
            <div className="grow">
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    )
}

function CreateRoute(route: IRoute) {
    return (
        <Route
            key={route.path}
            path={route.path}
            element={route.element}
        >
            {/* If the route has children, recursively create them */}
            {route.children && route.children.map(CreateRoute)}
        </Route>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/* The route that any user will initially see */}
                    <Route index element={routes[0].element}/>
                    
                    {/* Create routes for all other paths */}
                    {routes.slice(1).map(CreateRoute)}
                    
                    {/* Catch-all route */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;