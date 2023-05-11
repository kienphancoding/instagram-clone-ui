import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Search.module.scss";
import { users } from "../../../User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Search = ({ isShowRef }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (input.trim() !== "") {
      let dataUser = users.filter((item) => {
        return item.nickname.includes(input);
      });
      setData(dataUser);
    } else {
      setData([]);
    }
  }, [input]);

  return (
    <div className={clsx(style.wrapper)} ref={isShowRef}>
      <div className={clsx(style.form)}>
        <h1 className={clsx(style.title)}>Tìm kiếm</h1>
        <input
          className={clsx(style.input)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tìm kiếm"
          spellCheck="false"
        />
      </div>

      <div className={clsx(style.searchList)}>
        <div className={clsx(style.wrapperItem)}>
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/${item?.nickname}`}
                className={clsx(style.searchItem)}
              >
                <div className={clsx(style.wrapperImage)}>
                  <img
                    className={clsx(style.image)}
                    alt="Avatar"
                    src={item?.avatar}
                  />
                </div>
                <div className={clsx(style.wrapperInfo)}>
                  <p className={clsx(style.name)}>
                    {item?.nickname}{" "}
                    {item?.isVerified && (
                      <FontAwesomeIcon icon={faCircleCheck} />
                    )}
                  </p>
                  <p className={clsx(style.realname)}>{item?.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
