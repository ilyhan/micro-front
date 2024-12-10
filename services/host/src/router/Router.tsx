import React, { Suspense } from 'react';
import { App } from "../components/App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";
//@ts-ignore
import shopRoutes from "shop/Router";
//@ts-ignore
import adminRoutes from "admin/Router";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            ...shopRoutes,
            ...adminRoutes,
        ]
    }
]);
