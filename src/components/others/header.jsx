import React from "react";

const Header = ({ data, changeUser }) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");

    if (changeUser) {
      changeUser("");
    }
  };

  return (
    <div className="flex justify-between items-center w-full px-6 py-4">
      <h1 className="text-2xl font-medium text-white">
        Hello,
        <br />
        <span className="text-3xl font-semibold">
          {data?.firstName || "Admin"} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Header;