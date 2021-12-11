import React, { useEffect } from "react";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const onlogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/");
  };
  useEffect(() => {
    if (!localStorage.getItem("auth_token") && location.pathname === "/tasks") {
      navigate("/");
    }
  }, [navigate, location]);
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/tasks" && (
        <Button
          color={showAdd ? "black" : "green"}
          text={showAdd ? "Close" : "Add"}
          OnClick={onAdd}
          marginleft={"40px"}
        />
      )}
      {location.pathname === "/tasks" && (
        <Button color={"red"} text={"Logout"} OnClick={onlogout} />
      )}
    </header>
  );
};

Header.defaulProps = {
  title: "Task Tracker",
};

export default Header;
