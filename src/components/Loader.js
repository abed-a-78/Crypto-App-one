//Styles
import styles from "./Loader.module.css"

import { GridLoader } from "react-spinners";

const Loader = () => {
    return (
        <>
            <div className={styles.container}>
                <GridLoader color="#36d7b7" width={5000} />
            </div>
        </>
    );
};

export default Loader;