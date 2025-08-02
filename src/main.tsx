import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {ThemeWrapper} from "./components/theme-wrapper.tsx";
import {LayoutMain} from "./components/layout/layout-main.tsx";
import {LoginPage} from "./pages/auth/login.tsx";
import {RegisterPage} from "./pages/auth/register.tsx";
import {ListPage} from "./pages/list";
import {HomePage} from "./pages/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutMain/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'list', element: <ListPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>},
            {path: 'list', element: <RegisterPage/>},
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeWrapper>
                <RouterProvider router={router}/>
            </ThemeWrapper>
        </Provider>
    </StrictMode>
)
