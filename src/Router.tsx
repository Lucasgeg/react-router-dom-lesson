import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: (
        <div>
          Sorry we don't find this page! <NavLink to="/">Return Home</NavLink>
        </div>
      ),
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
