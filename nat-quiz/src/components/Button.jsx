import { useState } from "react";

export const Button = ({value, ...props}) =>

 {  
    return (
        <button {...props} className="btn" >{value}</button>
    )
}