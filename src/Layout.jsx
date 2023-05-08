import Sidebar from "./components/Sidebar/Sidebar";
import "./Layout.scss"

const Layout = ({children}) => {
  return ( 
    <div className="container">
      <Sidebar/>
      <div className="content">{children}</div>
    </div>
   );
}
 
export default Layout;