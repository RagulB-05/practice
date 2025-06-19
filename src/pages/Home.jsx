import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl text-center p-3">Hello all</h1>
      <div className="flex  gap-5 justify-center text-center p-10">
        <Link
          className="bg-gray-400 p-3 rounded hover:bg-gray-600"
          to="/tasklist"
        >
          TaskList
        </Link>
        <Link className="bg-gray-400 p-3 rounded hover:bg-gray-600" to="/users">
          Users
        </Link>
      </div>
    </div>
  );
};

export default Home;
