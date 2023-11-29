/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import  ReactDOM  from "react-dom";

function ShowPage(){
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Why I'm excited to learn React</h1>
            <ul>
                <li>Provides new skills for future employment</li>
                <li>Challenges me to improve myself</li>
                <li>It's a popular library that is frequently used</li>
            </ul>
        </div>
    )
    }

ReactDOM.render(<ShowPage/>, document.getElementById("root"))