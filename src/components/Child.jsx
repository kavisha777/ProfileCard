import React from "react";
import savi from "../assets/Images/savi.png";
import banu from "../assets/Images/banu.png";
import kavi from "../assets/Images/kavi.png";
import milo from "../assets/Images/milo.png";
import vino from "../assets/Images/vino.png";
import rubzz from "../assets/Images/rubzz.png";


function Child(props) {
    return(
        <div className="props">
            <h1>My name is{props.name} </h1>
            <p>My Age is {props.age}</p>
            <img>{props.img}</img>
            <p>My Bio is {props.bio}</p>


        </div>
    );
}


export default Child;