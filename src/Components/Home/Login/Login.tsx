import * as React from "react";
import "./Login.css";
import { Field, Formik } from "formik";
import { RouteComponentProps } from "react-router-dom";
import Axios from "axios";

export interface LoginProps extends RouteComponentProps {}

const Login: React.SFC<LoginProps> = ({ history }) => {
  const [error, setError] = React.useState("");

  return (
    <div className="login">
      <div className="login-container">
        <Formik
          initialValues={{ login: "", password: "" }}
          onSubmit={async (data) => {
            if (data.password.length === 0 || data.login.length === 0) {
              setError("enter all fields");
              return;
            }
            const res = await Axios.post("http://localhost:8000/users/login", {
              login: data.login,
              password: data.password,
            });
            console.log(res.data, "test");
            setError(res.data);
            if (res.status === 202) {
              history.push("/list");
            }
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="login-form" onSubmit={handleSubmit}>
              <h2 style={{ margin: 0, textAlign: "center" }}>Sign up</h2>
              <div className="input-container">
                <label htmlFor="login">
                  <b>Enter your login:</b>
                </label>
                <Field
                  className="input"
                  id="login"
                  placeholder="login"
                  value={values.login}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">
                  <b>Enter your password:</b>
                </label>
                <Field
                  type="password"
                  className="input"
                  id="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <span className="btn" onClick={() => handleSubmit()}>
                Log in
              </span>
              <strong>{error}</strong>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
