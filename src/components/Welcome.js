import React from "react";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import {Link} from "react-router-dom";



function Welcome(){
    let styles = {
        width: "550px",
        height: "70px",
        backgroundColor: "white",
        borderRadius: "5px",
        position: "relative",
        top: "5px"
    };

    let icon = {
        fontSize: "50px",
        position: "relative",
        top: "10px"
    };

    let heading = {
        position: "relative",
        left: "100px",
        bottom: "62px"
    };

    return(
        <div>
        <div style={styles}>
            <Link to="/"> <EmojiPeopleIcon style={icon}></EmojiPeopleIcon></Link>
            <h1 style={heading}>Welcome</h1>
        </div>
        <div className="textbox">
            <h1> Hi there! I am MICAH, your medical assistant.</h1>
        </div>
            <div className="textbox">
                <h1>You can ask me anything, like viewing your medical plans or finding something in your notes</h1>
            </div>
            <div className="messagebubble1">
                <Link to="/Page1"> <p>Hi!</p></Link>
            </div>
            <div className="messagebubble">
                <p>Default</p>
            </div>
        </div>
    )
}

export default Welcome;