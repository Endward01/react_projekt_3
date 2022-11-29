import "./Loader.css";

const Loader = ({ loaded }) => {
  if (!loaded) {
    return (
      <div class="loaderOuter">
        <div class="loaderInner"></div>
      </div>
    );
  }
};

export default Loader;
