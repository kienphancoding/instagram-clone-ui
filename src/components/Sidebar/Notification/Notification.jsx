import clsx from "clsx";
import style from "./Notification.module.scss";

const Notification = ({ isShowRef }) => {
  return (
    <div className={clsx(style.wrapper)} ref={isShowRef}>
      <h1 className={clsx(style.title)}>Thông báo</h1>

      <div className={clsx(style.loading)}>
        <div className={clsx(style.spinner)}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
