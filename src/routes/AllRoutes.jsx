import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskList from "../pages/TaskList";
import UsersData from "../pages/UsersData";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/users" element={<UsersData />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
