import loading from "../../img/loading.svg";
import styles from "./Loading.module.css";

export function Loading() {
    return (
        <div className={styles.loader_container}>
            <img clasName={styles.loader} src={loading} alt="Loading" />
        </div>
    )
    
}