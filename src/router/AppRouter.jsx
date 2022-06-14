import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Customer = lazy(() =>
  import(/*webpackChunkName:'CustomerPage'*/ "@/pages/Customer")
);

const SelectCustomer = lazy(() =>
  import(/*webpackChunkName:'SelectCustomerPage'*/ "@/pages/SelectCustomer")
);

const Lead = lazy(() => import(/*webpackChunkName:'LeadPage'*/ "@/pages/Lead"));
const Product = lazy(() =>
  import(/*webpackChunkName:'ProductPage'*/ "@/pages/Product")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>

          {/* /* change to route */ }
          <Route path="/react_antd_admin" element={Dashboard} exact />
          {/* <PrivateRoute path="/" element={Dashboard} exact /> */}

          <PrivateRoute element={Customer} path="/react_antd_admin/customer" exact />
          <PrivateRoute
            element={SelectCustomer}
            path="/react_antd_admin/selectcustomer"
            exact
          />
          <PrivateRoute element={Lead} path="/lead" exact />
          <PrivateRoute element={Product} path="/product" exact />
          <PrivateRoute element={Admin} path="/admin" exact />

          <PrivateRoute element={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Navigate to="/" />} />
          <Route
            path="*"
            element={NotFound}
            render={() => <Navigate to="/notfound" />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
