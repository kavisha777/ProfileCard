import React from "react";
import savi from "../assets/Images/savi.png";
import banu from "../assets/Images/banu.png";
import kavi from "../assets/Images/kavi.png";
import milo from "../assets/Images/milo.png";
import vino from "../assets/Images/vino.png";
import rubzz from "../assets/Images/rubzz.png";


function Child(props) {
    return(
        <>
        <div className="props">
           <div className="img">  <img src={props.img}/></div>
           <br/><br/><br/><br/>
           <div className="text"> <h1>My name is {props.name} </h1>
            <p>My Age is {props.age}</p>
           
            <p>My Bio is {props.bio}</p>
            </div>

        </div>
        </>
    );
}


export default Child;