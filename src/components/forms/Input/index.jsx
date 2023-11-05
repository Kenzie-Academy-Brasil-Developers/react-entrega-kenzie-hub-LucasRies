import { forwardRef } from "react"

export default forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} />
            {error? <p>{error.message}</p> : null}
        </div>
    )
})

