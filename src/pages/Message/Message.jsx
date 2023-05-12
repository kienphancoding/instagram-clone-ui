import clsx from "clsx";
import style from "./Message.module.scss";

const Message = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.loading)}>
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
  );
};

export default Message;
