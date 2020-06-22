import * as React from "react";
import "./MenuDrawer.css";

export interface MenuDrawerProps {
  isOpen: boolean;
}

const MenuDrawer: React.SFC<MenuDrawerProps> = (props) => {
  const links = ["survey", "list"];

  const cls = ["menu-drawer"];

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href={"/" + link}>{link}</a>
        </li>
      );
    });
  };

  if (!props.isOpen) {
    cls.push("close");
  }

  return (
    <nav className={cls.join(" ")}>
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default MenuDrawer;
