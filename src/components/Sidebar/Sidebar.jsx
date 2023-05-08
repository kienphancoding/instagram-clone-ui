import clsx from "clsx";
import style from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import LogoHome from "./Logo/LogoHome";
import LogoSearch from "./Logo/LogoSearch.jsx";
import LogoExplore from "./Logo/LogoExplore.jsx";
import LogoReels from "./Logo/LogoReels.jsx";
import LogoMessage from "./Logo/LogoMessage.jsx";
import LogoHeart from "./Logo/LogoHeart.jsx";
import LogoCreate from "./Logo/LogoCreate.jsx";
import LogoMenu from "./Logo/LogoMenu.jsx";
import { useState } from "react";
import Search from "./Search/Search";

const Sidebar = () => {
  const [isShow, setIsShow] = useState(false);
  const [indexShow, setIndexShow] = useState(1);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowCreate, setIsShowCreate] = useState(false);

  const list = [
    { type: "Link", link: "/", name: "Trang chủ", icon: LogoHome },
    { type: "Toggle", name: "Tìm kiếm", icon: LogoSearch ,component:Search},
    { type: "Link", link: "/explore", name: "Khám phá", icon: LogoExplore },
    { type: "Link", link: "/reels/video", name: "Reels", icon: LogoReels },
    {
      type: "Link",
      link: "/direct/inbox",
      name: "Tin nhắn",
      icon: LogoMessage,
    },
    { type: "Toggle", name: "Thông báo", icon: LogoHeart },
    { type: "Create", name: "Tạo", icon: LogoCreate },
    {
      type: "Link",
      link: "/kienphanit",
      name: "Trang cá nhân",
      img: "https://i.pinimg.com/736x/90/d0/b8/90d0b8471b7d4aaf9c3f84ac5992e1b8.jpg",
    },
    { type: "Menu", name: "Xem thêm", icon: LogoMenu },
  ];

  let Toggle = list[indexShow].component

  return (
    <div className={clsx(style.wrapper)}>
      <Link to="/" className={clsx(style.logo)}>
        <Logo />
      </Link>
      {list.map((item, index) => {
        const Icon = item.icon;
        if (item.type === "Link") {
          return (
            <Link
              to={item.link}
              className={clsx(style.item)}
              key={index}
              onClick={() => setIsShow(false)}
            >
              <>
                {Icon && (
                  <Icon
                    isActive={
                      window.location.pathname === item?.link && !isShow
                    }
                  />
                )}
                {item.img && (
                  <div
                    className={
                      window.location.pathname === item?.link && !isShow
                        ? clsx(style.img, style.active)
                        : clsx(style.img)
                    }
                  >
                    <img src={item.img} alt="Avatar" />
                  </div>
                )}
              </>
              <p
                className={
                  window.location.pathname === item?.link && !isShow
                    ? clsx(style.text, style.textActive)
                    : clsx(style.text)
                }
              >
                {item.name}
              </p>
            </Link>
          );
        } else if (item.type === "Toggle") {
          return (
            <div
              className={clsx(style.item)}
              key={index}
              onClick={() => {
                setIsShow((prev) => {
                  if (indexShow === index) {
                    return !prev;
                  } else {
                    return true;
                  }
                });
                setIndexShow(index);
              }}
            >
              {Icon && <Icon isActive={index === indexShow && isShow} />}
              <p
                className={
                  isShow && index === indexShow
                    ? clsx(style.text, style.textActive)
                    : clsx(style.text)
                }
              >
                {item.name}
              </p>
            </div>
          );
        } else if (item.type === "Menu") {
          return (
            <div
              className={clsx(style.item)}
              key={index}
              onClick={() => setIsShowMenu((prev) => !prev)}
            >
              {Icon && <Icon isActive={isShowMenu} />}
              <p
                className={
                  isShowMenu
                    ? clsx(style.text, style.textActive)
                    : clsx(style.text)
                }
              >
                {item.name}
              </p>
            </div>
          );
        } else {
          return (
            <div
              className={clsx(style.item)}
              key={index}
              onClick={() => setIsShowCreate((prev) => !prev)}
            >
              {Icon && <Icon isActive={isShowCreate} />}
              <p
                className={
                  isShowCreate
                    ? clsx(style.text, style.textActive)
                    : clsx(style.text)
                }
              >
                {item.name}
              </p>
            </div>
          );
        }
      })}

      {isShow && 
         <Toggle/>}
    </div>
  );
};

export default Sidebar;
