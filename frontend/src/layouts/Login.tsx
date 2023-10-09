import React from "react";
import { useNavigate } from "react-router";
import BackButton from "../components/Back";

interface LayoutProps {
  error: string;
  success?: string;
  children: JSX.Element;
}

const Login = (props: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="login-layout-wrapper">
      <div className="left">
        <BackButton call={() => navigate("/")} />
        
        <img src="check.gif" alt="jfvu" />
        
      </div>

      <div className="right">
        {props.error !== "" ? (
          <div className="error-message">
            <span>
              <i className="bi bi-exclamation-circle"></i>
            </span>
            <span>{props.error} ...</span>
          </div>
        ) : null}

        {props.success && props.success !== "" ? (
          <div className="success-message">
            <span>
              <i className="bi bi-check-circle"></i>
            </span>
            <span>{props.success} ...</span>
          </div>
        ) : null}

        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Login;
