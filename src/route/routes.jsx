import Home from "../pages/Home/Home";
// import PageNotFound from "../pages/PageNotFound/PageNotFound";
import User from "../pages/User/User";
import Explore from "../pages/Explore/Explore";
import Message from "../pages/Message/Message";
import Reels from "../pages/Reels/Reels";
import Stories from "../pages/Stories/Stories";

const publicRoute = [
  {path:"/",component:Home},
  {path:"/explore",component:Explore},
  {path:"/direct/inbox",component:Message},
  {path:"/reels",component:Reels},
  {path:"/stories",component:Stories},
  {path:"*",component:User},
  // {path:"*",component:PageNotFound},
]

const privateRoute = []

export {publicRoute , privateRoute}