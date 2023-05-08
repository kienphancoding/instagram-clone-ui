import clsx from "clsx";
import { useState } from "react";
import style from "./Home.module.scss";

const Home = () => {
  const [input, setInput] = useState("");
  const others = ["Giới thiệu","Trợ giúp","Báo chí", "API","Việc làm","Quyền riêng tư","Điều khoản","Vị trí","Ngôn ngữ"]
  
  return (
    <div className={clsx(style.wrapper)}>
      {/* ---------------CONTENT------------------ */}
      <div className={clsx(style.content)}>
        <div className={clsx(style.list)}>
          <div className={clsx(style.item)}>
            {/* -----------------Header----------------- */}
            <div className={clsx(style.header)}>
              <div className={clsx(style.title)}>
                <div className={clsx(style.img)}>
                  <img
                    src="https://i.pinimg.com/564x/dd/ed/2b/dded2b8b4adc4371be37be47893d2f68.jpg"
                    alt="Avatar"
                  />
                </div>
                <div className={clsx(style.name)}>docsachcungminh</div>
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
              <img
                src="https://i.pinimg.com/736x/e9/39/03/e9390393f7926aa9f04025d6a02436a2.jpg"
                alt="Content"
              />
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

            <div className={clsx(style.like)}>1.143 lượt thích</div>
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
                  input === "" ? clsx(style.btn) : clsx(style.btn, style.active)
                }
              >
                Đăng
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------INFO------------------------ */}
      <div className={clsx(style.hint)}>
        <div className={clsx(style.myinfo)}>
          <div className={clsx(style.left)}>
            <div className={clsx(style.img)}>
              <img
                src="https://i.pinimg.com/564x/ce/28/5a/ce285aec4a6de75175c709d931138cf8.jpg"
                alt="Avatar"
              />
            </div>
            <div className={clsx(style.info)}>
              <div className={clsx(style.name)}>kienphanit</div>
              <div className={clsx(style.realname)}>Kine Phan</div>
            </div>
          </div>
          <div className={clsx(style.right)}>Chuyen</div>
        </div>

        <div className={clsx(style.header)}>
          <div className={clsx(style.left)}>Gợi ý cho bạn</div>
          <div className={clsx(style.right)}>Xem tất cả</div>
        </div>
        <div className={clsx(style.listHint)}>
          <div className={clsx(style.itemHint)}>
            <div className={clsx(style.left)}>
              <div className={clsx(style.img)}>
                <img
                  src="https://i.pinimg.com/564x/ce/28/5a/ce285aec4a6de75175c709d931138cf8.jpg"
                  alt="Avatar"
                />
              </div>
              <div className={clsx(style.info)}>
                <div className={clsx(style.name)}>kienphanit</div>
                <div className={clsx(style.realname)}>Kine Phan</div>
              </div>
            </div>
            <div className={clsx(style.right)}>Theo doi</div>
          </div>
        </div>
        <div className={clsx(style.other)}>
          {others.map((item,index)=>{
            return(
              <div className={clsx(style.itemOther)} key={index}>{item}</div>
            )
          })}
        </div>
        <div className={clsx(style.footer)}>© 2023 INSTAGRAM FROM KIENPHANIT</div>
      </div>
    </div>
  );
};

export default Home;
