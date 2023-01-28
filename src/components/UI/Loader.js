import styles from "./Loader.module.scss";
import loaderImg from "../../assets/04de2e31234507.564a1d23645bf.gif";
import ReactDOM from "react-dom";

const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderImg} alt="Loading..." />
        </div>
        </div>,
        document.getElementById("loader")
    );
};

export default Loader;