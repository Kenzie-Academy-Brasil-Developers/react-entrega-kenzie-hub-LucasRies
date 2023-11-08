import { forwardRef } from "react"
import styles from "./style.module.scss"


export default forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div className={styles.inputBox}>
            <div>
                <label className="title two" htmlFor={id}>{label}</label>
            </div>
            <div>
                <input id={id} ref={ref} {...rest} />
                {error ? <p>{error.message}</p> : null}
            </div>
        </div>
    )
})

