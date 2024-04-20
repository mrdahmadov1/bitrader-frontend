import { Route, Routes } from "react-router-dom";
import pages from "./pages";
import { IRoute } from "@/models/IRoute";

const renderRoutes = (routes: IRoute[]) => {
  return routes.map(({ path, title, element, children = [] }) => {
    return (
      <Route key={title} path={path} element={element}>
        {children.length > 0 && <Route>{renderRoutes(children)}</Route>}
      </Route>
    );
  });
};

const Router = () => {
  const pageRoutes = renderRoutes(pages);
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
