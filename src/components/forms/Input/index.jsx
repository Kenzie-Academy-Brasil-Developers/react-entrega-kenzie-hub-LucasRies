import { forwardRef } from "react"

export default forwardRef(({ label, id, ...rest }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} {...rest} />
        </div>
    )
})

