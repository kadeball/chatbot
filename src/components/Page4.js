import React from "react";
import {Link} from "react-router-dom";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";



function Page4(){

    let styles = {
        width: "550px",
        height: "70px",
        backgroundColor: "white",
        borderRadius: "5px",
        position: "relative",
        top: "5px"
    };

    let heading = {
        position: "relative",
        left: "100px",
        bottom: "70px"
    };

    let icon = {
        fontSize: "50px",
        position: "relative",
        top: "10px"
    };


    return(
        <div>
            <div style={styles}>
                <Link to="/"> <EmojiPeopleIcon style={icon}></EmojiPeopleIcon></Link>
                <h1 style={heading}>Welcome</h1>
            </div>
            <div className="textbox">
                <h1>According to Dr.Susan's notes from 9/12, you will have to rest for the next 2 days because of the serious throat infection.</h1>
            </div>
            <div className="messagebubble1">
                <p>Is there anything else?</p>
            </div>
            <div className="messagebubble1">
                <p>No, that's all for now</p>
            </div>
            <div className="messagebubble">
                <p>Default</p>
            </div>
        </div>
    )
}

export default Page4;