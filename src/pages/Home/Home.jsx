import clsx from "clsx";
import { useState } from "react";
import style from "./Home.module.scss";
import { contents, itemHints } from "./Content";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [input, setInput] = useState("");
  const [indexContent, setIndexContent] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const others = [
    "Giới thiệu",
    "Trợ giúp",
    "Báo chí",
    "API",
    "Việc làm",
    "Quyền riêng tư",
    "Điều khoản",
    "Vị trí",
    "Ngôn ngữ",
  ];

  const listStory = [
    {
      image:
        "https://i.pinimg.com/736x/3a/19/35/3a1935517d13446c533935d80efd31a3.jpg",
      name: "anya",
    },
    {
      image:
        "https://i.pinimg.com/564x/9a/18/0c/9a180c1f3294f1d9e1a4d8b3a2dbd8fb.jpg",
      name: "cr7",
    },
    {
      image:
        "https://i.pinimg.com/564x/c4/fa/e4/c4fae48c97dfcf1c04d4eb9b607080fd.jpg",
      name: "benxenma",
    },
    {
      image:
        "https://i.pinimg.com/564x/bb/db/71/bbdb7104ccb0e472f6fec793b54f2a98.jpg",
      name: "chopper",
    },
    {
      image:
        "https://i.pinimg.com/736x/54/91/f7/5491f74dbec32fea3ebe6e554492f800.jpg",
      name: "bantans",
    },
    {
      image:
        "https://i.pinimg.com/564x/65/ea/51/65ea514011a4782624b2bd7d6e81ade3.jpg",
      name: "leomessi",
    },
    {
      image:
        "https://i.pinimg.com/736x/f1/34/19/f134190defa3f4d2ffecd7e5e5d2c99e.jpg",
      name: "tesla",
    },
    {
      image:
        "https://i.pinimg.com/564x/84/4c/6d/844c6ddbc0f72dabcba17583415e742a.jpg",
      name: "johnwick",
    },
    {
      image:
        "https://i.pinimg.com/564x/a3/05/29/a305291834fe01bcfdd47f791111dbf2.jpg",
      name: "cathaerin",
    },
  ];

  const [indexStory, setIndexStory] = useState(0);

  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.wrapStoryAndContent)}>
        {/* -----------------------STORY----------------------- */}
        <div className={clsx(style.story)}>
          {indexStory !== 0 && (
            <div
              className={clsx(style.leftStory, style.buttonStory)}
              onClick={() => setIndexStory((prev) => prev - 1)}
            >
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className={clsx(style.iconStory)}
              />
            </div>
          )}
          {indexStory < listStory.length - 5 && (
            <div
              className={clsx(style.rightStory, style.buttonStory)}
              onClick={() => setIndexStory((prev) => prev + 1)}
            >
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className={clsx(style.iconStory)}
              />
            </div>
          )}
          <div className={clsx(style.listStory)}>
            {listStory.map((item, index) => {
              return (
                <Link
                  to="/stories"
                  className={clsx(style.itemStory)}
                  key={index}
                  style={{ translate: `${indexStory * -86}px` }}
                >
                  <img
                    className={clsx(style.imgStory)}
                    alt=""
                    src={item.image}
                  />
                  <p className={clsx(style.nameStory)}>{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* ---------------CONTENT------------------ */}
        <div className={clsx(style.content)}>
          <div className={clsx(style.list)}>
            {contents.map((item, index) => {
              return (
                <div className={clsx(style.item)} key={index}>
                  {/* -----------------Header----------------- */}
                  <div className={clsx(style.header)}>
                    <div className={clsx(style.title)}>
                      <div className={clsx(style.img)}>
                        <img
                          src={item.link_avatar}
                          alt="Avatar"
                          onMouseOver={() => {
                            setIndexContent(index);
                            setIsShow(true);
                          }}
                          onMouseLeave={() => setIsShow(false)}
                        />
                      </div>
                      <div className={clsx(style.name)}>{item.name}</div>
                    </div>
                    <div className={clsx(style.menu)}>
                      <svg
                        className={clsx(style.svg)}
                        aria-label="Tùy chọn khác"
                        color="#8e8e8e"
                        fill="#fafafa"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                      </svg>
                    </div>
                  </div>

                  {/* --------------------Image-------------------- */}
                  <div className={clsx(style.imageContent)}>
                    <img src={item.link_image} alt="Content" />
                  </div>

                  {/* --------------------Tools---------------------- */}
                  <div className={clsx(style.tools)}>
                    <div className={clsx(style.left)}>
                      <div className={clsx(style.menuitem)}>
                        <svg
                          className={clsx(style.svg)}
                          aria-label="Thích"
                          color="#fafafa"
                          fill="#fafafa"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                      </div>

                      <div className={clsx(style.menuitem)}>
                        <svg
                          className={clsx(style.svg)}
                          aria-label="Bình luận"
                          fill="#fafafa"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path
                            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </div>

                      <div className={clsx(style.menuitem)}>
                        <svg
                          className={clsx(style.svg)}
                          aria-label="Chia sẻ bài viết"
                          color="#fafafa"
                          fill="#fafafa"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <line
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="22"
                            x2="9.218"
                            y1="3"
                            y2="10.083"
                          ></line>
                          <polygon
                            fill="none"
                            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                    <div className={clsx(style.right)}>
                      <div className={clsx(style.menuitem)}>
                        <svg
                          aria-label="Lưu"
                          color="#fafafa"
                          fill="#fafafa"
                          height="24"
                          role="img"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <polygon
                            fill="none"
                            points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className={clsx(style.like)}>
                    {item.like_count} lượt thích
                  </div>
                  <div className={clsx(style.comment)}>
                    <input
                      className={clsx(style.input)}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      spellCheck="false"
                      placeholder="Thêm bình luận..."
                    />
                    <div
                      className={
                        input === ""
                          ? clsx(style.btn)
                          : clsx(style.btn, style.active)
                      }
                    >
                      Đăng
                    </div>
                  </div>

                  {/* --------------DETAIL---------------------- */}
                  {isShow && indexContent === index && (
                    <div className={clsx(style.detail)}>
                      <div className={clsx(style.headerDetail)}>
                        <img
                          className={clsx(style.avatar)}
                          src={item.link_avatar}
                          alt="Anh"
                        />
                        <div className={clsx(style.info)}>
                          <p className={clsx(style.nickname)}>{item.name}</p>
                          <p className={clsx(style.name)}>{item.real_name}</p>
                        </div>
                      </div>

                      <div className={clsx(style.number)}>
                        <p>{item.post_count}</p>
                        <p>{item.follower_count}</p>
                        <p>{item.following_count}</p>
                      </div>
                      <div className={clsx(style.text)}>
                        <p>bài viết</p>
                        <p>người theo dõi</p>
                        <p>đang theo dõi</p>
                      </div>
                      <div className={clsx(style.image)}>
                        {item.list_image.map((i, y) => {
                          return <img key={y} src={i} alt="Anh" />;
                        })}
                      </div>
                      <div className={clsx(style.menu)}>
                        <div className={clsx(style.message)}>Nhắn tin</div>
                        <div className={clsx(style.follow)}>Đang theo dõi</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------------------INFO------------------------ */}
      <div className={clsx(style.hint)}>
        <div className={clsx(style.myinfo)}>
          <div className={clsx(style.left)}>
            <div className={clsx(style.img)}>
              <img
                src="https://i.pinimg.com/564x/45/b1/47/45b1472dc287e00f2326bf63a4c2bef5.jpg"
                alt="Avatar"
              />
            </div>
            <div className={clsx(style.info)}>
              <div className={clsx(style.name)}>my_nick_name</div>
              <div className={clsx(style.realname)}>Kien Phan</div>
            </div>
          </div>
          <div className={clsx(style.right)}>Switch</div>
        </div>

        <div className={clsx(style.header)}>
          <div className={clsx(style.left)}>Gợi ý cho bạn</div>
          <div className={clsx(style.right)}>Xem tất cả</div>
        </div>
        <div className={clsx(style.listHint)}>
          {itemHints.map((item, index) => {
            return (
              <div className={clsx(style.itemHint)} key={index}>
                <div className={clsx(style.left)}>
                  <div className={clsx(style.img)}>
                    <img src={item.image} alt="Avatar" />
                  </div>
                  <div className={clsx(style.info)}>
                    <div className={clsx(style.name)}>{item.nickname}</div>
                    <div className={clsx(style.realname)}>{item.name}</div>
                  </div>
                </div>
                <div className={clsx(style.right)}>Follow</div>
              </div>
            );
          })}
        </div>
        <div className={clsx(style.other)}>
          {others.map((item, index) => {
            return (
              <div className={clsx(style.itemOther)} key={index}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={clsx(style.footer)}>
          © 2023 INSTAGRAM FROM KIENPHANIT
        </div>
      </div>
    </div>
  );
};

export default Home;
