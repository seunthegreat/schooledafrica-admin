import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { useJwt } from "react-jwt";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
  const { isExpired } = useJwt(user.token);

  if (!user || !user.token || user.token === "") {
    return (
      <SweetAlert
        title="You must be signed in!"
        onCancel={() => history.push("/authentication/sign-in")}
        onConfirm={() => history.push("/authentication/sign-in")}
        confirmBtnCssClass={"px-5"}
      />
    );
  }

  if (isExpired) {
    return (
      <SweetAlert
        title="Session Expired!"
        onCancel={() => history.push("/authentication/sign-in")}
        onConfirm={() => history.push("/authentication/sign-in")}
        confirmBtnCssClass={"px-5"}
      />
    );
  }

  return <Route {...rest} />;
};
