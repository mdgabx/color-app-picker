import ColorPicker from "../color-picker";
import "./styles.css"
import { useState } from "react";

const Home = () => {
    return (
    <div className="home">
        <h1>Color picker</h1>
        <ColorPicker />
    </div>
    )
}

export default Home;
