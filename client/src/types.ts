import type {ReactElement} from "react";

/**
 * The type that holds the configuration for a route in the application.
 * The component property is a React element that will be rendered when the path is routed to.
 * The visible property defines if the path should be shown on the nav bar.
 */
export interface IRoute {
    path: string;
    name: string;
    element: ReactElement;
    visible?: boolean;
    children?: IRoute[];
}