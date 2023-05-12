import clsx from "clsx";
import style from "./Stories.module.scss";

const Stories = () => {
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

export default Stories;
