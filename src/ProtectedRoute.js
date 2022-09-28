import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const handleRouting = () => {
    localStorage.removeItem(user);
    return history.push("/authentication/sign-in");
  };
  if (!user || !user.token || user.token === "") {
    return (
      <SweetAlert
        title="Session Expired!"
        onCancel={handleRouting}
        onConfirm={handleRouting}
        confirmBtnCssClass={"px-5"}
      />
    );
  }

  if (user) {
    localStorage.clear();
    const decodedJwt = parseJwt(user.token);
    if (decodedJwt.exp * 1000 < Date.now()) {
      return (
        <SweetAlert
          title="Session expired!"
          onCancel={() => history.push("/authentication/sign-in")}
          onConfirm={() => history.push("/authentication/sign-in")}
          confirmBtnCssClass={"px-5"}
        />
      );
    }
  }

  return <Route {...rest} />;
};
