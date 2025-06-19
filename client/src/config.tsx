import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/About.tsx";
import type {IRoute} from "./types.ts";

/**
 * The routes configuration for the application.
 *
 * This is the list that defines the paths to different pages in the application
 * The first path will ***ALWAYS*** be the ***INDEX***. 
 * That means that the ***first route will always be the one initially served to the user***
 */
export const routes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        element: <HomePage/>
    },
    {
        path: "/about",
        name: "About The Baker",
        element: <AboutPage />,
        visible: true
    }
]