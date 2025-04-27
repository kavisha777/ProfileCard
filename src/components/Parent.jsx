import React from "react";
import Child from "./Child";
import savi from "../assets/Images/savi.png";
import kavi from "../assets/Images/kavi.png";
import milo from "../assets/Images/milo.png";
import banu from "../assets/Images/banu.png";
import vino from "../assets/Images/vino.png";



function Parent() {
    return (
        <div>
            <Child img={savi}  name="Saveena"     age={20}  bio="I am a software engineer Student" />
            <Child img={milo} name="Milomika"    age={20}  bio="I am a Computer Science student" />
            <Child img={kavi}  name="Kavishagini" age={20}  bio="I am a Web Development student" />
            <Child img={banu}  name="Banupriya"    age={20}  bio="I am a Medical student" /> 
            <Child img={vino} name="Vinojina"   age={20}  bio="I am a Data Science student" />
            
            
        </div>
    )
}


export default Parent;