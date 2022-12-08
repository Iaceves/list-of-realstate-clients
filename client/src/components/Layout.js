import React from "react";
import NavigationBar from "./NavigationBar";

function Layout({ children }) {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <main>{children}</main>
    </>
  );
}

export default Layout;
