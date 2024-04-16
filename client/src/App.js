import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Components/Register";
import Username from "./Components/Username";
import Password from "./Components/Password";
import Profile from "./Components/Profile";
import Recovery from "./Components/Recovery";
import Reset from "./Components/Reset";
import PageNotFound from "./Components/PageNotFound";
import { AuthorizeUser, ProtectRoute } from './middleware/auth';
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/ContactUs/Contact";
import Payment from "./Pages/Payment/Payment";
import Card from "./Pages/getCard/getCard";
import Terms from "./Pages/Terms/Terms";
import History from './Pages/transactionHistory/History';






function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer  />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path:"getCard",
          element:<Card/>
        },
        {
          path:"terms",
          element:<Terms/>
        },
        { path: "/payment",
          element:
          <Payment /> 
        },
        { path: "/transactionHistory",
         element: <History /> 
        },
        { path: "/register",
         element: <Register /> 
        },
        {
          path: "/username",
          element: <Username />,
        },
        {
          path: "/profile",
          element: <AuthorizeUser><Profile /></AuthorizeUser>
        },
      
        {

          path: "/password",
          element: <ProtectRoute> <Password /> </ProtectRoute>
          
          // <Password />,
        },
        {
          path: "/recovery",
          element: <Recovery></Recovery>,
        },
      ],
    },

    {
      path: "/reset",
      element: <Reset></Reset>,
    },
    {
      path: "*",
      element: <PageNotFound></PageNotFound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
