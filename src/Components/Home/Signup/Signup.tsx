import * as React from "react";
import "./Signup.css";
import { Formik } from "formik";

export interface SignupProps {}

const Signup: React.SFC<SignupProps> = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <Formik
          initialValues={{ login: "", password: "", repeatPassowrd: "" }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <form className="signup-form">
              <h2 style={{ margin: 0, textAlign: "center" }}>Sign up</h2>
              <div className="input-container">
                <label htmlFor="login">
                  <b>Enter your login:</b>
                </label>
                <input
                  className="input"
                  id="login"
                  placeholder="login"
                  value={values.login}
                  onChange={handleChange}
                />
              </div>
              <span className="btn" onClick={handleSubmit}>
                Submit
              </span>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
