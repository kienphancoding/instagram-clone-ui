import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const [data,setData] = useState([])

  useEffect(()=>{
    if(input.trim()!==""){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '455e2c45edmshbf733020c7390ebp1e3526jsn1a1dc365378f',
          'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
        }
      };
      
      fetch(`https://instagram47.p.rapidapi.com/search?search=${input}`, options)
        .then(response => response.json())
        .then(response => setData(response.body.users))
        .catch(err => console.error(err));
    }
  },[input])

  return (
    <div className={clsx(style.wrapper)}>
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
          {data.map((item,index)=>{
            return(
              <Link key={index} to={`/${item?.user?.username}`} className={clsx(style.searchItem)}>
            <div className={clsx(style.wrapperImage)}>
              <img
                className={clsx(style.image)}
                alt="Avatar"
                src={item?.user?.profile_pic_url}
              />
            </div>
            <div className={clsx(style.wrapperInfo)}>
              <p className={clsx(style.name)}>{item?.user?.username}</p>
              <p className={clsx(style.realname)}>{item?.user?.full_name}</p>
            </div>
          </Link>
            )
          })}
        </div>

      </div>
    </div>
  );
};

export default Search;
