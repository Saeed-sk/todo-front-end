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
import {ErrorBoundary} from "./error-boundary.tsx";
import {PasswordPage} from "./pages/password";
import {ProfilePage} from "./pages/profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutMain/>,
        errorElement: <ErrorBoundary/>,
        hasErrorBoundary: true,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'list', element: <ListPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>},
            {path: 'profile', element: <ProfilePage/>},
            {path: 'password', element: <PasswordPage/>},
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
