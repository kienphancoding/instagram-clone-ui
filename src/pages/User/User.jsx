import {
  faCircleCheck,
  faHeart,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import style from "./User.module.scss";
import { users } from "../../User";
import PageNotFound from "../PageNotFound/PageNotFound";
import { NameContext } from "../../Layout";

const User = () => {
  const name = useContext(NameContext)
  console.log(name);
  const [data, setData] = useState({
    name: "Kien Phan",
    nickname: "kienphancoding",
    avatar:
      "https://i.pinimg.com/564x/7b/34/8e/7b348e78b1f662ebcb28063a99b7057d.jpg",
    follower_count: "1B",
    following_count: "0",
    description: "Nguoi lap trinh ra ung dung nay",
    isVerified: true,
    website: "https://github.com/kienphancoding",
    posts: [
      {
        img: "https://i.pinimg.com/564x/8d/ff/d6/8dffd67e72859374d36e6d4c5432d399.jpg",
        like_count: "1M",
        comment_count: "1,7K",
      },
      {
        img: "https://i.pinimg.com/736x/97/6b/17/976b174755d818be023b2e3b5dfb5880.jpg",
        like_count: "1M",
        comment_count: "1,7K",
      },
      {
        img: "https://i.pinimg.com/736x/47/04/b3/4704b3bad301798924979924f873ec7a.jpg",
        like_count: "1M",
        comment_count: "1,4K",
      },
    ],
  });

  useEffect(() => {
    const username = window.location.pathname.replace("/", "");
    const dataUser = users.filter((item) => {
      return item.nickname === username;
    });
    setData(dataUser[0]);
  }, [name]);

  return (
    data ? <div className={clsx(style.wrapper)}>
    <div className={clsx(style.header)}>
      <div className={clsx(style.left)}>
        <div className={clsx(style.img)}>
          <img src={data?.avatar} alt="Avatar" />
        </div>
      </div>

      <div className={clsx(style.right)}>
        <div className={clsx(style.menu)}>
          <p className={clsx(style.name)}>{data?.nickname}</p>
          <div className={clsx(style.wrapperIcon)}>
            {data?.isVerified && (
              <FontAwesomeIcon
                className={clsx(style.icon)}
                icon={faCircleCheck}
              />
            )}
          </div>
          <div className={clsx(style.btn, style.btnBlue)}>Theo dõi</div>
          <div className={clsx(style.btn)}>Nhắn tin</div>
          <div className={clsx(style.btnicon)}>
            <svg
              aria-label="Biểu tượng mũi tên xuống"
              color="#000000"
              fill="#000000"
              height="16"
              role="img"
              viewBox="0 0 48 48"
              width="16"
            >
              <path d="M32 25.5c5.2 0 9.5-4.3 9.5-9.5S37.2 6.5 32 6.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5zm0-16c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5-6.5-2.9-6.5-6.5 2.9-6.5 6.5-6.5zm5.5 19h-11c-5.5 0-10 4.5-10 10V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-3.9 3.1-7 7-7h11c3.9 0 7 3.1 7 7V40c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.5c0-5.5-4.5-10-10-10zm-20-4.5c0-.8-.7-1.5-1.5-1.5h-5.5V17c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v5.5H2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h5.5V31c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5.5H16c.8 0 1.5-.7 1.5-1.5z"></path>
            </svg>
          </div>
          <div>
            <svg
              aria-label="Tùy chọn"
              color="#fafafa"
              fill="#fafafa"
              height="32"
              role="img"
              viewBox="0 0 24 24"
              width="32"
            >
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div className={clsx(style.statics)}>
          <div className={clsx(style.text)}>
            <span>{data?.posts?.length}</span> bài viết
          </div>
          <div className={clsx(style.text)}>
            <span>{data?.follower_count} </span>
            người theo dõi
          </div>
          <div className={clsx(style.text)}>
            Đang theo dõi <span>{data?.following_count}</span> người dùng
          </div>
        </div>
        <div className={clsx(style.realname)}>{data?.name}</div>
        {data?.description && (
          <div className={clsx(style.description)}>{data?.description}</div>
        )}
        {data?.website && (
          <a
            href={data?.website}
            target="_blank"
            className={clsx(style.external)}
          >
            {data?.website}
          </a>
        )}
      </div>
    </div>

    <div className={clsx(style.list)}>
      {data?.posts.map((item, index) => {
        if (index % 3 === 0) {
          return (
            <div className={clsx(style.wrap)} key={index}>
              {data.posts.slice(index, index + 3).map((i, y) => {
                return (
                  <div className={clsx(style.item)} key={y}>
                    <div className={clsx(style.box)}>
                      <p style={{ paddingRight: "15px" }}>
                        <FontAwesomeIcon icon={faHeart} /> {i?.like_count}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMessage} />{" "}
                        {i?.comment_count}
                      </p>
                    </div>
                    <img src={i?.img} alt="Img" />
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  </div>:<PageNotFound/>
  );
};

export default User;
