import clsx from "clsx";
import Sidebar from "./components/Sidebar/Sidebar";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
  console.clear();
  return (
    <div className={clsx(style.container)}>
      <Sidebar />
      <div className={clsx(style.content)}>{children}</div>
    </div>
  );
};

export default Layout;
