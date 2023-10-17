<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/profile";
import BaseLayout from "./app/layouts/baseLayout";
import NotFound from "./pages/404";
import HomePage, { homePageLoader } from "./pages/home";
import Account, { accountDataLoader } from "./pages/account";
import AboutPage from "./pages/about";
import AllSessions from "./pages/session/AllSessions";
import SingleSession from "./pages/session/SingleSession";

const router = createBrowserRouter([
  {
    // Home & General Pages because no auth needed
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFound />,

    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      { path: "/about", element: <AboutPage /> },
    ],
  }, // End Home & General Pages
  {
    // Protected Pages & is related to user profile
    path: "/:handler/account",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Account />, loader: accountDataLoader },
      { path: "/:handler/account/sessions", element: <AllSessions /> },
      { path: "/:handler/account/session/:id", element: <SingleSession /> },
    ],
  }, // End Protected Pages
  {
    // Profile Page by Handler
    path: "/:handler",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <ProfilePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/profile";
import BaseLayout from "./app/layouts/baseLayout";
import NotFound from "./pages/404";
import HomePage from "./pages/home";
import Account from "./pages/account";
import AboutPage from "./pages/about";
import AllSessions from "./pages/session/AllSessions";
import SingleSession from "./pages/session/SingleSession";

const router = createBrowserRouter([
  {
    // Home & General Pages
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  }, // End Home & General Pages
  {
    // Protected Pages
    path: "/:handler/account",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Account /> },
      { path: "/:handler/account/sessions", element: <AllSessions /> },
      { path: "/:handler/account/session/:id", element: <SingleSession /> },
    ],
  }, // End Protected Pages
  {
    // Profile Page by Handler
    path: "/:handler",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <ProfilePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
>>>>>>> f7717fbff88ee57c246f58fee1f2a24ffacf0850
