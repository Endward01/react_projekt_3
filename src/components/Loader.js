import style from "../css/Loader.module.css";
const Loader = ({ loaded }) => {
  if (!loaded) {
    return (
      <div class={style.loaderOuter}>
        <div class={style.loaderInner}></div>
      </div>
    );
  }
};

export default Loader;
