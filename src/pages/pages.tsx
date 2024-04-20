import Home from "./main/home";
import Register from "./auth/register";
import Login from "./auth/login";
import ResetPassword from "./auth/resetPassword";
import About from "./main/about";
import Services from "./main/services";
import ServiceDetails from "./main/serviceDetails";
import Price from "./main/price";
import Team from "./main/team";
import TeamDetails from "./main/teamDetails";
import Blogs from "./main/blogs";
import BlogDetails from "./main/blogDetails";
import Contact from "./main/contact";
import NotFound from "./notFound";
import MainLayout from "../layouts/mainLayout";
import { ComponentType } from "react";

const withLayout = (Component: ComponentType) => {
  return () => (
    <MainLayout>
      <Component />
    </MainLayout>
  );
};

const pagesData = [
  {
    path: "",
    element: withLayout(Home)(),
    title: "Home",
  },
  {
    path: "register",
    element: withLayout(Register)(),
    title: "Sign Up",
  },
  {
    path: "login",
    element: withLayout(Login)(),
    title: "Sign In",
  },
  {
    path: "reset-password",
    element: withLayout(ResetPassword)(),
    title: "Reset Password",
  },
  {
    path: "services",
    title: "Services",
    children: [
      {
        path: "",
        element: withLayout(Services)(),
        title: "All Services",
      },
      {
        path: ":id",
        element: withLayout(ServiceDetails)(),
        title: "Service",
      },
    ],
  },
  {
    path: "about",
    title: "About",
    children: [
      {
        path: "",
        element: withLayout(About)(),
        title: "About Us",
      },
      {
        path: "price",
        element: withLayout(Price)(),
        title: "Price",
      },
      {
        path: "team",
        title: "Teams",
        children: [
          {
            path: "",
            element: withLayout(Team)(),
            title: "All Team",
          },
          {
            path: ":id",
            element: withLayout(TeamDetails)(),
            title: "Member",
          },
        ],
      },
    ],
  },
  {
    path: "blogs",
    title: "Blogs",
    children: [
      {
        path: "",
        element: withLayout(Blogs)(),
        title: "All Blogs",
      },
      {
        path: ":id",
        element: withLayout(BlogDetails)(),
        title: "Blog",
      },
    ],
  },
  {
    path: "contact",
    element: withLayout(Contact)(),
    title: "contact",
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404",
  },
];

export default pagesData;
