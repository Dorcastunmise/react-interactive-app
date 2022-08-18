import React from "react";
import photo from "./meme.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                src={photo} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - Project 8</h4>
        </header>
    )
}