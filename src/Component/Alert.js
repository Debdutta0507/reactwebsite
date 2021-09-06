import React from 'react'

export default function Alert(props) {
    const capitalize=(str)=>{
        let text
        text=str.charAt(0).toUpperCase()+str.slice(1);
        return text;

    }
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong> {capitalize(props.alert.type)} {props.alert.msg}</strong>
               
            </div>

        </div>
    )
}
