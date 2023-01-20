import React from 'react'
import './Card.css';

const Card=(propscard)=>{
    const classes=' card '+propscard.className;

return (<div className={classes}>{propscard.children}</div>)
}
export default Card