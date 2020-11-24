import React from "react";


export default (props) =>  {
  
  return (
    <div>
      <h1 className="display-4">{props.match.params.item} </h1>
      
      <p className="lead">
        Simple app to manage your contacts
      </p>

      <p className="text-secondary">Version: 1.0.0</p>
    </div>
  )

}
