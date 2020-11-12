import React from "react";
import {Link} from "react-router-dom";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";



function Page3(){

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
                <h1>There are 3 notes from Dr.Susan. They are dated for 9/12, 9/14, and 10/2. Which one should I check?</h1>
            </div>
            <div className="messagebubble1">
                <p>Saturday 9/12</p>
            </div>
            <div className="messagebubble1">
                <Link to="/Page4"> <p>Monday 9/14</p></Link>
            </div>
            <div className="messagebubble1">
                <p>Friday 10/2</p>
            </div>
            <div className="messagebubble">
                <p>Default</p>
            </div>
        </div>
    )
}

export default Page3;