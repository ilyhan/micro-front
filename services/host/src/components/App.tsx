import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
    const [count, setCount] = useState(0);

    const inc = () => setCount((prev) => prev + 1);

    return (
        <div>
            <h1>Shop</h1>
            <p>{count}</p>
            <button onClick={inc}>inc</button>
            <br />
            <Link to="/about">About</Link>
            <br/>
            <Link to="/shop">Shop</Link>
            <Outlet />
        </div>
    )
}