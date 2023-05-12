import clsx from "clsx";
import Sidebar from "./components/Sidebar/Sidebar";
import style from "./Layout.module.scss";
import { createContext, useState } from "react";

export const NameContext = createContext();

const Layout = ({ children }) => {
  const [name, setName] = useState("");
  console.clear();

  return (
    <NameContext.Provider value={name}>
      <div className={clsx(style.container)}>
        <Sidebar setName={setName} />
        <div className={clsx(style.content)}>{children}</div>
      </div>
    </NameContext.Provider>
  );
};

export default Layout;
