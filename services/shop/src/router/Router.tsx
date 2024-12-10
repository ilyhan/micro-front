import React, { Suspense } from 'react';
import { App } from "../components/App";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Shop } from '@/pages/shop';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/shop',
                element: (
                    <Suspense fallback={"loading"}>
                        <Shop />
                    </Suspense>
                )
            }
        ]
    }
]

export const router = createBrowserRouter(routes);
export default routes;