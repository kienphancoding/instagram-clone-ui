import style from "./Reels.module.scss";
import clsx from "clsx";

const Reels = () => {
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

export default Reels;
