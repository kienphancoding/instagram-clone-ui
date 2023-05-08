import clsx from "clsx";
import style from "./Explore.module.scss";

const Explore = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.contentRight)}>
        <div className={clsx(style.itemImg1,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemImg2,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemImg3,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemImg4,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemVideo)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
      </div>

      <div className={clsx(style.contentLeft)}>
        <div className={clsx(style.itemImg1,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemImg2,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemImg3,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemImg4,style.itemImg)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
        <div className={clsx(style.itemVideo)}>
          <img
            src="https://i.pinimg.com/564x/3d/5c/92/3d5c92a42b40a916006438cfd2c52923.jpg"
            alt="Item Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
