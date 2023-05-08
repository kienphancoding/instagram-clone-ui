import Home from "../pages/Home/Home";
// import PageNotFound from "../pages/PageNotFound/PageNotFound";
import User from "../pages/User/User";
import Explore from "../pages/Explore/Explore";
import Message from "../pages/Message/Message";
import Reels from "../pages/Reels/Reels";

const publicRoute = [
  {path:"/",component:Home},
  {path:"/explore",component:Explore},
  {path:"/direct/inbox",component:Message},
  {path:"/reels/video/",component:Reels},
  {path:"*",component:User},
  // {path:"*",component:PageNotFound},
]

const privateRoute = []

export {publicRoute , privateRoute}