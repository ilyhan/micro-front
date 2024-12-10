import { Link, Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <h1>Admin</h1>
            <Outlet />
        </div>
    )
}