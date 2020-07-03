import * as React from "react";
import "./Signup.css";
import { Formik, Field } from "formik";

export interface SignupProps {}

const Signup: React.SFC<SignupProps> = () => {
  const [error, setError] = React.useState("");

  return (
    <div className="signup">
      <div className="signup-container">
        <Formik
          initialValues={{ login: "", password: "", repeatPassword: "" }}
          onSubmit={(data) => {
            if (data.login.length === 0) {
              setError("login is required");
            } else if (data.password.length < 6) {
              setError("your password is too short");
            } else if (data.password !== data.repeatPassword) {
              setError("your password do not match");
            } else console.log(data);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="signup-form" onSubmit={handleSubmit}>
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
                  className="password"
                  id="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="repeatPassword">
                  <b>Re-enter your password:</b>
                </label>
                <Field
                  type="password"
                  className="input"
                  id="repeatPassword"
                  placeholder="repeat password"
                  value={values.repeatPassword}
                  onChange={handleChange}
                />
              </div>
              <span className="btn" onClick={() => handleSubmit()}>
                Sign up
              </span>
              <strong>{error}</strong>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
