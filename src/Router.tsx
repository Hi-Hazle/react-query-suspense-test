import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { DemoPage1, DemoPage2, DemoPage3 } from './pages';

function RootLayout() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/demo1',
        element: <DemoPage1 />,
      },
      {
        path: '/demo2',
        element: <DemoPage2 />,
      },
      {
        path: '/demo3',
        element: <DemoPage3 />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
