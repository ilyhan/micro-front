import React, { Suspense } from 'react';
import { App } from "../components/App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import { AboutLazy } from '@/pages/about/About.lazy';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: (
                    <Suspense fallback={"loading"}>
                        <AboutLazy />
                    </Suspense>
                )
            }
        ]
    }
]


export const router = createBrowserRouter(routes);
export default routes;
