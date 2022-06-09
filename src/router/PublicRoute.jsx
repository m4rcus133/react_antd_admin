import React from "react";
import { motion } from "framer-motion";
import { Route, Navigate } from "react-router-dom";
import * as authService from "@/auth";

const PublicRoute = ({ component: Component}) => {
  return (
    // Show the component only when the admin is logged in
    // Otherwise, redirect the admin to /signin page
    
      authService.token.get() 
      ? ( <Navigate to="/" /> ) 
      : (
          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ scale: 0 }}
          >
            <Component />
          </motion.div>
        )
  );
};

export default PublicRoute;
