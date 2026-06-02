import React, { useState, useEffect, useContext } from "react";
import Login from "./components/auth/login";
import AdminDashboard from "./components/dashboard/admindashboard";
import EmployeeDashboard from "./components/dashboard/employeedashboard";
import { AuthContext } from "./context2/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData] = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        const user = JSON.parse(loggedInUser);

        setUser(user.role);

        if (user.role === "employee") {
          setLoggedInUserData(user.data);
        }
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
        })
      );

      return;
    }

    const employee = userData?.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUser("employee");

      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee,
        })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === "employee" && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;