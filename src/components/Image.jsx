import React from "react";

function Image(props){
    return(
        <img className="circle-img"
          src={props.imgURL}
          alt="avatar_img"
        />
    )
}

export default Image;