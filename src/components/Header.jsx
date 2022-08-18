import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./src/meme.jpg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - Project 8</h4>
        </header>
    )
}