import clsx from "clsx";
import style from "./Explore.module.scss";

const Explore = () => {
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

export default Explore;
