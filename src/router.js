import {createBrowserRouter} from "react-router-dom";
import {MainLayout, CarsPage} from "./pages";

export const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: 'cars',
                element: <CarsPage/>
            },
        ]
    }
])