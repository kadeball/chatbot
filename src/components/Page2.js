import React from "react";
import {Link} from "react-router-dom";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";



function Page2(){

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
                <h1>I see two plans available in the notes, one in Dr.Dre's notes and the other in Dr.Susan's. Who's notes do you want me to check?</h1>
            </div>
            <div className="messagebubble1">
                 <p>Dr.Dre</p>
            </div>
            <div className="messagebubble1">
                <Link to="/Page3">  <p>Dr.Susan</p></Link>
            </div>
            <div className="messagebubble">
              <p>Default</p>
            </div>
        </div>
    )
}

export default Page2;