import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes , useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Login = lazy(() =>
  import(/*webpackChunkName:'LoginPage'*/ "@/pages/Login")
);

const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AuthRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes  location={location} key={location.pathname}>
          <Route
            path="/react_antd_admin"
            element={<PublicRoute component={Login}/>}
            render={() => <Navigate to="/react_antd_admin/login" />}
          />
          <Route element={<Login/>} path="/react_antd_admin/login" exact />
          <Route
            path="*"
            element={<NotFound/>}
            render={() => <Navigate to="/react_antd_admin/notfound" />}
          />
        </Routes >
        
      </AnimatePresence>
    </Suspense>

  );
}
