import { forwardRef } from "react"
import styles from "./style.module.scss"

export default forwardRef(({ label, id, error }, ref) => {
    return (
        <div>
            <label className="title two" htmlFor={id} >{label}</label>
            <select id={id} ref={ref}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            {error ? <p>{error.message}</p> : null}
        </div>
    )
}
) 
