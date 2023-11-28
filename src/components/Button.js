import React from 'react'
import classes from "./Button.module.css";

function Button({value, handler}) {
  return (
    <div className={value =="C" || value == "=" ? `${classes.calbtns} ${classes.res}` : `${classes.calbtns}`} onClick={()=>handler(value)}>
        {value}
    </div>
  )
}

export default Button;
