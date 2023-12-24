import RequireAuth from '@app/layout/RequireAuth.tsx';
import RootLayout from '@app/layout/RootLayout.tsx';
import DashboardPage from '@app/pages/DashboardPage';
import HomePage from '@app/pages/HomePage';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

export const appRoutes: RouteObject[] = [
    {
        path: '',
        Component: RootLayout,
        children: [
            {
                index: true,
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/dashboard',
                element: (
                    <RequireAuth>
                        <DashboardPage />
                    </RequireAuth>
                ),
            },
        ],
    },
];
export const router = createBrowserRouter(appRoutes);
