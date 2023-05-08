import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import clsx from "clsx";
import style from "./User.module.scss";

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const username = window.location.pathname.replace("/", "");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "455e2c45edmshbf733020c7390ebp1e3526jsn1a1dc365378f",
        "X-RapidAPI-Host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
      },
    };

    fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=${username}&response_type=short&corsEnabled=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response[0]))
      .catch((err) => console.error(err));
  }, [window.location.pathname]);
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.header)}>
        <div className={clsx(style.left)}>
          <div className={clsx(style.img)}>
            <img src={data?.profile_pic_url} alt="Avatar" />
          </div>
        </div>

        <div className={clsx(style.right)}>
          <div className={clsx(style.menu)}>
            <p className={clsx(style.name)}>{data?.username}</p>
            <div className={clsx(style.wrapperIcon)}>
              {data?.is_verified && (
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
              <span>{data?.media_count}</span> bài viết
            </div>
            <div className={clsx(style.text)}>
              <span>
                {data?.follower_count > 1000000
                  ? Math.floor(data?.follower_count / 1000000) + " Tr"
                  : data?.follower_count}
              </span>{" "}
              người theo dõi
            </div>
            <div className={clsx(style.text)}>
              Đang theo dõi <span>{data?.following_count}</span> người dùng
            </div>
          </div>
          <div className={clsx(style.realname)}>{data?.full_name}</div>
          {data?.biography && (
            <div className={clsx(style.description)}>{data?.biography}</div>
          )}
          {data?.external_url && (
            <div className={clsx(style.external)}>{data?.external_url}</div>
          )}
        </div>
      </div>

      <div className={clsx(style.list)}></div>
    </div>
  );
};

export default User;
