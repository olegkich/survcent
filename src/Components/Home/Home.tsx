import * as React from "react";
import "./Home.css";
import { RouteChildrenProps } from "react-router-dom";

export interface HomeProps extends RouteChildrenProps {}

const Home: React.SFC<HomeProps> = ({ history }) => {
  const onLogin = () => {
    history.push("./login");
  };

  const onSignup = () => {
    history.push("./signup");
  };

  return (
    <div className="home">
      <div className="home-wrapper">
        <h1>Welcome to survcent</h1>
        <div>
          <span
            className="btn"
            style={{ marginRight: 10, marginLeft: 10 }}
            onClick={onLogin}
          >
            Login
          </span>
          <span
            className="btn"
            style={{ marginRight: 10, marginLeft: 10 }}
            onClick={onSignup}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
