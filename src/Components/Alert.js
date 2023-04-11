import React from 'react'

export default function Alert(props) {
  let converttoupper=(word)=>{
            let lower=word.toUpperCase();
            return lower.charAt(0)+lower.slice(1).toLowerCase()
            
  }
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{converttoupper(props.alert.type)}!{props.alert.msg}</strong>
   
  </div>
  )
}
