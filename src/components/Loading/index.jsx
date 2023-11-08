import LoadingIcon from "../../assets/LoadingIcon.svg"
import styles from "./style.module.scss"


export const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={LoadingIcon} alt="Loading Icon" />
        </div>
    )
}